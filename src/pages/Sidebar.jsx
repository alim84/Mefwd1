import React, { useEffect } from "react";
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

      <div className="navcontainer shadow-md shadow-gray-100 ">
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
            <div className="option2 nav-option relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <RiAdminFill className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative text-[12px]  ">
                  <ul>
                    <li>
                      <a href={`/disipline`}>শৃঙ্খলা</a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>

            <div className="nav-option option3 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <MdOutlineFamilyRestroom className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative text-[12px]">
                  <a href={`/foriegn`}>বহিঃ বাংলাদেশ</a>
                </button>
              </div>
            </div>
            <div className="nav-option option4 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <SiConstruct3 className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative  text-[12px] ">
                  <a href={`/doctor`}>চিকিৎসক বহিঃ বাংলাদেশ</a>
                </button>
              </div>
            </div>
            <div className="nav-option option5 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <SiMicrosoftacademic className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative  text-[12px] ">
                  <a href={`/institute`}>জনবল</a>
                </button>
              </div>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white ">
                <MdAttachMoney className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <a className=" text-[12px]" href={`/inventory`}>
                মালামাল গ্রহণ
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <FaMoneyCheck className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <a className=" text-[12px]" href={`/consumption`}>
                মালামাল বিতরন
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <FaMoneyCheck className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <a className=" text-[12px]" href={`/leave`}>
                ছুটি
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <FaMoneyCheck className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <a className=" text-[12px]" href={`/me`}>
                প্রতিষ্ঠান
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <FaMoneyCheck className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <a className=" text-[12px]" href={`/personell`}>
                মানব সম্পদ
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <FaMoneyCheck className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <a className=" text-[12px]" href={`/student`}>
                শিক্ষার্থী
              </a>
            </div>
            <div className="nav-option logout relative">
              <div className="w-[50px] h-[50px] bg-yellow-200 rounded-full hover:bg-purple-800 hover:text-white">
                <IoIosLogOut className="flex absolute top-[20px] left-[35px] text-sky-600" />
              </div>
              <h3>Logout</h3>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
