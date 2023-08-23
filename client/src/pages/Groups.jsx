import React from "react";
import Sidebar from "../components/Sidebar";
import GroupForm from "../components/Groups/GroupForm";
import GroupCards from "../components/Groups/GroupCards";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from "../components/Navbar";

const Groups = () => {
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
      <Navbar title="Groups" />
      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 lg:h-[90%] h-[100%]">
          <div class="max-w-[100%] h-[100%] lg:flex flex flex-col">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 lg:w-[80%] w-[100%] relative lg:right-[-18%] h-auto overflow-y-auto ">
              <h1 class="lg:text-3xl text-xl font-bold mb-10">Groups</h1>
              <hr class="my-5" />

              <GroupForm />
              {/* Cards */}
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                <Link to="/group">
                  <GroupCards
                    groupName={"Group Name"}
                    groupDescription={"Group Description"}
                    createdBy={"John Doe"}
                    online={15}
                  />
                </Link>
                <GroupCards
                  groupName={"Group Name"}
                  groupDescription={"Group Description"}
                  createdBy={"John Doe"}
                  online={15}
                />
                <GroupCards
                  groupName={"Group Name"}
                  groupDescription={"Group Description"}
                  createdBy={"John Doe"}
                  online={15}
                />
                <GroupCards
                  groupName={"Group Name"}
                  groupDescription={"Group Description"}
                  createdBy={"John Doe"}
                  online={15}
                />
                <GroupCards
                  groupName={"Group Name"}
                  groupDescription={"Group Description"}
                  createdBy={"John Doe"}
                  online={15}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Groups;
