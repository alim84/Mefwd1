import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Style/Topbar.css";
import { FaChevronRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);

  let Menus = [
    "Contract",
    "About",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
    "Ask",
  ];

  return (
    <>
      <div className=" container flex mx-auto gap-5 justify-end items-center bg-cyan-900 text-yellow-200 shadow-md shadow-gray-100 relative py-[22px]  ">
        <div className=" py-3 px-3 rounded-full bg-purple-900 ">
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
          <div>
            {toggle && (
              <div className="absolute translate-x-[-150px]  grid grid-cols-4 justify-between items-center  w-[500px] h-[200px] bg-cyan-900  z-20 mt-10 text-center text-white font-semibold text-[13px]  ">
                <div className=" flex justify-center items-center">
                  <ul className=" ">
                    <li className="">
                      <FaHome className="text-purple-700 w-[30px] h-[30px] bg-yellow-50 rounded-full" />

                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <input
          className="py-2 px-14 rounded-md mb-4 outline-red-300 mt-2 ml-5 text-[14px]"
          type="text"
          placeholder="খুজুন"
        ></input>
        <IoIosSearch className="absolute z-10 translate-x-[-100px] translate-y-[-5px] text-yellow-200 text-xl " />

        <button className="bg-purple-900 absolute  py-5 px-6 z-0 translate-x-[-90px] rounded-r-md rounded-l-full translate-y-[-4px]"></button>
        <div className="bg-purple-900 w-[45px] h-[45px] mr-8 rounded-full">
          <a href="">
            <RiAdminFill className="absolute translate-y-[15px] translate-x-[15px] " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Topmenu;
