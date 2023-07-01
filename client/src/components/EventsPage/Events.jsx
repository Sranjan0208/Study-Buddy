import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Events = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

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
      console.log(data);

      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <div className="bg-yellow-50 h-[100%]">
      <Navbar title="Events" />

      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 h-[90%]">
          <div class="max-w-[100%] h-[100%] flex">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 w-[80%] relative right-[-18%] h-auto overflow-y-auto">
              <h1 class="text-3xl font-bold mb-10">Events</h1>
              <hr class="my-5" />
              <h1 className="flex items-center justify-center text-4xl">
                COMING SOON !!
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
