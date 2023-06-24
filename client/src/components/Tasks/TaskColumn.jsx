import React, { useState } from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const TaskColumn = ({ title, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      onAddTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const handleEditTask = (taskId, newTitle) => {
    onEditTask(taskId, newTitle);
    setEditTaskId(null);
  };

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleStartEditing = (taskId, taskTitle) => {
    setEditTaskId(taskId);
    setEditedTaskTitle(taskTitle);
  };

  const handleCancelEditing = () => {
    setEditTaskId(null);
    setEditedTaskTitle("");
  };

  const handleSaveEditing = (taskId) => {
    if (editedTaskTitle.trim() !== "") {
      onEditTask(taskId, editedTaskTitle);
      setEditTaskId(null);
      setEditedTaskTitle("");
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold mr-2">{title}</h2>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="bg-white rounded-lg p-4 shadow mb-4">
            {editTaskId === task.id ? (
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={editedTaskTitle}
                  className="border border-gray-300 rounded-lg px-2 py-1 mb-2"
                  onChange={(e) => setEditedTaskTitle(e.target.value)}
                  autoFocus
                />
                <div>
                  <button
                    onClick={() => handleSaveEditing(task.id)}
                    className="text-green-500 hover:text-green-700 focus:outline-none mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEditing}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{task.title}</span>
                <div>
                  <button
                    onClick={() => handleStartEditing(task.id, task.title)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
                  >
                    <RiEdit2Line />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a task"
        value={newTaskTitle}
        className="0 rounded-lg px-2 py-1"
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TaskColumn;
