import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";

const Leaveshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const leaveshowRef = ref(db, "Leave/");
    onValue(leaveshowRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);
  return (
    <>
      <div className="container  mx-auto  mt-10 shadow-lg shadow-gray-400 ">
        <div className="flex mx-auto gap-5 justify-end items-center bg-black/85 text-purple-400 relative rounded-t-md ">
          <a className="hover:text-lg hover:text-purple-300" href={`/`}>
            হোম
          </a>
          <a className="hover:text-lg hover:text-purple-300" href={`/leave`}>
            ছুটি
          </a>
          <a className="hover:text-lg hover:text-purple-300" href="">
            Contact
          </a>
          <input
            className="py-1 px-14 rounded-md mb-4 outline-red-300  mt-2"
            type="text"
            placeholder="Search.."
          ></input>
          <IoIosSearch className="absulate translate-x-[-50px] translate-y-[-5px] text-red-500 text-xl " />
        </div>

        <ul>
          <table id="showdata">
            <th className="w-[100px] ">Name</th>
            <th className="w-[100px]">Designation</th>
            <th className="w-[100px]">Section</th>
            <th className="w-[100px]">Type of Leave</th>
            <th className="w-[100px]">Leave From</th>
            <th className="w-[100px]">Leave to</th>
            <th className="w-[100px]">Total day required</th>
            <th className="w-[100px]">Enjoy Total day Leave</th>
            <th className="w-[100px]">Remaining Leave</th>
            <th className="w-[100px]">Total day due</th>
            <th className="w-[100px] ">Update</th>
            <th className="w-[100px]">Delete</th>
          </table>
          {alldata.map((items) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[100px]">{items.name}</td>
                    <td className="w-[100px]">{items.designation}</td>
                    <td className="w-[100px]">{items.section}</td>
                    <td className="w-[100px]">{items.typeofleave}</td>
                    <td className="w-[100px]">{items.leavefrom}</td>
                    <td className="w-[100px]">{items.leaveto}</td>
                    <td className="w-[100px]">{items.totaldaysrequired}</td>
                    <td className="w-[100px]">{items.enjoytotalleave}</td>
                    <td className="w-[100px]">{items.remainingleave}</td>
                    <td className="w-[100px]">{items.totaldaysdue}</td>
                    <td className="w-[100px] text-center">
                      <button className=" bg-green-600 text-white font-bold py-1 px-2 rounded-lg  ">
                        Update
                      </button>
                    </td>
                    <td className="w-[150px] text-center">
                      <button className="  bg-red-500 text-white font-bold py-1 px-2 rounded-lg ">
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Leaveshow;
