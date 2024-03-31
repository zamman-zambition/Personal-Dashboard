**Personal Dashboard Application**
The Personal Dashboard application combines weather display functionality with a todo list feature. Users can easily switch between viewing the current weather and managing their tasks.

**Table of Contents**

> Features

> Installation

> Usage

> Application Structure

> Credits

**Features**

> Weather Display

- View current weather conditions for a specific location
- Displays weather icon, temperature, humidity, and wind speed
- Automatically updates with the latest weather data with get weather button.
- Use reset button to reset the input box.
- Refresh button to refresh the weather according to the time.
  
> Todo List
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks based on completion status (All, Active, Completed)

**Installation**

To run this application locally, ensure you have Node.js and npm installed on your system. 

Then follow these steps:

> Clone the repository to your local machine using the following command:
git clone <repository-url>

> Navigate to the project directory:
cd <project-directory>

> Install dependencies using npm:
npm install

> Start the development server using the following command:
npm run dev

Once the server is running, open your web browser and navigate to (http://localhost:5173/) to view the application.
By following these steps, you'll be able to install and run the application locally on your machine.

**Usage**

This application provides a personalized dashboard with two main features: weather display and todo list management.
> Weather Display:
- By default, upon launching the application, the weather display is presented.
- Click the "Weather" button in the header to access the current weather conditions.
- Enter the desired location in the input field provided.
- To fetch weather data, click the "Get Weather" button or press the Enter key.
- Use the "Refresh" button to update the weather information.
- To clear the input field and reset the weather display, click the "Reset" button.
> Todo List Management:
- Switching to the todo list view is as easy as clicking the "Todo" button in the header. In this view, you can manage your tasks efficiently.
- Adding Tasks: Enter a task in the input field and press Enter or click the "Add Task" button to add it to the list.
- Completing Tasks: To mark a task as completed, simply click the checkbox next to the task.
- Deleting Tasks: Remove unwanted tasks by clicking the trash icon next to each task.
- Filtering Tasks: Tasks can be filtered based on their completion status. Use the "All," "Active," and "Completed" buttons to toggle between different task views.

**Application Structure**
The application consists of the following components:

> Dashboard: Main component that renders the weather display and todo list components.

> WeatherDisplay: Component for displaying weather details.

> TodoTask: Component for managing todo list tasks.

**Credits**

> Icons: Weather icons are provided by the React Icons library.
