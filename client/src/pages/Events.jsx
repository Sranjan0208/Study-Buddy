import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Events = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "https://study-buddy-backend-alpha.vercel.app",
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

  return (
    <div className="bg-yellow-50 h-[100%]">
      <Navbar title="Events" />

      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 lg:h-[90%] h-[100%]">
          <div class="max-w-[100%] h-[100%] lg:flex flex flex-col">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 lg:w-[80%] w-[100%] relative lg:right-[-18%] h-auto overflow-y-auto">
              <h1 class="lg:text-3xl text-xl font-bold mb-10">Events</h1>
              <hr class="my-5" />
              <h1 className="flex items-center justify-center text-xl lg:text-4xl">
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
