import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import errorPage from "./components/errorPage.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import Groups from "./components/Groups/Groups.jsx";
import Group from "./components/Groups/Group.jsx";
import Events from "./components/EventsPage/Events.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <errorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <errorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <errorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <errorPage />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
    errorElement: <errorPage />,
  },
  {
    path: "/groups",
    element: <Groups />,
    errorElement: <errorPage />,
  },
  {
    path: "/group",
    element: <Group />,
    errorElement: <errorPage />,
  },
  {
    path: "/events",
    element: <Events />,
    errorElement: <errorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
