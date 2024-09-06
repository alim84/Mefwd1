import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Style/Topbar.css";
import { FaChevronRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);
  let [submenu, Setsubmenu] = useState(false);

  return (
    <>
      <div className=" container flex mx-auto gap-5 justify-end items-center bg-cyan-900 text-yellow-200 shadow-lg shadow-gray-300 relative py-[22px]  ">
      <div className=" py-3 px-3 rounded-full bg-[#000066] ">
          <a href=""><GoHomeFill /></a>
          </div>
        <div className="relative">
         
          <button onClick={() => Settoggle(!toggle)} className="flex relative  ">
            <a className="hover:text-md text-[14px] text-white  font-semibold hover:text-white">
              সকল তথ্য
            </a>
            <IoMdArrowDropdown className="absulate translate-x-2 text-white left-0 top-0 " />
          </button>
          <nav className="dropdownmenu absolute hover:rounded-md ">
            {toggle && (
              <ul id="submenu" className="relative">
                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Home</a>
                </li>
              

                <li  className="relative" onClick={() => Setsubmenu(!submenu)}>
                  <a href="">
                    about
                    <FaChevronRight className="absulate translate-x-[80px] translate-y-[-16px]  bg-cyan- left-0 top-0" />
                  </a>

                 

                </li>
              

                <li>
                  <a href="">Home</a>
                </li>

              </ul>
        )}
         {submenu && (
                 <div className="absulate translate-x-[165px] translate-y-[-100px]">

                   <ul className="">
                    <li className="   ">
                      <a className=" bg-cyan-900 text-left">Contract</a>
                  
                    </li>
         
                  </ul>
                 </div>
                )}

          </nav>
        </div>

        <input
          className="py-1 px-14 rounded-md mb-4 outline-red-300 mt-2 ml-5 text-[14px]"
          type="text"
          placeholder="খুজুন"
        ></input>
        <IoIosSearch className="absulate z-10 translate-x-[-50px] translate-y-[-5px] text-yellow-200 text-xl " />

        <button className="bg-[#000066] absolute  py-4 px-6 z-0 translate-x-[-130px] rounded-r-md rounded-l-full translate-y-[-4px]"></button>
       <div className="bg-[#000066] py-3 px-3 mr-8 rounded-full">
       <a href=""><RiAdminFill className="" /></a>
       </div>
      </div>
    </>
  );
};

export default Topmenu;
