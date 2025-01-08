import React from "react";
import { useSignout } from "../hooks/useSignout";
import { useSelector } from "react-redux";

function Navbar() {
  const { userSignout } = useSignout();
  const { user } = useSelector((store) => store.user);

  return (
    <div className="bg-gray-800 shadow-md rounded-xl mt-5">
      <div className="navbar flex justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-500">MyApp</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-40 md:w-64 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar focus:outline-none"
            >
              <div className="w-10 rounded-full border-2 border-blue-500">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-700 text-white rounded-box mt-3 w-52 p-2 shadow-lg border border-gray-600"
            >
              <li>
                <a className="flex justify-between hover:bg-gray-600">
                  Profile
                  <span className="badge bg-blue-500 text-white">New</span>
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-600">Settings</a>
              </li>
              <li>
                <span
                  onClick={userSignout}
                  className="cursor-pointer hover:bg-gray-600"
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
