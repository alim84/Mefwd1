import React from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import logo from "../assets/LOGO.png";

const Registration = () => {
  return (
    <>
      <div className="bg-black/40 w-screen h-screen pt-[120px] relative ">
        <div className="w-[800px] h-[800px] bg-black/30 shadow-2xl shadow-white rounded-3xl mx-auto ">
          <img
            className="w-[130px] h-[50px]  absolute translate-x-[350px] translate-y-[15px]"
            src={logo}
          ></img>
          <div className="w-[600px] h-[600px] bg-black/20 shadow-t-2xl shadow-2xl shadow-white rounded-3xl mx-auto absolute translate-x-[100px] translate-y-[100px] ">
            <div className="text-center">
              <h1 className="text-xl text-white py-4 font-bold ">
                স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ
              </h1>
              <p className="text-[10px] text-white ">
                দ্রুত এবং সহজে স্বাস্থ্য শিক্ষা ব্যবস্থাপনা
              </p>
              <h3 className="text-xl text-white py-10 ">Welcome Back!</h3>
              <RiAdminFill className=" absolute text-cyan-500 w-[70px] h-[70px] translate-x-[500px] translate-y-[-170px]" />
            </div>
            <div className="text-center relative mb-[30px] ">
              <label className="text-white text-[12px] absolute translate-x-[3px] translate-y-[-12px] bg-black/40 rounded-full px-2">
                ইমেইল
              </label>
              <input
                className="bg-black/40 outline-none py-2 px-20 rounded-md border-b-2 text-white "
                type="text"
              ></input>
              <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-30px] text-cyan-500" />
            </div>
            <div className="text-center relative mb-[30px] ">
              <label className="text-white text-[12px] absolute translate-x-[3px] translate-y-[-12px] bg-black/40 rounded-full px-2">
                ইউজার নাম
              </label>
              <input
                className="bg-black/40 outline-none py-2 px-20 rounded-md border-b-2 text-white "
                type="text"
              ></input>
              <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-30px] text-cyan-500" />
            </div>
            <div className="text-center relative ">
              <label className="text-white text-[12px] absolute translate-x-[3px] translate-y-[-12px] bg-black/40 rounded-full px-2">
                পাসওয়ার্ড
              </label>
              <input
                className="bg-black/40 outline-none py-2 px-20 rounded-md border-b-2 text-white "
                type="text"
              ></input>
              <FaEyeSlash className="absolute translate-x-[450px] translate-y-[-30px] text-cyan-500" />
            </div>
            <div className=" text-center">
              <button className=" py-2 px-28 bg-cyan-400  rounded-lg mt-8 ">
                Registration
              </button>
              <h5 className="mt-5 text-[10px] text-white">
                <a href="">Forget My Password</a>
              </h5>
            </div>

            <div className="text-center  mt-[90px]">
              <h4 className="bg-black/40 inline-block py-1 rounded-md text-[10px] text-white ">
                <a className="mr-1" href="">
                  {" "}
                  Term of use
                </a>{" "}
                ||{" "}
                <a className="ml-1" href="">
                  Privacy policy
                </a>
              </h4>
            </div>
            <div className="relative">
              <button className=" absolute bg-blue-500 text-[10px] py-3 px-6 rounded-lg translate-x-[570px] translate-y-[-150px] shadow-sm shadow-yellow-50">
                Request An Account
              </button>
              <button className="absolute bg-white text-[10px] py-3 px-6 rounded-lg translate-x-[580px] translate-y-[-100px] shadow-lg shadow-yellow-50">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
