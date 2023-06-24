import React, { useState } from "react";

import TaskColumn from "./TaskColumn";
import Sidebar from "../Sidebar";

const Tasks = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (title, column) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: title,
    };

    switch (column) {
      case "Todo":
        setTodoTasks((prevTasks) => [...prevTasks, newTask]);
        break;
      case "Doing":
        setDoingTasks((prevTasks) => [...prevTasks, newTask]);
        break;
      case "Completed":
        setCompletedTasks((prevTasks) => [...prevTasks, newTask]);
        break;
      default:
        break;
    }
  };

  const handleEditTask = (taskId, newTitle, column) => {
    switch (column) {
      case "Todo":
        setTodoTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, title: newTitle } : task
          )
        );
        break;
      case "Doing":
        setDoingTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, title: newTitle } : task
          )
        );
        break;
      case "Completed":
        setCompletedTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, title: newTitle } : task
          )
        );
        break;
      default:
        break;
    }
  };

  const handleDeleteTask = (taskId, column) => {
    switch (column) {
      case "Todo":
        setTodoTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== taskId)
        );
        break;
      case "Doing":
        setDoingTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== taskId)
        );
        break;
      case "Completed":
        setCompletedTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== taskId)
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="bg-yellow-50 h-[100%]">
      <h1 className="text-4xl text-center font-bold pt-10">
        Welcome to your Tasks!
      </h1>
      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 h-[90%]">
          <div class="max-w-[100%] h-[100%] flex">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 w-[80%] relative right-[-18%] h-auto overflow-y-auto ">
              <h1 class="text-3xl font-bold mb-10">Tasks</h1>

              <hr class="my-10" />
              <div className="grid grid-cols-3 gap-4 p-8">
                <TaskColumn
                  title="Todo"
                  tasks={todoTasks}
                  onAddTask={(title) => handleAddTask(title, "Todo")}
                  onEditTask={(taskId, newTitle) =>
                    handleEditTask(taskId, newTitle, "Todo")
                  }
                  onDeleteTask={(taskId) => handleDeleteTask(taskId, "Todo")}
                />
                <TaskColumn
                  title="Doing"
                  tasks={doingTasks}
                  onAddTask={(title) => handleAddTask(title, "Doing")}
                  onEditTask={(taskId, newTitle) =>
                    handleEditTask(taskId, newTitle, "Doing")
                  }
                  onDeleteTask={(taskId) => handleDeleteTask(taskId, "Doing")}
                />
                <TaskColumn
                  title="Completed"
                  tasks={completedTasks}
                  onAddTask={(title) => handleAddTask(title, "Completed")}
                  onEditTask={(taskId, newTitle) =>
                    handleEditTask(taskId, newTitle, "Completed")
                  }
                  onDeleteTask={(taskId) =>
                    handleDeleteTask(taskId, "Completed")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;
