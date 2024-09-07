import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Style/Topbar.css";
import { FaChevronRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);
  let [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <div className=" container flex mx-auto gap-5 justify-end items-center bg-cyan-900 text-yellow-200 shadow-lg shadow-gray-300 relative py-[22px]  ">
        <div className=" py-3 px-3 rounded-full bg-[#000066] ">
          <a href="">
            <GoHomeFill />
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => Settoggle(!toggle)}
            className="flex relative  "
          >
            <a className="hover:text-md text-[14px] text-white  font-semibold hover:text-white">
              সকল তথ্য
            </a>
            <IoMdArrowDropdown className="absolute translate-x-[75px]   text-white  " />
          </button>
          <nav className="dropdownmenu absolute hover:rounded-md mt-1 z-30 translate-x-[60px]  ">
            {toggle && (
              <ul id="submenu" className="relative ">
                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>

                <li className="relative flex">
                  <a onClick={() => setSubMenu(!subMenu)} href="">
                    about
                    <FaChevronRight className="absolute translate-x-[80px] translate-y-[-15px]  " />
                  </a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>
              </ul>
            )}
            {subMenu && (
              <div className="absolute translate-x-[148px] translate-y-[100px] top-0 left-0">
                <ul id="submenu" className="">
                  <li className=" shadow-md shadow-gray-200 mb-[1px]   ">
                    <a className=" bg-cyan-900 text-left">Contract</a>
                  </li>

                  <li className=" shadow-md shadow-gray-200 mb-[1px]   ">
                    <a className=" bg-cyan-900 text-left">Contract</a>
                  </li>

                  <li className=" shadow-md shadow-gray-200 mb-[1px]   ">
                    <a className=" bg-cyan-900 text-left">Contract</a>
                  </li>

                  <li className=" shadow-md shadow-gray-200 mb-[1px]   ">
                    <a className=" bg-cyan-900 text-left">Contract</a>
                  </li>

                  <li className=" shadow-md shadow-gray-200 mb-[1px]   ">
                    <a className=" bg-cyan-900 text-left">Contract</a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>

        <input
          className="py-2 px-14 rounded-md mb-4 outline-red-300 mt-2 ml-5 text-[14px]"
          type="text"
          placeholder="খুজুন"
        ></input>
        <IoIosSearch className="absolute z-10 translate-x-[-100px] translate-y-[-5px] text-yellow-200 text-xl " />

        <button className="bg-[#000066] absolute  py-5 px-6 z-0 translate-x-[-90px] rounded-r-md rounded-l-full translate-y-[-4px]"></button>
        <div className="bg-[#000066] w-[45px] h-[45px] mr-8 rounded-full">
          <a href="">
            <RiAdminFill className="absolute translate-y-[15px] translate-x-[15px] " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Topmenu;
