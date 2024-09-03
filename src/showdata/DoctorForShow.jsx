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
      <div className="container  mx-auto  mt-10 shadow-lg shadow-gray-400 ">
        <div className="flex mx-auto gap-5 justify-end items-center bg-black/85 text-purple-400 relative rounded-t-md ">
          <a className="hover:text-lg hover:text-purple-300" href={`/`}>
            হোম
          </a>
          <a className="hover:text-lg hover:text-purple-300" href={`/doctor`}>
            চিকিৎসক বহিঃ বাংলাদেশ
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
