import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";
import OnlineUsers from "../components/OnlineUsers";

function MainLayout() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <main>
        <Navbar />
        <Outlet />
      </main>
      <OnlineUsers />
    </div>
  );
}

export default MainLayout;
