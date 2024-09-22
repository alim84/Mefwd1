import React, { useEffect, useState } from "react";
import "../pages/Dashboard.css";
import "../pages/Dashboarstyle.css";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineFamilyRestroom, MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { SiMicrosoftacademic, SiConstruct3 } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {


  return (
    <>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="responsive.css" />


<div className="navcontainer shadow-md shadow-gray-100 absolute mt-32 ">
        <nav className="nav bg-cyan-900 text-white   ">
          <div className="nav-upper-options  ">
            <div className="nav-option option1 py-[52px] bg-cyan-900 shadow-sm shadow-gray-100 ">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                className="nav-img border-yellow-200"
                alt="dashboard"
              />
              <h3 className="text-[16px] font-bold"> কার্যক্রম</h3>
            </div>
           
          </div>
        </nav>
      </div>

      
    </>
  );
};

export default Sidebar;
