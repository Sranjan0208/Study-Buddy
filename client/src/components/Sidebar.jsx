import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { LuGraduationCap, LuMessagesSquare, LuSettings } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { MdGroups, MdEvent } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://study-buddy-backend-alpha.vercel.app/logout",
        {},
        { withCredentials: true }
      );
      removeCookie("token"); // Remove the "token" cookie
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-yellow-400 m-5 font-extrabold text-xl"
        >
          ☰
        </button>
      </div>
      <div
        className={`bg-gray-900 rounded-3xl lg:w-[15%] w-[90%] lg:h-[82%] h-100% lg:flex lg:flex-col fixed z-10 ${
          showSidebar ? "lg:block" : "hidden"
        }`}
      >
        <div className="lg:hidden">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-yellow-400 m-5 font-extrabold text-xl"
          >
            X
          </button>
        </div>
        <h1 className="text-yellow-400 m-10 font-extrabold text-2xl px-1 pb-8 border-b flex">
          <LuGraduationCap className="mr-3" />
          Study Buddy
        </h1>

        <div className="m-10 flex flex-col">
          <Link
            to={"/dashboard"}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <button className="flex">
              <RxDashboard className="m-3" />
              <p className="p-2 ">Dashboard</p>
            </button>
          </Link>
          <Link
            to={"/tasks"}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <button className="flex">
              <FaTasks className="m-3" />
              <p className="p-2 ">Tasks</p>
            </button>
          </Link>
          <Link
            to={"/groups"}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <button className="flex">
              <MdGroups className="m-3" />
              <p className="p-2 ">Groups</p>
            </button>
          </Link>
          <Link
            to={"/events"}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <button className="flex">
              <MdEvent className="m-3" />
              <p className="p-2 ">Events</p>
            </button>
          </Link>
          <Link
            to={"/messages"}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <button className="flex">
              <LuMessagesSquare className="m-3" />
              <p className="p-2 ">Messages</p>
            </button>
          </Link>
          <Link
            to={"/settings"}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <button className="flex">
              <LuSettings className="m-3" />
              <p className="p-2 ">Settings</p>
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="w-[100%] text-white font-bold text-xl hover:bg-yellow-100 rounded-xl transition duration-200 hover:text-yellow-500 ease-in-out mb-4 "
          >
            <div className="flex">
              <FiLogOut className="m-3" />
              <p className="p-2 ">Logout</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
