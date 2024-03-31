import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiMoonWaningCrescent3,
  WiThunderstorm,
  WiDayHaze,
  WiSmoke,
} from "react-icons/wi";

// WeatherDisplay component for displaying weather details
const WeatherDisplay = () => {
  // State variables for location, weather data, suggestions, local time, and current time
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [localTime, setLocalTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Fetch current time when the component mounts
  useEffect(() => {
    fetchCurrentTime();
  }, []);

  // Function to fetch current time
  const fetchCurrentTime = () => {
    setCurrentTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  // Function to fetch weather data from the API
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=54c0dca2a322f80f1da67cef5292d07e&units=metric`
      );
      const data = response.data;
      // Set weather data in state
      setWeather({
        location: `${data.name}, ${data.sys.country}`,
        temperature: data.main.temp,
        description: data.weather[0].description.toLowerCase(),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        sunrise: data.sys.sunrise * 1000, // Convert Unix timestamp to milliseconds
        sunset: data.sys.sunset * 1000, // Convert Unix timestamp to milliseconds
      });
      // Set local time
      setLocalTime(getLocalTime(data.timezone));
      // Fetch current time when weather data is fetched
      fetchCurrentTime();
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Handle error - show error message to the user
      alert(
        "Error fetching weather data. Please check your location name and try again."
      );
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  // Function to handle input change
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  // Function to refresh weather data
  const refreshWeather = () => {
    fetchWeather();
  };

  // Function to reset location and weather data
  const handleReset = () => {
    setLocation("");
    setWeather(null);
  };

  // Function to get local time based on timezone
  const getLocalTime = (timezone) => {
    const offsetSeconds = new Date().getTimezoneOffset() * 60;
    const currentUTC = new Date().getTime() / 1000;
    const localTime = new Date((currentUTC + timezone + offsetSeconds) * 1000);
    return localTime.toLocaleString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Function to check if it's night time
  const isNightTime = () => {
    if (!weather) return false;
    const currentTimeMilliseconds = new Date().getTime();
    return currentTimeMilliseconds > weather.sunset;
  };

  // Render component
  return (
    <div className="grid  place-items-center">
      {/* Container for weather details */}
      <div className="p-4 bg-gradient-to-r from-blue-400 to-purple-500 lg:w-2/3 md:w-auto rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-white">Weather Details</h2>
        {/* Form for submitting location */}
        <form onSubmit={handleSubmit} className="mb-4 relative">
          {/* Input for location */}
          <input
            type="text"
            value={location}
            onChange={handleChange}
            placeholder="Enter location..."
            className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Buttons for actions */}
          <div>
            <button
              type="submit"
              className="mt-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Weather
            </button>
            <button
              type="button"
              onClick={handleReset}
              className=" mr-2 mt-2 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={refreshWeather}
              className=" bg-green-400 hover:bg-green-500 mt-2 sm:mx-auto text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Refresh
            </button>
          </div>
        </form>
        {/* Container for weather display */}
        <div className="flex flex-wrap justify-center items-center">
          {/* Container for weather icon and description */}
          <div className="flex-initial  w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            {/* Render weather icon and description if weather data is available */}
            {weather && (
              <div className="text-white flex flex-1 w-32 flex-col items-center">
                {/* Render weather icon based on weather description */}
                {weather.description.includes("clear") && (
                  <>
                    {isNightTime() ? (
                      <WiMoonWaningCrescent3 size={80} className="mr-2" />
                    ) : (
                      <WiDaySunny size={80} className="mr-2" />
                    )}
                  </>
                )}
                {weather.description.includes("cloud") && (
                  <WiCloudy size={80} className="mr-2" />
                )}
                {weather.description.includes("rain") && (
                  <WiRain size={80} className="mr-2" />
                )}
                {weather.description.includes("thunderstorm") && (
                  <WiThunderstorm size={80} className="mr-2" />
                )}
                {weather.description.includes("haze") && (
                  <WiDayHaze size={80} className="mr-2" />
                )}
                {weather.description.includes("smoke") && (
                  <WiSmoke size={80} className="mr-2" />
                )}
                {/* Render weather description and temperature */}
                <p className="mr-2 text-lg">{weather.description}</p>
                <p className="text-3xl">{weather.temperature}°C</p>
              </div>
            )}
          </div>
          {/* Container for other weather details */}
          <div className="flex-initial w-full md:w-1/2 lg:w-2/4 items-center">
            {/* Render other weather details if weather data is available */}
            {weather && (
              <div className="text-white">
                {/* Render last updated time, local time, location, humidity, and wind speed */}
                <p>
                  <b>Last Updated:</b> {currentTime}
                </p>
                <p>
                  <b>Local Time and Date:</b> {localTime}
                </p>
                <p>
                  {" "}
                  <b>Location:</b> {weather.location}
                </p>
                <p>
                  {" "}
                  <b>Humidity:</b> {weather.humidity}%
                </p>
                <p>
                  <b>Wind Speed:</b> {weather.windSpeed} km/h
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
