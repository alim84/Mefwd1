import React, { useState } from "react";
import { DiYii } from "react-icons/di";
import { DiAppstore } from "react-icons/di";

import { FiGrid } from "react-icons/fi";
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

import { RiAdminFill } from "react-icons/ri";
import { MdOutlineFamilyRestroom, MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { SiMicrosoftacademic, SiConstruct3 } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";

const Submenu = () => {
  let [toggle, Settoggle] = useState(false);
  let [sidebar, SetSidebar] = useState(false);

  return (
    <>
      <div className="container mx-auto flex gap-5 justify-between items-center bg-cyan-900 text-yellow-200 shadow-2xl shadow-red-500  py-[22px] mb-[2px]  ">
        <div className="  py-3 px-3 rounded-full  text-white  ml-10">
          <button onClick={() => SetSidebar(!sidebar)}>
            <FiGrid className="text-[30px] hover:text-teal-600 " />
          </button>
        </div>

        <div className="relative flex gap-9 items-center ">
          <div className=" text-white text-[30px]  hover:text-teal-600 ">
            <a href={`/`}>
              <DiYii />
            </a>
          </div>
          <button
            onClick={() => Settoggle(!toggle)}
            className="flex relative mr-10  items-center   "
          >
            <a className="hover:text-md text-[30px] text-white font-semibold hover:text-teal-600">
              <DiAppstore />
            </a>
          </button>
          <div>
            {toggle && (
              <div className="absolute translate-x-[-600px] translate-y-[14px] cursor-pointer  grid grid-cols-4 justify-between items-center w-[600px] h-[200px] rounded-b-md bg-cyan-900  z-20 mt-10 text-center text-white font-semibold text-[13px]  duration-300 ease-in-out shadow-md shadow-slate-200  ">
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

        {sidebar && (
          <div className="absolute bg-cyan-900 translate-x-0 translate-y-[385px] z-50">
            <div className="option2 nav-option relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <RiAdminFill className="flex absolute top-[20px] left-[32px] text-white" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative text-[12px]  ">
                  <a href={`/disipline`}>শৃঙ্খলা</a>
                </button>
              </div>
            </div>

            <div className="nav-option option3 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <MdOutlineFamilyRestroom className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative text-[12px]">
                  <a href={`/foriegn`}>বহিঃ বাংলাদেশ</a>
                </button>
              </div>
            </div>
            <div className="nav-option option4 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <SiConstruct3 className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative  text-[12px] ">
                  <a href={`/doctor`}>চিকিৎসক বহিঃ বাংলাদেশ</a>
                </button>
              </div>
            </div>
            <div className="nav-option option5 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <SiMicrosoftacademic className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <div className="relative">
                <button className="block focus:overflow-visible cursor-visible drop relative  text-[12px] ">
                  <a href={`/institute`}>জনবল</a>
                </button>
              </div>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white ">
                <MdAttachMoney className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <a className=" text-[12px]" href={`/inventory`}>
                মালামাল গ্রহণ
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <FaMoneyCheck className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <a className=" text-[12px]" href={`/consumption`}>
                মালামাল বিতরন
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <FaMoneyCheck className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <a className=" text-[12px]" href={`/leave`}>
                ছুটি
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <FaMoneyCheck className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <a className=" text-[12px]" href={`/me`}>
                প্রতিষ্ঠান
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <FaMoneyCheck className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <a className=" text-[12px]" href={`/personell`}>
                মানব সম্পদ
              </a>
            </div>
            <div className="nav-option option6 relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <FaMoneyCheck className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <a className=" text-[12px]" href={`/student`}>
                শিক্ষার্থী
              </a>
            </div>
            <div className="nav-option logout relative">
              <div className="w-[40px] h-[40px] bg-cyan-900 border-2 rounded-full  hover:text-white">
                <IoIosLogOut className="flex absolute top-[22px] left-[32px] text-white" />
              </div>
              <h3>বাহির</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Submenu;
