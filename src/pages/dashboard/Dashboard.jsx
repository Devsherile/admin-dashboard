import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { BsGraphUp } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { LuBaggageClaim } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
// import data from "./data";
import cards from "./Data";
function Dashboard() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold my-6 ml-10">
        Welcome Back <span className="text-red-300">Mogeni!</span>
      </h1>
      <div className="flex flex-row ">
        {cards.map((item) => (
          <div className="flex flex-row mx-auto gap-10 p-4 justify-start items-center rounded-lg shadow-lg bg-red-300 w-60">
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.value}</p>
            </div>
            <div>
              <p className="text-white bg-red-100 rounded-full p-2">
                {item.icon}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <table className="rounded-lg bg-slate-300 mt-20 h-60 w-full  ">
          <thead className="p-4 ">
            <tr className="">
              {/*<th className="text-start">Select</th>*/}
              <th className="text-start">Customer</th>
              <th className="text-start">Package</th>
              <th className="text-start">Enrolled</th>
              <th className="text-start">Progress</th>
              <th className="text-start">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="items-center justify-start gap-2 flex ">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <p>Jane Cooper</p>
              </td>
              <td>Regular</td>
              <td>Jan 28,2023</td>
              <td>80%</td>
              <td>5 stars</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
                />
              </td>

              <td>Wade Warren</td>
              <td>Professional</td>
              <td>Jan 28,2023</td>
              <td>25%</td>
              <td>4 stars</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
                />
              </td>
              <td>Leslie Alexander</td>
              <td>Enterprise</td>
              <td>Jan 28,2023</td>
              <td>30%</td>
              <td>5 starts</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
                />
              </td>
              <td>Fider Costa</td>
              <td>Regular</td>
              <td>Jan 28,2023</td>
              <td>40%</td>
              <td>3 stars</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainLayout(Dashboard);
