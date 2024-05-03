import React from "react";
import MainLayout from "../../layout/MainLayout";
import { MdEdit } from "react-icons/md";

function Subscribers() {
  return (
    <div>
      <div className="flex flex-row gap-10 bg-slate-100 justify-start items-center p-4 rounded-lg shadow-lg w-60">
        <div className="flex flex-col space-y-2 ">
          <h2 className="font-semibold">Total Tasks</h2>
          <p>WRITING</p>
          <h1>0</h1>
        </div>
        <div>
          <p className="bg-blue-500 text-white rounded-full items-center justify-center p-2">
            <MdEdit className="text-xl " />
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainLayout(Subscribers);
