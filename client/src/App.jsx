import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import Groups from "./components/Groups/Groups.jsx";
import Group from "./components/Groups/Group.jsx";
import Events from "./components/EventsPage/Events.jsx";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage.jsx";

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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
