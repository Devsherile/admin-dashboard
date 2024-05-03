import React from "react";
import MainLayout from "../../layout/MainLayout";
import { BsGraphUp } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { LuBaggageClaim } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";


function Dashboard() {
  return (
    <div>
        <h1 className="text-2xl font-bold my-6 ml-10">Welcome Back <span className="text-red-300">Mogeni!</span></h1>
      <div className="flex flex-row ">
        <div className="flex flex-row mx-auto gap-10 p-4 justify-start items-center rounded-lg shadow-lg bg-red-300 w-60">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">Visitors Today</h2>
            <p>5600</p>
          </div>
          <div>
            <p className="text-white bg-red-100 rounded-full p-2">
              <BsGraphUp className="text-xl" />
            </p>
          </div>
        </div>
        <div className="flex flex-row mx-auto gap-10 p-4 justify-start items-center rounded-lg shadow-lg bg-slate-400 w-60">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">New Members</h2>
            <p>250</p>
          </div>
          <div>
            <p className="text-white bg-slate-200 rounded-full p-2">
              <HiUserGroup className="text-xl" />
            </p>
          </div>
        </div>
        <div className="flex flex-row mx-auto gap-10 p-4 justify-start items-center rounded-lg shadow-lg bg-sky-400 w-60">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">New Orders</h2>
            <p>852</p>
          </div>
          <div>
            <p className="text-white bg-sky-200 rounded-full p-2">
              <LuBaggageClaim className="text-xl" />
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 p-4 mx-auto justify-start items-center rounded-lg shadow-lg bg-teal-300 w-60">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">Total Earnings</h2>
            <h1>$1350</h1>
          </div>
          <div>
            <p className="text-white bg-teal-100 rounded-full p-2">
              <FaDollarSign className="text-xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout(Dashboard);
