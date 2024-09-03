import React, { useEffect } from "react";
import "../Style/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="w-[300px] h-screen bg-teal-800 text-white rounded-r-md shadow-xl shadow-red-500 ">
        <h1 className="text-center text-3xl pt-5">MEFWD</h1>
        <ul className=" ml-6 pt-8 font-semibold block focus:overflow-visible cursor-visible drop relative hover:">
            hi
          <li className="block  ">
            <a href="">Dashboard</a>
          </li>
          <li className=" hidden">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
