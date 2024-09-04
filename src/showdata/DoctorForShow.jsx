import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";

const DoctorForShow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const doctorshowRef = ref(db, "doctor/");
    onValue(doctorshowRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);
  return (
    <>
      <div className="container  mx-auto shadow-lg shadow-gray-400 ">
 

        <ul>
          <table id="showdata">
            <th className="w-[150px]">Name</th>
            <th className="w-[150px]">Code</th>
            <th className="w-[150px]">Designation</th>
            <th className="w-[150px]">GoDate</th>
            <th className="w-[150px]">Catagory</th>
            <th className="w-[150px]">Subject</th>
            <th className="w-[150px]">Finance</th>
            <th className="w-[150px]">Going Date</th>
            <th className="w-[150px]">Country</th>
            <th className="w-[150px]">Update</th>
            <th className="w-[150px]">Delete</th>
          </table>
          {alldata.map((item) => {
            return (
              <li className="flex">
                <table id="showdata">
                  <tr>
                    <td className="w-[150px] ">{item.name}</td>
                    <td className="w-[150px] text-center">{item.code}</td>
                    <td className="w-[150px] text-center">
                      {item.designation}
                    </td>
                    <td className="w-[150px] text-center">{item.godate}</td>
                    <td className="w-[150px] text-center">{item.catagory}</td>
                    <td className="w-[150px] text-center">{item.subject}</td>
                    <td className="w-[150px] text-center">{item.finance}</td>
                    <td className="w-[150px] text-center">{item.goingdate}</td>
                    <td className="w-[150px] text-center">{item.country}</td>
                    <td className="w-[150px] text-center">
                      <button className=" bg-green-800 text-white font-bold py-1 px-2 rounded-lg  ">
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

export default DoctorForShow;
