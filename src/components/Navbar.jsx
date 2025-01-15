// import React from "react";
// import { useSignout } from "../hooks/useSignout";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const { userSignout } = useSignout();
//   const { user } = useSelector((store) => store.user);

//   return (
//     <div>
//       <div className="bg-gray-800 shadow-md rounded-xl mt-5">
//         <div className="navbar flex justify-between px-4">
//           <div className="flex items-center pr-72 ">
//             <h1 className="text-xl font-bold text-blue-500">MyApp</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <div>
//               <label className="swap swap-rotate">
//                 <input type="checkbox" />

//                 <svg
//                   className="swap-on h-8 w-8 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//                 </svg>

//                 <svg
//                   className="swap-off h-8 w-8 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                 </svg>
//               </label>
//             </div>
//             <div className="hidden md:block">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="input input-bordered w-40 md:w-64 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar focus:outline-none"
//               >
//                 <div className="w-10 rounded-full border-2 border-blue-500">
//                   <img alt="User Avatar" src={user.photoURL} />
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-gray-700 text-white rounded-box mt-3 w-52 p-2 shadow-lg border border-gray-600"
//               >
//                 <li>
//                   <a className="flex justify-between hover:bg-gray-600">
//                     Profile
//                   </a>
//                 </li>
//                 <li>
//                   <Link to="/settings" className="hover:bg-gray-600">
//                     Settings
//                   </Link>
//                 </li>
//                 <li>
//                   <span
//                     onClick={userSignout}
//                     className="cursor-pointer hover:bg-gray-600"
//                   >
//                     Logout
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { useSignout } from "../hooks/useSignout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { changeTheme, theme } = useTheme();
  const { userSignout } = useSignout();
  const { user } = useSelector((store) => store.user);

  return (
    <div className="shadow-md rounded-xl mt-5">
      <div className="navbar bg-base-200 flex justify-between px-4">
        <div className="flex items-center pr-72">
          <h1 className="text-xl font-bold text-primary">MyApp</h1>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <label className="grid cursor-pointer place-items-center">
              <input
                onChange={changeTheme}
                defaultChecked={theme == "dracula"}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar focus:outline-none"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-200 shadow mt-3 w-52 p-2 rounded-lg">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <span onClick={userSignout} className="cursor-pointer">
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
