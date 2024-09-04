import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";


const Consumshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const consumptionshowRef = ref(db, "StoreOut/");
    onValue(consumptionshowRef, (snapshot) => {
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
          <a
            className="hover:text-lg hover:text-purple-300"
            href={`/consumption`}
          >
            মালামাল বিতরন
          </a>
          <a className="hover:text-lg hover:text-purple-300" href="">
            যোগাযোগ
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
            <th className="w-[150px] ">মালামালের নাম</th>
            <th className="w-[150px]">পরিমান</th>
            <th className="w-[150px]">দপ্তর/অনুবিভাগ/অধিশাখা/শাখার নাম</th>
            <th className="w-[150px]">বিতরনের তারিখ</th>
            <th className="w-[150px] ">Update</th>
            <th className="w-[150px]">Delete</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px]">{item.productName}</td>
                    <td className="w-[150px] text-center">{item.quantity}</td>
                    <td className="w-[150px] text-center">
                      {item.sectionName}
                    </td>
                    <td className="w-[150px] text-center">
                      {item.delevarydate}
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

export default Consumshow;
