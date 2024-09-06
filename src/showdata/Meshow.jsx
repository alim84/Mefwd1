import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";

const Meshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const medicalRef = ref(db, "Medical/");
    onValue(medicalRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <div className=" mx-auto  shadow-lg shadow-gray-400 text-[14px] ">
        <ul>
          <table id="showdata">
            <th>প্রতিষ্ঠানের নাম</th>
            <th>মন্ত্রণালয় কর্তৃক অনুমোদন</th>
            <th>মন্ত্রণালয় কর্তৃক একাডেমিক অনুমোদন</th>
            <th>প্রতিষ্ঠানের ধরন</th>
            <th>বিভাগ</th>
            <th>জেলা</th>
            <th>উপজেলা</th>
            <th>বাড়িং নং/রাস্তা/মহল্লা</th>
            <th>আসন সংখ্যা</th>
            <th>মোট শিক্ষার্থী</th>
            <th>মোট ছাত্র</th>
            <th>মোট ছাত্রী</th>
            <th>দরিদ্র শিক্ষার্থী সংখ্যা</th>
            <th>শিক্ষাবর্ষ</th>
            <th>Update</th>
            <th>Delete</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="text-center">{item.instituteName}</td>
                    <td className="text-center">{item.ministryaprove}</td>
                    <td className="text-center">{item.academicaprove}</td>
                    <td className="text-center">{item.institutecatagory}</td>
                    <td className="text-center">{item.division}</td>
                    <td className="text-center">{item.division}</td>
                    <td className="text-center">{item.distric}</td>
                    <td className="text-center">{item.house}</td>
                    <td className="text-center">{item.seat}</td>
                    <td className="text-center">{item.totalstudent}</td>
                    <td className="text-center">{item.totalmalestudent}</td>
                    <td className="text-center">{item.totalfemalestudent}</td>
                    <td className="text-center">{item.poorstudent}</td>
                    <td className="text-center">{item.year}</td>
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

export default Meshow;
