import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Topmenu from "../pages/Topmenu";

const Rootlayout = () => {
  return (
    <div className="flex">
      <Sidebar />
       <div>
       <Topmenu/>
       <Outlet />
       </div>
    </div>
  );
};

export default Rootlayout;
