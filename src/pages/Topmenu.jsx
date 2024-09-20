import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Style/Topbar.css";
import { FaChevronRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { GiHumanPyramid, GiThreeLeaves } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import {
  FaBuildingCircleArrowRight,
  FaArrowRightToCity,
} from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import logo from "../assets/LOGO.png";

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);



  return (
    <>
      <div className=" container flex mx-auto gap-5 justify-end items-center bg-cyan-900 text-yellow-200 shadow-md shadow-gray-100 relative py-[22px] ">
        <img
          className="w-[130px] h-[50px]  mt-[-15px]  "
          src={logo}
        ></img>
        <div className=" py-3 px-3 rounded-full bg-purple-900 ">
          <a href={`/`}>
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
              <div className="absolute translate-x-[-200px] cursor-pointer  grid grid-cols-4 justify-between items-center w-[600px] h-[200px] rounded-b-md bg-cyan-900  z-20 mt-10 text-center text-white font-semibold text-[13px] transition delay-150 duration-300 ease-in-out shadow-md shadow-slate-200  ">
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md ">
                  <FaHome className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/`}>ড্যাশবোর্ড</a>
                    </li>
                  </ul>
                </div>

                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <GiHumanPyramid className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/personnelshow`}>মানবসম্পদ</a>
                    </li>
                  </ul>
                </div>

                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaUserDoctor className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/doctorshow`}>চিকিৎসক বহিঃ</a>
                    </li>
                  </ul>
                </div>

                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaPlaneDeparture className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/foriegnshow`}>বহি: বাংলাদেশ</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <PiStudent className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/studentshow`}>শিক্ষার্থী</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <BiSolidInstitution className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/meshow`}>প্রতিষ্ঠান</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <GiThreeLeaves className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/leaveshow`}>ছুটি</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <DiAtom className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/disiplineshow`}>শৃংখলা</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaBuildingCircleArrowRight className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/consumshow`}>বিতরন</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaArrowRightToCity className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/inventoryshow`}>গ্রহণ</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaPeopleGroup className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/manpowershow`}>জনবল</a>
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
          <a href={"/login"}>
            <RiAdminFill className="absolute translate-y-[15px] translate-x-[15px] " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Topmenu;
