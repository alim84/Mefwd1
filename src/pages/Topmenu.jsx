import React from "react";
import { IoIosSearch } from "react-icons/io";

const Topmenu = () => {
  return (
    <>
      <div className="flex mx-auto gap-5 justify-end items-center bg-black/85 text-orange-400 relative rounded-t-md ">
        <a
          className="hover:text-md text-lg  font-semibold hover:text-purple-300"
          href={`/`}
        >
          হোম
        </a>
        <a
          className="hover:text-md text-lg  font-semibold hover:text-purple-300"
          href={`/consumption`}
        >
          মালামাল বিতরন
        </a>
        <a
          className="hover:text-md text-lg  font-semibold hover:text-purple-300"
          href=""
        >
          যোগাযোগ
        </a>
        <input
          className="py-1 px-14 rounded-md mb-4 outline-red-300 mt-2"
          type="text"
          placeholder="Search.."
        ></input>
        <IoIosSearch className="absulate translate-x-[-50px] translate-y-[-5px] text-orange-400 text-xl " />
      </div>
    </>
  );
};

export default Topmenu;
