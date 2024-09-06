import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";

const Desiplineshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const disshowRef = ref(db, "disipline/");
    onValue(disshowRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <div className="container  mx-auto shadow-lg shadow-gray-400 text-[14px] ">
  

        <ul>
          <table id="showdata">
            <th className="w-[150px] ">কর্মকর্তার নাম</th>
            <th className="w-[150px]">পদবি</th>
            <th className="w-[150px]">কোড</th>
            <th className="w-[150px]">মামলার বিবরণ</th>
            <th className="w-[150px]">প্রতিষ্ঠানের নাম</th>
            <th className="w-[150px]">মামলার ধরন</th>
            <th className="w-[150px]">সন</th>
            <th className="w-[150px]">শাস্তির ধরন</th>
            <th className="w-[150px] ">Update</th>
            <th className="w-[150px]">Delete</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px] text-center">{item.name}</td>
                    <td className="w-[150px] text-center">
                      {item.designation}
                    </td>
                    <td className="w-[150px] text-center">{item.code}</td>
                    <td className="w-[150px] text-center">{item.casedes}</td>
                    <td className="w-[150px] text-center">{item.institute}</td>
                    <td className="w-[150px] text-center">
                      {item.casecatagory}
                    </td>
                    <td className="w-[150px] text-center">{item.year}</td>
                    <td className="w-[150px] text-center">{item.punishment}</td>
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

export default Desiplineshow;
