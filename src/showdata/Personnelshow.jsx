import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";

const Personnelshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const personnelRef = ref(db, "personell/");
    onValue(personnelRef, (snapshot) => {
      let array = [];
      snapshot.forEach((items) => {
        array.push(items.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <div className=" mx-auto  mt-10 shadow-lg shadow-gray-400 ">
        <div className="flex mx-auto gap-5 justify-end items-center bg-black/85 text-purple-400 relative rounded-t-md ">
          <a className="hover:text-lg hover:text-purple-300" href="">
            Dashboard
          </a>
          <a className="hover:text-lg hover:text-purple-300" href="">
            Inventory
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
            <th className="w-[193px] ">কর্মকর্তার নাম</th>
            <th className="w-[193px]">পদবি</th>
            <th className="w-[193px]">গ্রেড</th>
            <th className="w-[193px]">শাখা</th>
            <th className="w-[193px]">মোবাইল</th>
            <th className="w-[193px]">ই-মেইল</th>
            <th className="w-[193px]">জন্মতারিখ</th>
            <th className="w-[193px]">জেন্ডার</th>
            <th className="w-[193px]">বৈবাহিক অবস্থা</th>
            <th className="w-[193px]">ধর্ম</th>
            <th className="w-[193px]">নিজ জেলা</th>
            <th className="w-[193px]">বিভাগ</th>
            <th className="w-[193px]">জেলা</th>
            <th className="w-[193px]">উপজেলা</th>
            <th className="w-[193px]">পোস্ট অফিস</th>
            <th className="w-[193px]">গ্রাম</th>
            <th className="w-[193px]">বাস্তা</th>
            <th className="w-[193px]">বাড়ি নং</th>
            <th className="w-[193px]">বিভাগ</th>
            <th className="w-[193px]">জেলা</th>
            <th className="w-[193px]">উপজেলা</th>
            <th className="w-[193px]">পোস্ট অফিস</th>
            <th className="w-[193px]">গ্রাম</th>
            <th className="w-[193px]">বাস্তা</th>
            <th className="w-[193px]">বাড়ি নং</th>
            <th className="w-[193px]">নিয়োগের ধরন</th>
            <th className="w-[193px]">প্রথম যোগদানের তারিখ</th>
            <th className="w-[193px]">যোগদানের পদবি</th>
            <th className="w-[193px]">বেতন গ্রেড</th>
            <th className="w-[193px]">পদোন্নতি পদবি</th>
            <th className="w-[193px]">পদোন্নতির তারিখ</th>
            <th>Update</th>
            <th>Delete</th>
          </table>
          {alldata.map((items) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px]">{items.name}</td>
                    <td className="w-[150px]">{items.designation}</td>
                    <td className="w-[150px]">{items.grade}</td>
                    <td className="w-[150px]">{items.section}</td>
                    <td className="w-[150px]">{items.mobile}</td>
                    <td className="w-[150px]">{items.email}</td>
                    <td className="w-[150px]">{items.dateofbirth}</td>
                    <td className="w-[150px]">{items.gender}</td>
                    <td className="w-[150px]">{items.merital}</td>
                    <td className="w-[150px]">{items.religion}</td>
                    <td className="w-[150px]">{items.homedistrict}</td>
                    <td className="w-[150px]">{items.perdivision}</td>
                    <td className="w-[150px]">{items.perdristrict}</td>
                    <td className="w-[150px]">{items.perthana}</td>
                    <td className="w-[150px]">{items.perPostoffice}</td>
                    <td className="w-[150px]">{items.pervillage}</td>
                    <td className="w-[150px]">{items.perroad}</td>
                    <td className="w-[150px]">{items.perhouse}</td>
                    <td className="w-[150px]">{items.predivision}</td>
                    <td className="w-[150px]">{items.predristrict}</td>
                    <td className="w-[150px]">{items.prethana}</td>
                    <td className="w-[150px]">{items.prePostoffice}</td>
                    <td className="w-[150px]">{items.previllage}</td>
                    <td className="w-[150px]">{items.preroad}</td>
                    <td className="w-[150px]">{items.prehouse}</td>
                    <td className="w-[150px]">{items.appontmentCatagory}</td>
                    <td className="w-[150px]">{items.firstjoint}</td>
                    <td className="w-[150px]">{items.firstdesignation}</td>
                    <td className="w-[150px]">{items.scale}</td>
                    <td className="w-[150px]">{items.promotiondesignation}</td>
                    <td className="w-[150px]">{items.promotionjoinindate}</td>
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

export default Personnelshow;
