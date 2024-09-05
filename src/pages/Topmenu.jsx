import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Style/Topbar.css";
import { FaChevronRight } from "react-icons/fa";

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);
  let [submenu, Setsubmenu] = useState(true);

  return (
    <>
      <div className="flex mx-auto gap-5 justify-end items-center bg-cyan-900 text-yellow-200 shadow-lg shadow-gray-300 relative py-[22px] ">
        <div className="relative">
          <button onClick={() => Settoggle(!toggle)} className="flex relative ">
            <a className="hover:text-md text-lg  font-semibold hover:text-white">
              সকল তথ্য
            </a>
            <IoMdArrowDropdown className="absulate translate-x-2  left-0 top-0 " />
          </button>
          <nav className="dropdownmenu absolute  ">
            {toggle && (
              <ul id="submenu" className="relative">
                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>

                <li onClick={() => Setsubmenu(!submenu)}>
                  <a href="">
                    about
                    <FaChevronRight className="absulate translate-x-[90px] translate-y-[-16px]  left-0 top-0" />
                  </a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>
              </ul>
            )}
          </nav>
          {submenu && (
            <ul>
              <li className="absulate translate-x-[145px] translate-y-[-250px] shadow-lg shadow-gray  ">
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
                <a className=" bg-cyan-900 text-left">Contract</a>
              </li>
            </ul>
          )}
        </div>

        <input
          className="py-1 px-14 rounded-md mb-4 outline-red-300 mt-2 ml-5"
          type="text"
          placeholder="খুজুন"
        ></input>
        <IoIosSearch className="absulate translate-x-[-50px] translate-y-[-5px] text-orange-400 text-xl " />
      </div>
    </>
  );
};

export default Topmenu;
