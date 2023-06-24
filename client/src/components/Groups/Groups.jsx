import React from "react";
import Sidebar from "../Sidebar";
import GroupFormOverlay from "./GroupForm";
import GroupCards from "./GroupCards";
import { Link } from "react-router-dom";

const Groups = () => {
  return (
    <div className="bg-yellow-50 h-[100%]">
      <h1 className="text-4xl text-center font-bold pt-10">
        Welcome to your Groups!
      </h1>

      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 h-[90%]">
          <div class="max-w-[100%] h-[100%] flex">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8 mb-5 w-[80%] relative right-[-18%] h-auto overflow-y-auto ">
              <h1 class="text-3xl font-bold mb-10">Groups</h1>
              <hr class="my-5" />

              <GroupFormOverlay />
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
