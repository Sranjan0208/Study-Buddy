import React from "react";
import { LuGraduationCap, LuMessagesSquare, LuSettings } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { MdGroups, MdEvent } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 rounded-3xl w-[15%] h-[82%] flex flex-col fixed">
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
      </div>
    </div>
  );
};

export default Sidebar;
