import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout = (Component) =>
  function HOC() {
    return (
      <div className="bg-slate-300">
        <div className="flex bg-slate-300 relative py-2 ">
          <Sidebar />
          <div className="flex flex-col flex-grow bg-slate-300 mr-3">
            <div className="sticky top-0 z-20 mb-4 ">
              <Navbar />
            </div>
            <main className="relative min-h-screen overflow-hidden  justify-center p-6">
              <Component />
            </main>
          </div>
        </div>
      </div>
    );
  };

export default MainLayout;
