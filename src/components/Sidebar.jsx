import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useSignout } from "../hooks/useSignout";
import { BsPersonFillAdd } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  const { userSignout } = useSignout();
  return (
    <div className="bg-gray-900 h-screen w-[300px] text-white flex flex-col">
      <Avatar user={user} />
      <ul className="flex flex-col pr-0 pl-10 mb-auto">
        <li className="nav-item">
          <NavLink className="block px-3 py-2 rounded-l-3xl" to="/">
            <span className="flex items-center gap-2">
              <GoProjectRoadmap className="text-xl" /> Projects
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="block px-3 py-2 rounded-l-3xl" to="/create">
            <span className="flex items-center gap-2">
              <BsPersonFillAdd className="text-2xl" /> Create
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="mb-2  flex justify-center">
        <Link
          to="/settings"
          className="btn btn-outline text-white w-[250px] flex items-center gap-3"
        >
          <IoSettingsOutline className="text-xl" /> Settings
        </Link>
      </div>
      <div className="mb-10  flex justify-center">
        <button
          onClick={userSignout}
          className="btn btn-outline text-white w-[250px] flex items-center gap-3"
        >
          <CiLogout className="text-xl" /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
