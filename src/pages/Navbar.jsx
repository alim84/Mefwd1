import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mx-auto bg-purple-900 container py-10 shadow-lg shadow-gray-500 p-5  ">
        <div>
          <img src="Logo1.png" className="w-[40px] h-[30px]" />
        </div>
        <div>
          <ul className="flex text-white font-bold gap-5">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex gap-3 relative">
        <CiSearch className="absolute top-[12px] left-2 " /> <input className=" rounded-lg  px-6" type="text" name="Search"></input>
        <button className="py-2 px-3 bg-teal-600 rounded-md hover:text-black hover:bg-white ">login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
