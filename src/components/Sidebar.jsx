import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSignout } from "../hooks/useSignout";
import { BsPersonFillAdd } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  const { userSignout } = useSignout();
  return (
    <div className="bg-blue-400 h-screen w-[300px] text-white flex flex-col">
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
      <div className="mb-10  flex justify-center">
        <button
          onClick={userSignout}
          className="btn btn-outline text-white w-[250px]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
