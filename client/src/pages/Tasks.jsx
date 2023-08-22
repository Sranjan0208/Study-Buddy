import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import TaskColumn from "../components/Tasks/TaskColumn";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Tasks = () => {
  // server-side logic
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:8000",
        {},
        { withCredentials: true }
      );
      const { status } = data;

      if (!status) {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // Client-side logic
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks", {
        withCredentials: true,
      });

      console.log(data);

      setTodoTasks(data.filter((task) => task.column === "Todo"));
      setDoingTasks(data.filter((task) => task.column === "Doing"));
      setCompletedTasks(data.filter((task) => task.column === "Completed"));
      navigate("/tasks");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  // add task
  const handleAddTask = async (title, column) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/tasks",
        {
          title,
          column,
        },
        {
          withCredentials: true,
        }
      );
      const { newTask } = data;
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
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // edit task
  const handleEditTask = async (taskId, newTitle, column) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/tasks/${taskId}`,
        {
          title: newTitle,
          column,
        },
        {
          withCredentials: true,
        }
      );
      const { task } = data;

      switch (column) {
        case "Todo":
          setTodoTasks((prevTasks) =>
            prevTasks.map((t) => (t._id === taskId ? task || t : t))
          );
          break;
        case "Doing":
          setDoingTasks((prevTasks) =>
            prevTasks.map((t) => (t._id === taskId ? task || t : t))
          );
          break;
        case "Completed":
          setCompletedTasks((prevTasks) =>
            prevTasks.map((t) => (t._id === taskId ? task || t : t))
          );
          break;
        default:
          break;
      }
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTask = async (taskId, column) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`, {
        withCredentials: true,
      });
      switch (column) {
        case "Todo":
          setTodoTasks((prevTasks) =>
            prevTasks.filter((t) => t._id !== taskId)
          );
          break;
        case "Doing":
          setDoingTasks((prevTasks) =>
            prevTasks.filter((t) => t._id !== taskId)
          );
          break;
        case "Completed":
          setCompletedTasks((prevTasks) =>
            prevTasks.filter((t) => t._id !== taskId)
          );
          break;
        default:
          break;
      }
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-yellow-50 h-[100%]">
      <Navbar title="Tasks" />
      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 lg:h-[90%] h-[100%]">
          <div class="max-w-[100%] h-[100%] lg:flex flex flex-col">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 lg:w-[80%] w-[100%] relative lg:right-[-18%] h-auto overflow-y-auto ">
              <h1 class="lg:text-3xl text-xl font-bold mb-10">Tasks</h1>

              <hr class="my-10" />
              <div className="lg:grid lg:grid-cols-3 lg:gap-4 grid grid-cols-1 grid-rows-3 gap-4 lg:p-8 p-1">
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
