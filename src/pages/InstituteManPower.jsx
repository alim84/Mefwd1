import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const InstituteManPower = () => {
  let [instituteName, setInstituteName] = useState("");
  let [designation, setDesignation] = useState("");
  let [grade, setGrade] = useState("");
  let [approvalPost, setApprovalPost] = useState("");
  let [workingMan, setWorkingMan] = useState("");
  let [vacantPost, setVacantPost] = useState("");
  let [workingMale, setWorkingMale] = useState("");
  let [workingFemale, setWorkingFemale] = useState("");
  let [alldata, setAllData] = useState([]);

  let instituteHandler = (e) => {
    setInstituteName(e.target.value);
  };
  let designationHandler = (e) => {
    setDesignation(e.target.value);
  };
  let gradeHandler = (e) => {
    setGrade(e.target.value);
  };
  let approvalpostHandler = (e) => {
    setApprovalPost(e.target.value);
  };
  let workingmanHandler = (e) => {
    setWorkingMan(e.target.value);
  };
  let vacantpostHandler = (e) => {
    setVacantPost(e.target.value);
  };
  let workingMaleHandler = (e) => {
    setWorkingMale(e.target.value);
  };
  let workingFemaleHandler = (e) => {
    setWorkingFemale(e.target.value);
  };

  let submitBtn = () => {
    const db = getDatabase();
    set(push(ref(db, "institutemanpower/")), {
      instituteName: instituteName,
      designation: designation,
      grade: grade,
      approvalPost: approvalPost,
      workingMan: workingMan,
      vacantPost: vacantPost,
      workingMale: workingMale,
      workingFemale: workingFemale,
    }).then(() => {
      setInstituteName("");
      setDesignation("");
      setGrade("");
      setApprovalPost("");
      setWorkingMan("");
      setVacantPost("");
      setWorkingMan("");
      setWorkingFemale("");
      alert("Submit Data");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const mefwdRef = ref(db, "institutemanpower/");
    onValue(mefwdRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <div>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-5 px-5 mt-10">
          <div className="mb-12 text-center font-bold text-2xl text-orange-500">
            <h1 className="py-4">প্রতিষ্ঠানের জনবলের তথ্য</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                প্রতিষ্ঠানের জনবলের তথ্য
              </h3>
              <div className="flex mx-auto justify-between">
                <div>
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের নাম :
                  </level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-2 px-5"
                    id="instituteName"
                    name="instituteName"
                    onChange={instituteHandler}
                    value={instituteName}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ</option>
                    <option>পরিবার পরিকল্পনা অধিদপ্তর</option>
                    <option>স্বাস্থ্য শিক্ষা অধিদপ্তর</option>
                    <option>জাতীয় জনসংখ্য ও গবেষনা প্রতিষ্ঠান</option>
                    <option>ঢাকা মেডিকেল কলেজ</option>
                    <option>শহীদ সোরয়ারদী মেডিকেল কলেজ</option>
                  </select>
                </div>
                <div>
                  <level className="text-yellow-200 block">
                    কর্মকর্তা/কর্মচারী পদবি :
                  </level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={designationHandler}
                    value={designation}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সিস্টেম এনালিস্ট</option>
                    <option>প্রোগ্রামার</option>
                    <option>সহকারী সচিব</option>
                    <option>হিসাব রক্ষণ কর্মকর্তা</option>
                    <option>সহকারী মেইনট্যানেন্স ইঞ্জিনিয়ার</option>
                    <option>লাইব্রেরিয়ান</option>
                    <option>প্রশাসনিক কর্মকর্তা</option>
                    <option>ব্যক্তিগত কর্মকর্তা</option>
                    <option>সহকারী হিসাব রক্ষণ কর্মকর্তা</option>
                    <option>ক্যাশিয়ার</option>
                    <option>কম্পিউটার অপারেটর</option>
                    <option>সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</option>
                    <option>অফিস সহকারী কাম কম্পিউটার অপারেটর</option>
                    <option>অফিস সহায়ক</option>
                  </select>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">গ্রেড :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="grade"
                    name="grade"
                    onChange={gradeHandler}
                    value={grade}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>গ্রেড-১ ৭৮০০০ (নির্ধারিত)</option>
                    <option>গ্রেড-২ (৬৬০০০-৭৯৪৯০)</option>
                    <option>গ্রেড-৩ (৫৬৫০০-৭৪৪০০)</option>
                    <option>গ্রেড-৪ (৫০০০০-৭১২০০)</option>
                    <option>গ্রেড-৫ (৪৩০০০-৬৯৮৫০)</option>
                    <option>গ্রেড-৬ (৩৫৫০০-৬৭০১০)</option>
                    <option>গ্রেড-৭ (২৯০০০-৬৩৪১০)</option>
                    <option>গ্রেড-৮ (২৩০০০-৫৫৪৬০)</option>
                    <option>গ্রেড-৯ (২২০০০-৫৩০৬০)</option>
                    <option>গ্রেড-১০ (১৬০০০-৩৮৬৪০)</option>
                    <option>গ্রেড-১১ (১২৫০০-৩২২৪০)</option>
                    <option>গ্রেড-১২ (১১৩০০-২৭৩০০)</option>
                    <option>গ্রেড-১৩ (১১০০০-২৬৫৯০)</option>
                    <option>গ্রেড-১৪ (১০২০০-২৪৬৮০)</option>
                    <option>গ্রেড-১৫ (৯৭০০-২৩৪৯০)</option>
                    <option>গ্রেড-১৬ (৯৩০০-২২৪৯০)</option>
                    <option>গ্রেড-১৭ (৯০০০-২১৮০০)</option>
                    <option>গ্রেড-১৮ (৮৮০০-২১৩১০)</option>
                    <option>গ্রেড-১৯ (৮৫০০-২০৫৭০) </option>
                    <option>গ্রেড-২০ (৮২৫০-২০০১০)</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    অনুমোদিত পদ সংখ্যা :
                  </level>
                  <input
                    className=" py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    type="text"
                    name="approvalpost"
                    onChange={approvalpostHandler}
                    value={approvalPost}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">কর্মরত জনবল :</level>

                  <input
                    className="py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মরত জনবল "
                    type="text"
                    name="manpower"
                    onChange={workingmanHandler}
                    value={workingMan}
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    শুন্য পদে সংখ্যা :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য পদে সংখ্যা"
                    type="text"
                    name="vacant"
                    onChange={vacantpostHandler}
                    value={vacantPost}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    কর্মরত পুরুষ জনবল :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মরত পুরুষ জনবল "
                    type="text"
                    name="maleemploy"
                    onChange={workingMaleHandler}
                    value={workingMale}
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    কর্মরত মহিলা জনবল :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মরত মহিলা জনবল"
                    type="text"
                    name="femaleemploy"
                    onChange={workingFemaleHandler}
                    value={workingFemale}
                  ></input>
                </div>
              </div>{" "}
            </div>
            <button
              onClick={submitBtn}
              className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-purple-900 hover:bg-indigo-600 hover:text-white flex mx-auto justify-center"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="container  mx-auto justify-between  mt-10 ">
        <ul>
          <table id="showdata">
            <th className="w-[193px] "> প্রতিষ্ঠানের নাম</th>
            <th className="w-[193px]">পদবি</th>
            <th className="w-[193px]">গ্রেড</th>
            <th className="w-[193px]">অনুমোদিত পদ সংখ্যা</th>
            <th className="w-[193px]">কর্মরত জনবল</th>
            <th className="w-[193px]">শুন্য পদের সংখ্যা</th>
            <th className="w-[193px]">কর্মরত পুরুষ জনবল</th>
            <th className="w-[193px]">কর্মরত মহিলা জনবল</th>
          </table>
          {alldata.map((item) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px]">{item.instituteName}</td>
                    <td className="w-[150px]">{item.designation}</td>
                    <td className="w-[150px]">{item.grade}</td>
                    <td className="w-[150px]">{item.approvalPost}</td>
                    <td className="w-[150px]">{item.workingMan}</td>
                    <td className="w-[150px]">{item.vacantPost}</td>
                    <td className="w-[150px]">{item.workingMale}</td>
                    <td className="w-[150px]">{item.workingFemale}</td>
                  </tr>
                </table>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InstituteManPower;
