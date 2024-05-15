import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { BsGraphUp } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { LuBaggageClaim } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
// import data from "./data";
// import cards from "./Data";
import { tableData } from "./Data";

const cards = [
  {
    id: 1,
    title: "Visitors Today",
    value: 5600,
    bg: "bg-white",
    icon: <BsGraphUp className="text-xl" />,
  },
  {
    id: 2,
    title: "New Users",
    value: 230,
    bg: "bg-white",
    icon: <HiUserGroup className="text-xl" />,
  },
  {
    id: 3,
    title: "Total Orders",
    value: 1123,
    bg: "bg-white",
    icon: <LuBaggageClaim className="text-xl" />,
  },
  {
    id: 4,
    title: "Total Revenue",
    value: 12000,
    bg: "bg-white",
    icon: <FaDollarSign className="text-xl" />,
  },
];

function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const [progress, setProgress] = useState(0);
  };
  return (
    <div className="">
      <h1 className="text-2xl font-bold my-6 ml-10">
        Welcome Back <span className="text-red-300">Mogeni!</span>
      </h1>
      <div className="flex flex-row  mb-4">
        {cards.map((item) => (
          <div
            className={`flex flex-row mx-auto gap-10 p-4 justify-start items-center rounded-lg shadow-lg ${item.bg} w-60`}
          >
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.value}</p>
            </div>
            <div>
              <p className="text-slate-800 bg-slate-100 rounded-full p-2">
                {item.icon}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-2 gap-10 px-8 ">
          <div className="bg-white w-80 rounded-lg h-40 flex flex-row mx-auto gap-10 p-4 justify-start items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold">Customer Overview</h2>
              <p>1000</p>
            </div>
            <div>
              <p className="text-slate-800 bg-slate-100 rounded-full p-2">
                <RiCustomerServiceFill className="text-xl" />
              </p>
            </div>
          </div>
          <div className="bg-white w-80 rounded-lg h-40 flex flex-row mx-auto gap-10 p-4 justify-start items-center">
            <div className="flex flex-col space-y-4">
              <h2 className=" font-semibold">Total Deliveries</h2>
              <p>1000</p>
            </div>
            <div>
              <p className="text-slate-800 bg-slate-100 rounded-full p-2">
                <RiCustomerServiceFill className="text-xl " />
              </p>
            </div>
          </div>
          <div className="bg-white w-80 rounded-lg h-32 flex flex-row mx-auto gap-10 p-4 justify-start items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold">Checked Out</h2>
              <p>1000</p>
            </div>
            <div>
              <p className="text-slate-800 bg-slate-100 rounded-full p-2">
                <RiCustomerServiceFill />
              </p>
            </div>
          </div>
          <div className="bg-white w-80 rounded-lg h-32 flex flex-row mx-auto gap-10 p-4 justify-start items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold">Canceled Orders</h2>
              <p>1000</p>
            </div>
            <div>
              <p className="text-slate-800 bg-slate-100 rounded-full p-2">
                <RiCustomerServiceFill />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg mt-40">
        <table className="h-auto w-full p-6  ">
          <thead className="p-4  px-8 ">
            <tr>
              <th className="text-start">Customer</th>
              <th className="text-start">Package</th>
              <th className="text-start">Enrolled</th>
              <th className="text-start">Progress</th>
              <th className="text-start">Rating</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr
                key={item.id}
                // even:bg-gray-100 odd:bg-gray-200
                className={`$ {item.id % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
              >
                <td className="items-center justify-start gap-2 flex ">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <p>{item.name}</p>
                </td>
                <td>{item.package}</td>
                <td>{item.enrolled}</td>
                <td>{item.progress}</td>
                <td>{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainLayout(Home);
