import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const PersonelInfo = () => {
  let [name, setName] = useState("");
  let [designation, setDesignation] = useState("");
  let [grade, setGrade] = useState("");
  let [section, setSection] = useState("");
  let [dateofbirth, setDateofbirth] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [metital, setmerital] = useState("");
  let [religion, setReligion] = useState("");
  let [homedistrict, setHomeDristrict] = useState("");
  let [perdivision, setPerDivision] = useState("");
  let [perdristrict, setPerdristrict] = useState("");
  let [perthana, setPerthana] = useState("");
  let [perPostoffice, setPerpostoffice] = useState("");
  let [pervillage, setpervillage] = useState("");
  let [perroad, setPerroad] = useState("");
  let [perhouse, setPerhouse] = useState("");
  let [predivision, setPreDivision] = useState("");
  let [predristrict, setPredristrict] = useState("");
  let [prethana, setPrethana] = useState("");
  let [prePostoffice, setPrepostoffice] = useState("");
  let [previllage, setprevillage] = useState("");
  let [preroad, setPreroad] = useState("");
  let [prehouse, setPrehouse] = useState("");
  let [appontmentCatagory, setappontmentCatagory] = useState("");
  let [firstjoint, setFirstjoint] = useState("");
  let [firstdesignation, setFirstdesignation] = useState("");
  let [scale, setScale] = useState("");
  let [promotiondesignation, setPromotiondesignation] = useState("");
  let [promotionjoinindate, setPromotionjoinindate] = useState("");

  let [alldata, setAllData] = useState([]);

  let nameHandler = (e) => {
    setName(e.target.value);
  };
  let designationHandler = (e) => {
    setDesignation(e.target.value);
  };
  let gradeHandler = (e) => {
    setGrade(e.target.value);
  };
  let sectionHandler = (e) => {
    setSection(e.target.value);
  };
  let birthHandler = (e) => {
    setDateofbirth(e.target.value);
  };
  let mobileHandler = (e) => {
    setMobile(e.target.value);
  };
  let emailHandler = (e) => {
    setUpzila(e.target.value);
  };
  let gengerHandler = (e) => {
    setGender(e.target.value);
  };
  let meritalHandler = (e) => {
    setmerital(e.target.value);
  };
  let religionHandler = (e) => {
    setReligion(e.target.value);
  };
  let homeHandler = (e) => {
    setHomeDristrict(e.target.value);
  };
  let totalfemalestudentHandler = (e) => {
    setTotalfemalestudent(e.target.value);
  };
  let poorstudentHandler = (e) => {
    setPoorstudent(e.target.value);
  };
  let yearHandler = (e) => {
    setYear(e.target.value);
  };

  let submitButton = () => {
    const db = getDatabase();
    set(push(ref(db, "Medical/")), {
      instituteName: instituteName,
      ministryaprove: ministryaprove,
      academicaprove: academicaprove,
      institutecatagory: institutecatagory,
      division: division,
      distric: distric,
      upzila: upzila,
      house: house,
      seat: seat,
      totalstudent: totalstudent,
      totalmalestudent: totalmalestudent,
      totalfemalestudent: totalfemalestudent,
      poorstudent: poorstudent,
      year: year,
    }).then(() => {
      setInstituteName("");
      setMinistryapprove("");
      setAcademicaprove("");
      SetInstitutecatagory("");
      setDivision("");
      setDistric("");
      setUpzila("");
      setHouse("");
      setSeat("");
      setTotalstudent("");
      setTotalmalestudent("");
      setTotalfemalestudent("");
      setPoorstudent("");
      setYear("");
      alert("Successfully Submitted your Data");
    });
  };
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
    <div>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-5 px-5 mt-10">
          <div className="mb-12 text-center font-bold text-2xl text-orange-500">
            <h1 className="py-4">Personel Information of Mefwd Employee</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                প্রাথমিক তথ্য
              </h3>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    কর্মকর্তার নাম :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মকর্তার নাম"
                    type="text"
                    name="name"
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">পদবি :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>প্রশাসন অনুবিভাগ</option>
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
                <div>
                  <level className="text-yellow-200 block">
                    গ্রেড ও বেতন স্কেল :
                  </level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>প্রশাসন অনুবিভাগ</option>
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
                  <level className="text-yellow-200 block">
                    শাখা/অধিশাখা/অনুবিভাগ :
                  </level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
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
                <div className="py-3">
                  <level className="text-yellow-200 block">জন্মতারিখ :</level>
                  <input
                    className=" py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    type="date"
                    name="name"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    মোবাইল নাম্বার :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    placeholder="মোবাইল নাম্বার "
                    type="text"
                    name="name"
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">ই-মেইল :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="ই-মেইল"
                    type="email"
                    name="name"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-around gap-40">
                <div className="py-3">
                  <level className="text-yellow-200">জেন্ডার :</level>
                  <select
                    className="rounded-full ml-3 border-none hover:border-indigo-300 py-[4px] px-6"
                    id="gender"
                    name="gender"
                  >
                    <option value="male">নির্বাচন করুন</option>
                    <option value="male">পুরুষ</option>
                    <option value="Female">মহিলা</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">বৈবাহিক অবস্থা :</level>
                  <select
                    className="rounded-full ml-3 border-none hover:border-indigo-300  py-[4px] px-6"
                    id="mariul status"
                    name="mariul status"
                  >
                    <option value="male">নির্বাচন করুন</option>
                    <option value="male">বিবাহিত</option>
                    <option value="Female">অবিবাহিত</option>
                  </select>
                </div>
              </div>
              <div className="flex mx-auto justify-around gap-40">
                <div className="py-3">
                  <level className="text-yellow-200">ধর্ম :</level>
                  <select
                    className="rounded-full ml-3 border-none hover:border-indigo-300  py-[4px] px-6"
                    id="religion"
                    name="religion"
                  >
                    <option value="male">নির্বাচন করুন</option>
                    <option value="male">ইসলাম</option>
                    <option value="Female">হিন্দু</option>
                    <option value="Female">খ্রিস্ট্রান</option>
                    <option value="Female">বৌদ্ধ</option>
                    <option value="Female">অন্যান্য</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">নিজ জেলা :</level>
                  <select
                    className="rounded-full ml-3 border-none hover:border-indigo-300  py-[4px] px-6"
                    id="selfdist"
                    name="selfdist"
                  >
                    <option value="male">নির্বাচন করুন</option>
                    <option value="dist">সিরাজগঞ্জ</option>
                    <option value="dist">পাবনা</option>
                    <option value="dist">পাবনা</option>
                    <option value="dist">পাবনা</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" relative mx-auto justify-center gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
              <div className="flex grid-cols-3 justify-between">
                <div className="py-3">
                  <level className="text-yellow-200">বিভাগ :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="division"
                    name="division"
                  >
                    <option value="dist">নির্বাচন করুন</option>
                    <option value="dist">ঢাকা</option>
                    <option value="dist">চট্রগ্রাম</option>
                    <option value="dist">রাজশাহী</option>
                    <option value="dist">সিলেট</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">জেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="dist"
                    name="dist"
                  >
                    <option value="dist">নির্বাচন করুন</option>
                    <option value="dist">ঢাকা</option>
                    <option value="dist">চট্রগ্রাম</option>
                    <option value="dist">রাজশাহী</option>
                    <option value="dist">সিলেট</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">উপজেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="upzila"
                    name="upzila"
                  >
                    <option value="dist">নির্বাচন করুন</option>
                    <option value="dist">ঢাকা</option>
                    <option value="dist">চট্রগ্রাম</option>
                    <option value="dist">রাজশাহী</option>
                    <option value="dist">সিলেট</option>
                  </select>
                </div>
              </div>

              <div className="py-3 ">
                <h3 className=" absolute translate-y-[-10px] text-yellow-200 bg-cyan-900 ml-2 px-3 top-0 left-0">
                  স্থায়ী ঠিকানা:{" "}
                </h3>
                <level className="text-yellow-200">পোস্ট অফিস :</level>
                <input
                  className="py-2 px-10 rounded-md ml-32 border outline-1 hover:outline-indigo-600 "
                  placeholder="পোস্ট অফিস "
                  type="text"
                  name="name"
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200 i">
                  গ্রাম/মহল্লা/ওয়ার্ড :
                </level>
                <input
                  className="py-2 px-10 rounded-md ml-24 border outline-1 hover:outline-indigo-600 "
                  placeholder="গ্রাম/মহল্লা/ওয়ার্ড "
                  type="text"
                  name="name"
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">রাস্তা নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="রাস্তা নং"
                  type="text"
                  name="name"
                ></input>
              </div>
              <div className="py-3 ">
                <level className="text-yellow-200">বাড়ি নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="বাড়ি"
                  type="text"
                  name="name"
                ></input>
              </div>
            </div>
            <div className=" relative mx-auto justify-center gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
              <div className="flex grid-cols-3 justify-between">
                <div className="py-3">
                  <level className="text-yellow-200">বিভাগ :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="division"
                    name="division"
                  >
                    <option value="dist">নির্বাচন করুন</option>
                    <option value="dist">ঢাকা</option>
                    <option value="dist">চট্রগ্রাম</option>
                    <option value="dist">রাজশাহী</option>
                    <option value="dist">সিলেট</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">জেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="dist"
                    name="dist"
                  >
                    <option value="dist">নির্বাচন করুন</option>
                    <option value="dist">ঢাকা</option>
                    <option value="dist">চট্রগ্রাম</option>
                    <option value="dist">রাজশাহী</option>
                    <option value="dist">সিলেট</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">উপজেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="upzila"
                    name="upzila"
                  >
                    <option value="dist">নির্বাচন করুন</option>
                    <option value="dist">ঢাকা</option>
                    <option value="dist">চট্রগ্রাম</option>
                    <option value="dist">রাজশাহী</option>
                    <option value="dist">সিলেট</option>
                  </select>
                </div>
              </div>

              <div className="py-3 ">
                <h3 className=" absolute translate-y-[-10px] text-yellow-200 bg-cyan-900 ml-2 px-3 top-0 left-0">
                  বর্তমান ঠিকানা:{" "}
                </h3>
                <level className="text-yellow-200">পোস্ট অফিস :</level>
                <input
                  className="py-2 px-10 rounded-md ml-32 border outline-1 hover:outline-indigo-600 "
                  placeholder="পোস্ট অফিস "
                  type="text"
                  name="name"
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200 i">
                  গ্রাম/মহল্লা/ওয়ার্ড :
                </level>
                <input
                  className="py-2 px-10 rounded-md ml-24 border outline-1 hover:outline-indigo-600 "
                  placeholder="গ্রাম/মহল্লা/ওয়ার্ড "
                  type="text"
                  name="name"
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">রাস্তা নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="রাস্তা নং"
                  type="text"
                  name="name"
                ></input>
              </div>
              <div className="py-3 ">
                <level className="text-yellow-200">বাড়ি নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="বাড়ি"
                  type="text"
                  name="name"
                ></input>
              </div>
            </div>
            <div className=" relative mx-auto justify-center gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
              <div className="py-3 ">
                <h3 className=" absolute translate-y-[-10px] text-yellow-200 bg-cyan-900 ml-2 px-3 top-0 left-0">
                  যোগদানের তথ্য :{" "}
                </h3>
                <level className="text-yellow-200">নিয়োগের ধরন :</level>
                <select
                  className="rounded-lg ml-28 border-none hover:border-indigo-300 py-2 px-5"
                  id="apptype"
                  name="apptype"
                >
                  <option value="dist">নির্বাচন করুন</option>
                  <option value="dist">সরাসরি</option>
                  <option value="dist">রাজস্ব</option>
                  <option value="dist">অস্থায়ী</option>
                  <option value="dist">চুক্তি ভিত্তিক</option>
                </select>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">প্রথম যোগদানের তারিখ:</level>
                <input
                  className="py-2 px-10 rounded-md  ml-14 border outline-1 hover:outline-indigo-600 "
                  type="date"
                  name="name"
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">পদবি :</level>
                <select
                  className="rounded-lg ml-44  border-none hover:border-indigo-300 py-2 px-5"
                  id="designation"
                  name="designation"
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
              <div className="py-3 ">
                <level className="text-yellow-200">বেতন স্কেল :</level>
                <select
                  className="rounded-lg ml-36  border-none hover:border-indigo-300 py-2 px-5"
                  id="designation"
                  name="designation"
                >
                  <option>নির্বাচন করুন</option>
                  <option>(20)-8100X20---23000X15</option>
                  <option>(20)-8100X20---23000X15</option>
                  <option>(20)-8100X20---23000X15</option>
                  <option>(20)-8100X20---23000X15</option>
                  <option>(20)-8100X20---23000X15</option>
                  <option>(20)-8100X20---23000X15</option>
                </select>
              </div>
            </div>
            <div className=" relative mx-auto justify-center gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
              <div className="py-3 ">
                <h3 className=" absolute translate-y-[-10px] text-yellow-200 bg-cyan-900 ml-2 px-3 top-0 left-0">
                  পদোন্নতির তথ্য :{" "}
                </h3>
                <level className="text-yellow-200">পদোন্নতির পদবি :</level>
                <select
                  className="rounded-lg ml-28  border-none hover:border-indigo-300 py-3 px-5"
                  id="designation"
                  name="designation"
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
              <div className="py-3">
                <level className="text-yellow-200">প্রথম যোগদানের তারিখ:</level>
                <input
                  className="py-2 px-10 rounded-md ml-20 border outline-1 hover:outline-indigo-600 "
                  placeholder="Enter Your Name"
                  type="date"
                  name="name"
                ></input>
              </div>
            </div>
            <button className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-purple-900 hover:bg-indigo-600 hover:text-yellow-300 flex mx-auto justify-center">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonelInfo;
