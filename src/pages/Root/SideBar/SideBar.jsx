// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex fixed flex-col  border-r-2 border-blue-800  bg-slate-950 shadow-md h-screen w-20 md:w-fit  overflow-hidden ">
      <div className="flex items-center space-x-4 p-4">
        <img
          src="/Images/vibentLogo.jpg"
          alt="Profile"
          className="w-10 h-10 filter invert bg-inherit rounded-full"
        />
        <div className="hidden md:block">
          <h2 className="font-bold font-mono">Vibent</h2>
        </div>
      </div>

      <div className="flex-grow-1  overflow-y-scroll  h-[85vh]">
        <nav className="space-y-4 p-4  md:p-4">
          <NavLink
            to="/root/home"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl">
              <AiFillHome />
            </span>
            <span className="hidden md:block">Home</span>
          </NavLink>

          <NavLink
            to="/root/search"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <IoIosSearch />
            </span>
            <span className="hidden md:block">Search</span>
          </NavLink>

          <NavLink
            to="/root/notification"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <MdNotificationsActive />
            </span>
            <span className="hidden md:block">Notification</span>
          </NavLink>

          <NavLink
            to="/root/create"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <CiSquarePlus />
            </span>
            <span className="hidden md:block">Create</span>
          </NavLink>

          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/root/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 p-2 rounded hover:bg-blue-500 bg-blue-500"
                : "flex items-center space-x-3 p-2 rounded hover:bg-blue-500"
            }
          >
            <span className="text-3xl  ">
              <img
                className="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="profilePic"
              />
            </span>
            <span className="hidden md:block">Profile</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
