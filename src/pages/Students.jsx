import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const Students = () => {
  let [instituteName, setinstituteName] = useState("");
  let [course, setCourse] = useState("");
  let [session, setSession] = useState("");
  let [seat, setSeat] = useState("");
  let [totaladmissionstudent, setTotaladmissionstudent] = useState("");
  let [vacantSeat, setVacantSeat] = useState("");
  let [maleStudent, setMaleStudent] = useState("");
  let [femalStudent, setfemalStudent] = useState("");
  let [district, setDistrict] = useState("");
  let [alldata, setAllData] = useState([]);

  let instituteNameHandler = (e) => {
    setinstituteName(e.target.value);
  };
  let courseHandler = (e) => {
    setCourse(e.target.value);
  };
  let sessionHandler = (e) => {
    setSession(e.target.value);
  };
  let seatHandler = (e) => {
    setSeat(e.target.value);
  };
  let totaladmissionHandler = (e) => {
    setTotaladmissionstudent(e.target.value);
  };
  let vacantHandler = (e) => {
    setVacantSeat(e.target.value);
  };
  let maleStudentHandler = (e) => {
    setMaleStudent(e.target.value);
  };
  let femaleStudentHandler = (e) => {
    setfemalStudent(e.target.value);
  };
  let dristrictHandler = (e) => {
    setDistrict(e.target.value);
  };

  let submitBtn = () => {
    const db = getDatabase();
    set(push(ref(db, "student/")), {
      instituteName: instituteName,
      course: course,
      session: session,
      seat: seat,
      totaladmissionstudent: totaladmissionstudent,
      vacantSeat: vacantSeat,
      maleStudent: maleStudent,
      femalStudent: femalStudent,
      district: district,
    }).then(() => {
      setinstituteName("");
      setCourse("");
      setSession("");
      setSeat("");
      setTotaladmissionstudent("");
      setVacantSeat("");
      setMaleStudent("");
      setfemalStudent("");
      setDistrict("");
      alert("Data Submitted Successfully");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const mefwdRef = ref(db, "student/");
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
        <div className="container  mx-auto bg-cyan-900 py-10 px-5 rounded-b-lg shadow-xl shadow-slate-500 ">
          <div className="mb-12 text-center font-bold text-2xl text-orange-500">
            <h1 className="py-4">শিক্ষার্থীর তথ্য</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 w-[800px] border-x-2 border-y border-x-orange-300 border-y-orange-300">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                শিক্ষার্থীর তথ্য
              </h3>
              <div className="flex mx-auto justify-between">
                <div>
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের নাম :
                  </level>
                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={instituteNameHandler}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>ঢাকা মেডিকেল কলেজ</option>
                    <option>শহীদ সোরয়ারদী মেডিকেল কলেজ</option>
                  </select>
                </div>
                <div>
                  <level className="text-yellow-200 block">কোর্সের নাম :</level>
                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={courseHandler}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>এমবিবিএস</option>
                    <option>এমবিবিএস (ডেন্টাল) </option>
                    <option>বিএসসি নার্সিং</option>
                    <option>ডিপ্লোমা নার্সিং</option>
                    <option>আইএসটি</option>
                    <option>ম্যাটস</option>
                  </select>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">সেশন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={sessionHandler}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>২০২০-২০২১</option>
                    <option>২০২১-২০২২</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">আসন সংখ্যা :</level>
                  <input
                    className=" py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    type="text"
                    name="name"
                    onChange={seatHandler}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    মোট ভর্তিকৃত শিক্ষার্থীর সংখ্য :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মরত জনবল "
                    type="text"
                    name="name"
                    onChange={totaladmissionHandler}
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">শুন্য আসন :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য আসন"
                    type="text"
                    name="name"
                    onChange={vacantHandler}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    ছাত্র সংখ্যা :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য আসন"
                    type="text"
                    name="name"
                    onChange={maleStudentHandler}
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    ছাত্রী সংখ্যা :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য আসন"
                    type="text"
                    name="name"
                    onChange={femaleStudentHandler}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের অবস্থান :
                  </level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={dristrictHandler}
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সিরাজগঞ্জ</option>
                    <option>পাবনা</option>
                  </select>
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
    </>
  );
};

export default Students;
