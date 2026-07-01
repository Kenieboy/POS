import { useState } from "react";
import { logoutAPI } from "../features/auth/authAPI";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = useOutletContext();

  // const [user] = useState({
  //   name: "Kenneth Miral",
  //   email: "kenneth@example.com",
  // });

  const handleLogout = async () => {
    try {
      await logoutAPI();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const stats = [
    {
      title: "Total Users",
      value: "1,245",
    },
    {
      title: "Revenue",
      value: "$18,240",
    },
    {
      title: "Orders",
      value: "326",
    },
    {
      title: "Pending Tasks",
      value: "12",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white hidden md:flex flex-col">
        <div className="text-2xl font-bold p-6 border-b border-indigo-600">
          My Dashboard
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-indigo-600">
                Dashboard
              </button>
            </li>

            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-indigo-600 transition">
                Users
              </button>
            </li>

            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-indigo-600 transition">
                Reports
              </button>
            </li>

            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-indigo-600 transition">
                Settings
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back 👋
            </h1>

            <p className="text-gray-500 mt-1">Here's what's happening today.</p>
          </div>

          <div className="text-right">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <p className="text-gray-500">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-xl shadow-sm">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>

            <div className="divide-y">
              {[
                "New user registered",
                "Order #1024 completed",
                "Monthly report generated",
                "Profile updated",
              ].map((activity, index) => (
                <div key={index} className="px-6 py-4 flex justify-between">
                  <span>{activity}</span>
                  <span className="text-gray-400 text-sm">Just now</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
