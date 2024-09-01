import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Inventory from "./../pages/Inventory";
import { IoIosSearch } from "react-icons/io";

const Inventoryshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const inventoryshowRef = ref(db, "StoreIn/");
    onValue(inventoryshowRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <div className="container  mx-auto  mt-10 ">
        <div className="flex mx-auto gap-5 justify-end items-center bg-black/85 text-purple-400 relative rounded-t-md ">
          <a className="hover:text-lg hover:text-purple-300" href="#home">
            Dashboard
          </a>
          <a className="hover:text-lg hover:text-purple-300" href="#about">
            Inventory
          </a>
          <a className="hover:text-lg hover:text-purple-300" href="#contact">
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
          <table className="outline-red-300" id="showdata">
            <th className="w-[150px] text-center  ">মালামালের নাম</th>
            <th className="w-[150px] text-center">পরিমান</th>
            <th className="w-[150px]">ক্যাশ মেমো/টেন্ডারের তথ্য</th>
            <th className="w-[150px]">ক্রয়ের তারিখ</th>
            <th className="w-[150px]">মালামালের ধরন</th>
            <th className="w-[150px] text-center ">Update</th>
            <th className="w-[150px]">Delete</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px] text-center">
                      {item.productName}
                    </td>
                    <td className="w-[150px] text-center">{item.quantity}</td>
                    <td className="w-[150px] text-center">{item.cashmemo}</td>
                    <td className="w-[150px] text-center">
                      {item.purchasedate}
                    </td>
                    <td className="w-[150px] text-center">
                      {item.productscatagory}
                    </td>
                    <td className="w-[150px] text-center">
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

export default Inventoryshow;
