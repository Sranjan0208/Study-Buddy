import React from "react";
import Sidebar from "../Sidebar";

const Events = () => {
  return (
    <div className="bg-yellow-50 h-[100%]">
      <h1 className="text-4xl text-center font-bold pt-10">
        Welcome to your Events!
      </h1>

      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 h-[90%]">
          <div class="max-w-[100%] h-[100%] flex">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 w-[80%] relative right-[-18%] h-auto overflow-y-auto">
              <h1 class="text-3xl font-bold mb-10">Events</h1>
              <hr class="my-5" />
              <h1 className="flex items-center justify-center text-4xl">
                {" "}
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
