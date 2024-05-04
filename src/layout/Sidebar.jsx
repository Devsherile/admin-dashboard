import React, { useState } from "react";
import {
  FaCog,
  FaComments,
  FaEdit,
  FaEnvelope,
  FaFileInvoice,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard"); 
  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item); // Toggle active state
  };

  return (
    <div className="text-gray-800 bg-white h-screen w-60 border-r border-r-slate-400">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
      </div>
      <ul className="py-4 space-y-2">
        <Link
          to="/dashboard"
          onClick={() => handleItemClick("Dashboard")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Dashboard" && "bg-gray-700 text-white"
          }`}
        >
          <FaHome />
          <li>Dashboard</li>
        </Link>
        <Link
          to="/subscribers"
          onClick={() => handleItemClick("Subscribers")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Subscribers" && "bg-gray-700 text-white"
          }`}
        >
          <FaEnvelope />
          <li>Subscribers</li>
        </Link>
        <Link
          to="/blog"
          onClick={() => handleItemClick("Blog")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Blog" && "bg-gray-700 text-white"
          }`}
        >
          <FaEdit />
          <li>Blog</li>
        </Link>
        <Link
          to="/comments"
          onClick={() => handleItemClick("Comments")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Comments" && "bg-gray-700 text-white"
          }`}
        >
          <FaComments />
          <li>Comments</li>
        </Link>
        <Link
          to="/users"
          onClick={() => handleItemClick("Users")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Users" && "bg-gray-700 text-white"
          }`}
        >
          <FaUsers />
          <li>Users</li>
        </Link>
        <Link
          to="/invoices"
          onClick={() => handleItemClick("Invoices")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Invoices" && "bg-gray-700 text-white"
          }`}
        >
          <FaFileInvoice />
          <li>Invoices</li>
        </Link>
        <Link
          to="/settings"
          onClick={() => handleItemClick("Settings")}
          className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
            activeItem === "Settings" && "bg-gray-700 text-white"
          }`}
        >
          <FaCog />
          <li>Settings</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
