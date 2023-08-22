// SettingsPage.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const SettingsPage = () => {
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

  return (
    <div className="bg-yellow-50 h-screen">
      <Navbar title="Settings" />
      <main className="h-screen relative overflow-auto">
        <div class="px-6 py-8 lg:h-[90%] h-[100%]">
          <div class="max-w-[100%] h-[100%] lg:flex flex flex-col">
            <Sidebar />

            <div className="bg-white rounded-3xl p-8 mb-5 w-[80%] relative right-[-18%] h-auto overflow-y-auto">
              <h1 className="text-3xl font-bold mb-10">Settings</h1>
              <hr className="my-10" />

              {/* Profile Information */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Profile Information
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your Name"
                    />
                  </div>
                  {/* Add more fields for profile information as needed */}
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update Profile
                  </button>
                </form>
              </div>

              {/* Change Password */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Change Password</h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="currentPassword"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Current Password"
                    />
                  </div>
                  {/* Add more fields for password change as needed */}
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Change Password
                  </button>
                </form>
              </div>

              {/* Email Preferences */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Email Preferences
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="emailPreference"
                    >
                      Receive Email Notifications
                    </label>
                    <select
                      id="emailPreference"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  {/* Add more fields for email preferences as needed */}
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save Preferences
                  </button>
                </form>
              </div>

              {/* Other Settings */}
              {/* Add other settings related components as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
