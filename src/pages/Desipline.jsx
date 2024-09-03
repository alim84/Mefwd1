import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

import "../pages/Datatable.css";

const Desipline = () => {
  let [name, setName] = useState("");
  let [designation, setDesignation] = useState("");
  let [code, setCode] = useState("");
  let [casedes, setCasedes] = useState("");
  let [institute, setInstitute] = useState("");
  let [casecatagory, setCasecatagory] = useState("");
  let [year, setYear] = useState("");
  let [punishment, setPunishment] = useState("");
  let [alldata, setAllData] = useState([]);

  let nameHandler = (e) => {
    setName(e.target.value);
  };
  let designationHandler = (e) => {
    setDesignation(e.target.value);
  };
  let codeHandler = (e) => {
    setCode(e.target.value);
  };
  let caseHandler = (e) => {
    setCasedes(e.target.value);
  };
  let instituteHandler = (e) => {
    setInstitute(e.target.value);
  };
  let casecatagoryHandler = (e) => {
    setCasecatagory(e.target.value);
  };
  let yearHandler = (e) => {
    setYear(e.target.value);
  };
  let punishmentHandler = (e) => {
    setPunishment(e.target.value);
  };

  let submitBtn = () => {
    const db = getDatabase();
    set(push(ref(db, "disipline/")), {
      name: name,
      designation: designation,
      code: code,
      casedes: casedes,
      institute: institute,
      casecatagory: casecatagory,
      year: year,
      punishment: punishment,
    }).then(() => {
      setName("");
      setDesignation("");
      setCode("");
      setCasedes("");
      setInstitute("");
      setCasecatagory("");
      setYear("");
      setPunishment("");
      alert("Submit Data");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const mefwdRef = ref(db, "disipline/");
    onValue(mefwdRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-5 px-5 mt-10 rounded-lg shadow-2xl shadow-gray-400">
          <div className="mb-12 text-center font-bold text-2xl text-yellow-200">
            <h1 className="py-4">মামলা সংক্রান্ত তথ্য</h1>
            <hr></hr>
          </div>

          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 border-2 border-r-rose-500 border-b-rose-500/75  border-l-rose-500/50  border-t-rose-500/25 w-[800px]">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                তথ্য পূরণ করুন
              </h3>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    কর্মকর্তা/কর্মচারীর নাম নাম :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মকর্তার নাম"
                    type="text"
                    name="emname"
                    onChange={nameHandler}
                    value={name.name}
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">পদবি :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="পদবি"
                    type="text"
                    name="designation"
                    onChange={designationHandler}
                    value={designation.designation}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">পরিচিতি কোড :</level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="পরিচিতি কোড"
                    type="text"
                    name="code"
                    onChange={codeHandler}
                    value={code.code}
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">
                    মামলার বিবরণ:{" "}
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="মামলার বিবরণ"
                    type="text"
                    name="case details"
                    onChange={caseHandler}
                    value={casedes.casedes}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের নাম :
                  </level>

                  <select
                    className="rounded-lg text-balance border-none hover:border-indigo-300 py-2 px-5"
                    id="institute"
                    name="institute"
                    onChange={instituteHandler}
                    value={institute.institute}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ</option>
                    <option>পরিবার পরিকল্পনা অধিদপ্তর</option>
                    <option>স্বাস্থ্য শিক্ষা অধিদপ্তর</option>
                    <option>
                      জাতীয় জনসংখ্যা গবেষণা ও প্রশিক্ষণ ইনস্টিটিউট (নিপোর্ট)
                    </option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">মামলার ধরন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="catagory"
                    name="casecatagory"
                    onChange={casecatagoryHandler}
                    value={casecatagory.casecatagory}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সর্তকতা মুলক</option>
                    <option>ইনক্রিমেন্ট স্থগিত</option>
                  </select>
                </div>
              </div>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">সন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="year"
                    name="year"
                    onChange={yearHandler}
                    value={year.year}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>২০২৪</option>
                    <option>২০২৩</option>
                    <option>২০২২</option>
                    <option>২০২১</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">শাস্তির ধরন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="panishcatagory"
                    name="panishcatagory"
                    onChange={punishmentHandler}
                    value={punishment.punishment}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সতকর্তামূলক</option>
                    <option>ইনক্রিমেন্টজনিত</option>
                    <option>নিম্নধাপ</option>
                  </select>
                </div>
              </div>{" "}
            </div>
            <button
              onClick={submitBtn}
              className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-gray-600 hover:bg-indigo-600 hover:text-white flex mx-auto justify-center"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        </div>
      </form>

      <div className="container  mx-auto justify-between  mt-10 ">
        <ul>
          <table id="showdata">
            <th className="w-[193px] ">কর্মকর্তার নাম</th>
            <th className="w-[193px]">পদবি</th>
            <th className="w-[193px]">কোড</th>
            <th className="w-[193px]">মামলার বিবরণ</th>
            <th className="w-[193px]">প্রতিষ্ঠানের নাম</th>
            <th className="w-[193px]">মামলার ধরন</th>
            <th className="w-[193px]">সন</th>
            <th className="w-[193px]">শাস্তির ধরন</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px]">{item.name}</td>
                    <td className="w-[150px]">{item.designation}</td>
                    <td className="w-[150px]">{item.code}</td>
                    <td className="w-[150px]">{item.casedes}</td>
                    <td className="w-[150px]">{item.institute}</td>
                    <td className="w-[150px]">{item.casecatagory}</td>
                    <td className="w-[150px]">{item.year}</td>
                    <td className="w-[150px]">{item.punishment}</td>
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

export default Desipline;
