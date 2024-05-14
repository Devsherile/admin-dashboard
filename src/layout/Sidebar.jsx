import React, { useState } from "react";
import { FaHome, FaComments, FaUsers, FaCog } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/images/eslogo.png";


function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");
  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item); // Toggle active state
  };

  return (
    <div className="text-gray-800 bg-white h-screen w-60 border-r border-r-slate-400">
      <div className="p-4 flex flex-row items-center justify-center gap-2">
      <img src={logo} alt="logo" className="w-16 h-16 rounded-full object-cover "
    />
        <h1 className="text-2xl font-bold">E&S Ltd</h1>
      </div>
      <ul className="py-4 space-y-2">
        <li>
          <Link
            to="/home"
            onClick={() => handleItemClick("Home")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Home" && "bg-gray-700 text-white"
            }`}
          >
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/analytics"
            onClick={() => handleItemClick("Analytics")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Analytics" && "bg-gray-700 text-white"
            }`}
          >
            <BsGraphUp />
            Analytics
          </Link>
        </li>
        <li>
          <Link
            to="/mail"
            onClick={() => handleItemClick("Mail")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Mail" && "bg-gray-700 text-white"
            }`}
          >
            <CiMail />
            Mail
          </Link>
        </li>
        <li>
          <Link
            to="/complain"
            onClick={() => handleItemClick("Complain")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Complain" && "bg-gray-700 text-white"
            }`}
          >
            <FaComments />
            Complain
          </Link>
        </li>
        <li>
          <Link
            to="/payment"
            onClick={() => handleItemClick("Payment")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Payment" && "bg-gray-700 text-white"
            }`}
          >
            <MdPayment />
            Payment
          </Link>
        </li>
        <li>
          <Link
            to="/employee"
            onClick={() => handleItemClick("Employee")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Employee" && "bg-gray-700 text-white"
            }`}
          >
            <FaUsers />
            Employee
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            onClick={() => handleItemClick("Settings")}
            className={`px-4 items-center justify-start pl-10 gap-2 flex flex-row py-2 hover:bg-gray-700 hover:text-white mx-4 rounded-full ${
              activeItem === "Settings" && "bg-gray-700 text-white"
            }`}
          >
            <FaCog />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
