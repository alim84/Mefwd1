import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";

import Submenu from "../pages/Submenu";

const Rootlayout = () => {
  return (
  

      <div >
      <Submenu />
        <Outlet />
      </div>
  
  );
};

export default Rootlayout;
