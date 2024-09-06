import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";

const Studentshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const studentRef = ref(db, "student/");
    onValue(studentRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);
  return (
    <>
      <div className=" container mx-auto shadow-lg shadow-gray-400 text-[14px] ">
     

        <ul>
          <table id="showdata">
            <th className="w-[120px] ">প্রতিষ্ঠানের নাম</th>
            <th className="w-[120px]">কোর্সের নাম</th>
            <th className="w-[120px]">সেশন</th>
            <th className="w-[120px]">আসন সংখ্য</th>
            <th className="w-[120px]">মোট ভর্তিকৃত শিক্ষার্থীর সংখ্যা</th>
            <th className="w-[120px]">শুন্য আসন</th>
            <th className="w-[120px]">ছাত্র সংখ্যা</th>
            <th className="w-[120px]">ছাত্রী সংখ্যা</th>
            <th className="w-[120px]">প্রতিষ্ঠানের অবস্থান</th>
            <th className="w-[120px]">Update</th>
            <th className="w-[120px]">Delete</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[120px]">{item.instituteName}</td>
                    <td className="w-[120px]">{item.course}</td>
                    <td className="w-[120px]">{item.session}</td>
                    <td className="w-[120px]">{item.seat}</td>
                    <td className="w-[120px]">{item.totaladmissionstudent}</td>
                    <td className="w-[120px]">{item.vacantSeat}</td>
                    <td className="w-[120px]">{item.maleStudent}</td>
                    <td className="w-[120px]">{item.femalStudent}</td>
                    <td className="w-[120px]">{item.district}</td>
                    <td className="w-[120px] text-center">
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

export default Studentshow;
