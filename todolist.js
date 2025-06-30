import React from 'react';

const ToDoList = ({ tasks, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-box">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <div className={`task-content ${task.completed ? 'completed' : ''}`}>
            <div><strong>{task.name}</strong></div>
            <div>Date: {task.date}</div>
            <div>Time: {task.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
