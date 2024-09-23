import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const Me = () => {
  let [instituteName, setInstituteName] = useState("");
  let [ministryaprove, setMinistryapprove] = useState("");
  let [academicaprove, setAcademicaprove] = useState("");
  let [institutecatagory, SetInstitutecatagory] = useState("");
  let [division, setDivision] = useState("");
  let [distric, setDistric] = useState("");
  let [upzila, setUpzila] = useState("");
  let [house, setHouse] = useState("");
  let [seat, setSeat] = useState("");
  let [totalstudent, setTotalstudent] = useState("");
  let [totalmalestudent, setTotalmalestudent] = useState("");
  let [totalfemalestudent, setTotalfemalestudent] = useState("");
  let [poorstudent, setPoorstudent] = useState("");
  let [year, setYear] = useState("");
  let [alldata, setAllData] = useState([]);

  let instituteHandler = (e) => {
    setInstituteName(e.target.value);
  };
  let ministryaproveHandler = (e) => {
    setMinistryapprove(e.target.value);
  };
  let academicaproveHandler = (e) => {
    setAcademicaprove(e.target.value);
  };
  let institutecatagoryHandler = (e) => {
    SetInstitutecatagory(e.target.value);
  };
  let divisiontHandler = (e) => {
    setDivision(e.target.value);
  };
  let districHandler = (e) => {
    setDistric(e.target.value);
  };
  let upzilaHandler = (e) => {
    setUpzila(e.target.value);
  };
  let houseHandler = (e) => {
    setHouse(e.target.value);
  };
  let seatHandler = (e) => {
    setSeat(e.target.value);
  };
  let totalstudentHandler = (e) => {
    setTotalstudent(e.target.value);
  };
  let totalmalestudentHandler = (e) => {
    setTotalmalestudent(e.target.value);
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
    <>
      <div className="container mx-auto justify-between bg-gray-200 mt-10 ">
        <div>
          <h1 className="text-center font-bold text-blue-600 pt-10 text-2xl mb-2 underline ">
            Medical Education and family Welfare Division
          </h1>
          <h2 className="text-center font-bold text-purple-800  text-xl mb-10">
            Non-Govt. Medical Collge Record
          </h2>
        </div>

        <div className="border-2 border-white px-6 py-8 mx-[250px]">
          <div className="grid grid-cols-3 gap-4 content-center">
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                প্রতিষ্ঠানের নাম
              </label>
              <input
                onChange={instituteHandler}
                className="py-2 px-12 rounded-lg mb-6"
                type="text"
                name="institute"
                placeholder="প্রতিষ্ঠানের নাম"
              ></input>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                মন্ত্রণালয় কর্তৃক অনুমোদন
              </label>
              <input
                onChange={ministryaproveHandler}
                className="py-2 px-12 rounded-lg mb-6"
                type="text"
                name=""
                placeholder="মন্ত্রণালয় কর্তৃক অনুমোদন"
              ></input>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                মন্ত্রণালয় কর্তৃক একাডেমিক অনুমোদন
              </label>
              <input
                onChange={academicaproveHandler}
                className="py-2 px-12 rounded-lg mb-6"
                type="text"
                name=""
                placeholder="মন্ত্রণালয় কর্তৃক একাডেমিক অনুমোদন"
              ></input>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                প্রতিষ্ঠানের ধরণ
              </label>
              <select
                onChange={institutecatagoryHandler}
                className="py-2 rounded-md"
                name="divisions"
                id="divisions"
              >
                <option disabled selected>
                  প্রতিষ্ঠানের ধরণ
                </option>
                <option value="Barishal">বেসরকারী মেডিকেল কলেজ</option>
                <option value="Chattogram">আইএইচটি</option>
                <option value="Dhaka">ম্যাটস</option>
                <option value="Khulna">ডিপ্লোমা নাসিং কলেজ</option>
                <option value="Mymensingh">ডিপ্লোমা নার্সিং ইনস্টিটিউট</option>
                <option value="Khulna">বিএসসি নাসিং কলেজ</option>
                <option value="Mymensingh">বিএসসি নার্সিং ইনস্টিটিউট</option>
              </select>
            </div>
          </div>
        </div>

        <div className="relative border border-2 border-white px-6 py-6 mx-[250px] mt-5  ">
          <h3 className="absulate inline-block translate-y-[-35px] bg-gray-200 px-2 font-bold ">
            ঠিকানা
          </h3>
          <div className="grid grid-cols-4 ">
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                বিভাগ
              </label>
              <select
                onChange={divisiontHandler}
                className="py-2 rounded-md"
                name="divisions"
                id="divisions"
              >
                <option disabled selected>
                  বিভাগ
                </option>
                <option value="Barishal">Barishal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold py-2 text-purple-800">
                জেলা
              </label>
              <select
                onChange={districHandler}
                className="py-2 rounded-md"
                name="divisions"
                id="divisions"
              >
                <option disabled selected>
                  জেলা
                </option>
                <option value="Bagerhat">Bagerhat</option>
                <option value="Bandarban">Bandarban</option>
                <option value="Barguna">Barguna</option>
                <option value="Barisal">Barisal</option>
                <option value="Bhola">Bhola</option>
                <option value="Bogra">Bogra</option>
                <option value="Brahmanbaria">Brahmanbaria</option>
                <option value="Chandpur">Chandpur</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Chuadanga">Chuadanga</option>
                <option value="Comilla">Comilla</option>
                <option value="Cox'sBazar">Cox'sBazar</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Feni">Feni</option>
                <option value="Gaibandha">Gaibandha</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Habiganj">Habiganj</option>
                <option value="Jaipurhat">Jaipurhat</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Jessore">Jessore</option>
                <option value="Jhalokati">Jhalokati</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Khagrachari">Khagrachari</option>
                <option value="Khulna">Khulna</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Kurigram">Kurigram</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Lakshmipur">Lakshmipur</option>
                <option value="Lalmonirhat">Lalmonirhat</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Magura">Magura</option>
                <option value="Manikganj">Manikganj</option>
                <option value="Maulvibazar">Maulvibazar</option>
                <option value="Meherpur">Meherpur</option>
                <option value="Munshiganj">Munshiganj</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Naogaon">Naogaon</option>
                <option value="Narail">Narail</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Natore">Natore</option>
                <option value="Nawabganj">Nawabganj</option>
                <option value="Netrokona">Netrokona</option>
                <option value="Nilphamari">Nilphamari</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Pabna">Pabna</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Pirojpur">Pirojpur</option>
                <option value="Rajbari">Rajbari</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangamati">Rangamati</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Satkhira">Satkhira</option>
                <option value="Shariatpur">Shariatpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Sirajganj">Sirajganj</option>
                <option value="Sunamganj">Sunamganj</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Tangail">Tangail</option>
                <option value="Thakurgaon">Thakurgaon</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold py-2 text-purple-800">
                উপজেলা
              </label>
              <select
                onChange={upzilaHandler}
                className="py-2 rounded-md"
                name="divisions"
                id="divisions"
              >
                <option disabled selected>
                  উপজেলা
                </option>
                <option value="Barishal">Barishal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                বাড়ি নং/রাস্তা/মহল্লা
              </label>
              <input
                onChange={houseHandler}
                className="py-2 px-8 rounded-lg  mb-6"
                type="text"
                name=""
                placeholder="বাড়ি নং/রাস্তা/মহল্লা"
              ></input>
            </div>
          </div>
        </div>

        <div className="relative border border-2 border-white px-6 py-6 mx-[250px] mt-5  ">
          <h3 className="absulate inline-block translate-y-[-35px] bg-gray-200 px-2 font-bold ">
            আসন সংখ্যা
          </h3>
          <div className="grid grid-cols-3 gap-2 ">
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                আসন সংখ্যা
              </label>
              <input
                onChange={seatHandler}
                className="py-2 px-8 rounded-lg  mb-6"
                type="text"
                name=""
                placeholder="আসন সংখ্যা"
              ></input>
            </div>

            <div>
              <label className="block font-semibold py-2 text-purple-800">
                মোট শিক্ষার্থী
              </label>
              <input
                onChange={totalstudentHandler}
                className="py-2 px-8 rounded-lg  mb-6"
                type="text"
                name=""
                placeholder="মোট শিক্ষার্থী"
              ></input>
            </div>

            <div>
              <label className="block font-semibold py-2 text-purple-800">
                মোট ছাত্র
              </label>
              <input
                onChange={totalmalestudentHandler}
                className="py-2 px-8 rounded-lg  mb-6"
                type="text"
                name=""
                placeholder="মোট ছাত্র"
              ></input>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                মোট ছাত্রী
              </label>
              <input
                onChange={totalfemalestudentHandler}
                className="py-2 px-8 rounded-lg  mb-6"
                type="text"
                name=""
                placeholder="মোট ছাত্রী"
              ></input>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                দরিদ্র শিক্ষার্থী সংখ্যা
              </label>
              <input
                onChange={poorstudentHandler}
                className="py-2 px-8 rounded-lg  mb-6"
                type="text"
                name=""
                placeholder="দরিদ্র শিক্ষার্থী সংখ্যা"
              ></input>
            </div>
            <div>
              <label className="block font-semibold py-2 text-purple-800">
                শিক্ষাবর্ষ
              </label>
              <select
                onChange={yearHandler}
                className="py-2 rounded-md"
                name="divisions"
                id="divisions"
              >
                <option disabled selected>
                  শিক্ষাবর্ষ
                </option>
                <option value="২০২৪-২০২৫">২০২৪-২০২৫</option>
                <option value="২০২৪-২০২৫">২০২৪-২০২৫</option>
                <option value="২০২৪-২০২৫">২০২৪-২০২৫</option>
                <option value="২০২৪-২০২৫">২০২৪-২০২৫</option>
                <option value="২০২৪-২০২৫">২০২৪-২০২৫</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-center py-10">
          <button className=" bg-purple-800 px-24 py-3 rounded-lg text-white font-bold hover:bg-blue-500">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Me;
