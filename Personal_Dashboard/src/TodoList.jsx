import React, { useState } from "react";
// import { AiOutlineDelete } from 'react-icons/ai';
import { FaTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!task.trim()) return;
    const newTask = { id: Date.now(), task: task, completed: false };
    setTodos([...todos, newTask]);
    setTask("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <div className="flex flex-wrap mb-4 gap-2">
        <input
          type="text"
          className="border p-2 flex-grow"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="border p-2 flex-shrink-0 hover:border-black" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="mb-4 flex gap-2">
        <button
          className={`border p-2 ${
            filter === "All"
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-blue-800"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`border p-2 ${
            filter === "Active"
              ? "bg-red-500 text-white"
              : "bg-red-200 text-red-800"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
        <button
          className={`border p-2 ${
            filter === "Completed"
              ? "bg-green-500 text-white"
              : "bg-green-200 text-green-800"
          }`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-b-2">
            <tr>
              <th className="text-left p-4">Task</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((todo) => (
              <tr key={todo.id} className="border-b">
                <td className={`p-4 ${todo.completed ? "line-through" : ""}`}>
                  {todo.task}
                </td>
                <td className="p-4 text-right flex items-center justify-end">
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <FaTrashAlt
                    className="inline cursor-pointer ml-2"
                    onClick={() => deleteTask(todo.id)}
                  />
                  {/* <FaTrashAlt onClick={() => deleteTask(index)} className="text-red-500 hover:text-red-700 ml-2 cursor-pointer" /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
