import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay.jsx";
import TodoTask from "./TodoList.jsx";

// Dashboard component for displaying personal dashboard with weather and todo list options
const Dashboard = () => {
  // State variable to track the selected menu (weather or todo)
  const [selectedMenu, setSelectedMenu] = useState("weather");

  // Function to handle menu change
  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
  };

  // Render component
  return (
    <div>
      {/* Header */}
      <header className="bg-white text-black lg:border-b-2 flex flex-row flex-wrap items-center justify-between md:p-6">
        <h1 className="text-xl mr-2 font-bold">Personal Dashboard</h1>
        <div className="flex flex-row items-center ">
          {/* Weather button */}
          <button
            className={`mr-4 focus:outline-none text-lg md:text-xl ${
              selectedMenu === "weather"
                ? "font-bold border border-black px-4 py-1 border-solid"
                : "border-b-4 border-transparent hover:border-black"
            }`}
            onClick={() => handleMenuChange("weather")}
          >
            Weather
          </button>
          {/* Todo button */}
          <button
            className={`focus:outline-none text-lg md:text-xl ${
              selectedMenu === "todo"
                ? "font-bold border border-solid border-black px-4 py-1"
                : "border-b-4 border-transparent hover:border-black"
            }`}
            onClick={() => handleMenuChange("todo")}
          >
            Todo
          </button>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex-grow p-4 my-auto lg:mt-8">
        {/* Displaying WeatherDisplay or TodoTask based on selected menu */}
        {selectedMenu === "weather" ? <WeatherDisplay /> : <TodoTask />}
      </div>
    </div>
  );
};

export default Dashboard;
