import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Groups from "./pages/Groups.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage.jsx";
import SettingsPage from "./pages/Settings.jsx";
import Messages from "./pages/Messages.jsx";

import Group from "./components/Groups/Group.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/groups",
      element: <Groups />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/group",
      element: <Group />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/events",
      element: <Events />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/settings",
      element: <SettingsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/messages",
      element: <Messages />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
