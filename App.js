import React, { useState } from 'react';
import './App.css';
import ToDoList from './todolist';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [popupTaskName, setPopupTaskName] = useState('');

  const handleAddClick = () => {
    if (taskInput.trim() !== '') {
      setPopupTaskName(taskInput);
      setShowPopup(true);
    }
  };

const handleSubmitTask = (date, time) => {
  const newTask = {
    name: popupTaskName,
    date,
    time,
    completed: false
  };
  setTasks([...tasks, newTask]);
  setTaskInput('');
  setShowPopup(false);
};

const toggleComplete = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};

  return (
    <div className="app">
      <h1 className="header-title">To-Do List 🕐</h1>

      <div className="input-bar-container">
        <input
          type="text"
          className="task-input-bar"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Type your task here..."
        />
        <button className="add-task-btn" onClick={handleAddClick}>
          Add Task
        </button>
      </div>

      <h2 className="check-task-text">Check Your Task👇</h2>
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} />

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Task</h3>
            <p><b>Task:</b> {popupTaskName}</p>
            <label>Date:</label>
            <input id="date" type="date" />
            <label>Time:</label>
            <input id="time" type="time" />
            <button
              onClick={() => {
                const date = document.getElementById('date').value;
                const time = document.getElementById('time').value;
                if (date && time) handleSubmitTask(date, time);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
