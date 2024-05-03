import React from "react";
import { FaBell, FaCog, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-white p-2  ">
      <div className="flex flex-row bg-slate-100 rounded-lg items-center w-1/3 gap-2 px-2 py-1 text-slate-500 ">
      <FaSearch />
        <input type="text" placeholder="Search..." className="bg-slate-100 outline-none" />
      </div>
      <div className="flex flex-row gap-2 text-slate-600">
        <p className="border border-slate-400 p-2 rounded-full">
          <FaBell />
        </p>
        <p className="border border-slate-400 p-2 rounded-full">
          <FaCog />
        </p>
        <Link to="/profile">
        <p className="border border-slate-400 p-2 rounded-full">
          <FaUser />
        </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
