import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useSignout } from "../hooks/useSignout";
import { BsPersonFillAdd } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  const { userSignout } = useSignout();

  return (
    <div className="bg-gradient-to-b from-slate-900 h-screen w-[300px] text-blue-600 flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <Avatar user={user} />
        <p className="text-sm text-gray-400 text-center">{user?.email}</p>
      </div>

      <ul className="flex flex-col gap-2 mt-6 px-6">
        <li className="">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-blue-700 hover:text-white ${
                isActive ? "bg-blue-700 text-white" : "text-gray-300"
              }`
            }
            to="/"
          >
            <GoProjectRoadmap className="text-xl" />
            <span className="font-medium">Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-green-600 hover:text-white ${
                isActive ? "bg-green-600 text-white" : "text-gray-300"
              }`
            }
            to="/create"
          >
            <BsPersonFillAdd className="text-xl" />
            <span className="font-medium">Create</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-slate-300 hover:text-white ${
                isActive ? "bg-slate-600 text-white" : "text-gray-300"
              }`
            }
            to="/profile"
          >
            <CgProfile className="text-xl" />
            <span className="font-medium">Profile</span>
          </NavLink>
        </li>
      </ul>

      <div className="mt-auto px-6 mb-10">
        <Link
          to="/settings"
          className="flex items-center btn-block justify-center gap-3 px-4 py-3 rounded-xl bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-white transition-all mb-3"
        >
          <IoSettingsOutline className="text-xl" />
          <span className="font-medium">Settings</span>
        </Link>

        <button
          onClick={userSignout}
          className="flex items-center  btn-block justify-center gap-3 px-4 py-3 rounded-xl bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white transition-all"
        >
          <CiLogout className="text-xl" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
