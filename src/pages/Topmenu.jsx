import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Style/Topbar.css";

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);

  return (
    <>
      <div className="flex mx-auto gap-5 justify-end items-center bg-cyan-900 text-yellow-200 shadow-lg shadow-gray-300 relative py-[22px] ">
  
        <div className="relative">
          <button onClick={() => Settoggle(!toggle)} className="flex relative ">
            <a className="hover:text-md text-lg  font-semibold hover:text-white">
              সকল তথ্য
            </a>
            <IoMdArrowDropdown className="absulate translate-x-1   left-0 top-0 " />
          </button>
          {toggle && (
            <nav className="dropdownmenu absolute ">
              <ul  className=" bg-cyan-900">
            
              
                <li>
                 
                  <ul id="submenu"  >
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
                </li>
              
            
              </ul>
            </nav>
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
