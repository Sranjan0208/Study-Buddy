import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

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
      const { status, user } = data;
      setUsername(user);

      if (!status) {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // fetch tasks
  const [todoTasks, setTodoTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://study-buddy-backend-alpha.vercel.app/tasks",
        {
          withCredentials: true,
        }
      );

      console.log(data);

      setTodoTasks(data.filter((task) => task.column === "Todo"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="bg-yellow-50 h-[100%] ">
      <Navbar title="Dashboard" />
      <main class=" h-screen relative overflow-auto">
        <div class="px-6 py-8 lg:h-[90%] h-[100%]">
          <div class="max-w-[100%] h-[100%] lg:flex flex flex-col">
            <Sidebar />
            <div class="bg-white rounded-3xl p-8  mb-5 lg:w-[80%] w-[100%] relative lg:right-[-18%]  h-auto overflow-y-auto ">
              <h1 class="lg:text-3xl text-xl font-bold mb-10">Dashboard</h1>

              <hr class="my-10" />

              <div class="lg:grid lg:grid-cols-2 lg:gap-x-20 grid grid-cols-1 grid-rows-2 gap-y-10">
                <div>
                  <h2 class="text-2xl font-bold mb-4">Stats</h2>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2">
                      <div class="p-4 bg-green-100 rounded-xl">
                        <div class="font-bold text-lg lg:text-xl text-gray-800 leading-none">
                          Good day, <br />
                          {username}
                        </div>
                      </div>
                    </div>
                    <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div class="font-bold text-xl lg:text-2xl leading-none">
                        20
                      </div>
                      <div class="mt-2">Tasks finished</div>
                    </div>
                    <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div class="font-bold text-xl lg:text-2xlleading-none">
                        5,5
                      </div>
                      <div class="mt-2">Tracked hours</div>
                    </div>
                    <div class="col-span-2">
                      <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                        <div class="font-bold text-xl leading-none">
                          Your daily plan
                        </div>
                        <div class="mt-2">5 of 8 completed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">Your todos</h2>

                  {todoTasks.map((task) => (
                    <div
                      key={task._id}
                      class="p-4 bg-white border rounded-xl text-gray-800 space-y-2 m-3"
                    >
                      <p class="font-bold hover:text-yellow-800 hover:underline">
                        {task.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
