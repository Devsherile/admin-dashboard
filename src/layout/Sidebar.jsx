import React from "react";
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
  return (
    <div className="text-gray-800 bg-white h-screen w-60 border-r border-r-slate-400">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
      </div>
      <ul className="py-4">
        <Link
          to="/dashboard"
          className="px-4 items-center justify-start pl-10  gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaHome />
          <li>Dashboard</li>
        </Link>
        <Link
          to="/subscribers"
          className="px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaEnvelope />

          <li>Subscribers</li>
        </Link>
        <Link
          to="/blog"
          className="px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaEdit />
          <li>Blog</li>
        </Link>
        <Link
          to="/comments"
          className="px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaComments />
          <li>Comments</li>
        </Link>
        <Link
          to="/users"
          className="px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaUsers />
          <li>Users</li>
        </Link>
        <Link
          to="/invoices"
          className="px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaFileInvoice />
          <li>Invoices</li>
        </Link>
        <Link
          to="/settings"
          className="px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full"
        >
          <FaCog />
          <li>Settings</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
