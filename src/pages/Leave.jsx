import { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const Leave = () => {
  let [name, setName] = useState("");
  let [designation, setDesignation] = useState("");
  let [section, setSection] = useState("");
  let [typeofleave, setTypeofleave] = useState("");
  let [leavefrom, setLeavefrom] = useState("");
  let [leaveto, setLeaveto] = useState("");
  let [totaldaysrequired, setTotaldaysrequired] = useState("");
  let [enjoytotalleave, setenjoytotalleave] = useState("");
  let [remainingleave, setRemainingleave] = useState("");
  let [totaldaysdue, setTotaldaysdue] = useState("");
  let [showdata, setShowdata] = useState([]);

  let nameHandler = (e) => {
    setName(e.target.value);
  };
  let designationHandler = (e) => {
    setDesignation(e.target.value);
  };
  let sectionHandler = (e) => {
    setSection(e.target.value);
  };
  let typeofleaveHandler = (e) => {
    setTypeofleave(e.target.value);
  };
  let leavefromtHandler = (e) => {
    setLeavefrom(e.target.value);
  };
  let leavetoHandler = (e) => {
    setLeaveto(e.target.value);
  };
  let totaldaysrequiredHandler = (e) => {
    setTotaldaysrequired(e.target.value);
  };
  let enjoytotalleaveHandler = (e) => {
    setenjoytotalleave(e.target.value);
  };
  let remainingleaveHandler = (e) => {
    setRemainingleave(e.target.value);
  };
  let totaldaysdueHandler = (e) => {
    setTotaldaysdue(e.target.value);
  };

  let submitLeave = () => {
    const db = getDatabase();
    set(push(ref(db, "Leave/")), {
      name: name,
      designation: designation,
      section: section,
      typeofleave: typeofleave,
      leavefrom: leavefrom,
      leaveto: leaveto,
      totaldaysrequired: totaldaysrequired,
      enjoytotalleave: enjoytotalleave,
      remainingleave: remainingleave,
      totaldaysdue: totaldaysdue,
    }).then(() => {
      setName("");
      setDesignation("");
      setSection("");
      setTypeofleave("");
      setLeavefrom("");
      setLeaveto("");
      setTotaldaysrequired("");
      setenjoytotalleave("");
      setRemainingleave("");
      setTotaldaysdue("");

      alert("Successfully Submit Data");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const leaveRef = ref(db, "Leave/");
    onValue(leaveRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setShowdata(array);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto rounded-3xl shadow-xl shadow-green-500 justify-between bg-gray-500 mt-10 ">
        <div>
          <h1 className="text-center font-bold text-green-400 pt-10 text-2xl mb-2 ">
            স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ
          </h1>
          <h2 className="text-center font-bold text-white underline text-xl mb-10">
            ছুটির আবেদন ফরম
          </h2>
        </div>

        <div className="border border-2 border-white px-6 py-8 mx-[250px]">
          <div className="grid grid-cols-3 gap-4 content-center">
            <div>
              <label className="block font-light py-2 text-white">
                কর্মকর্তা/কর্মচারীর নাম
              </label>
              <input
                onChange={nameHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="text"
                value={name.name}
                name="name"
                placeholder="কর্মকর্তা/কর্মচারীর নাম"
              ></input>
            </div>
            <div>
              <label className="block font-light py-2 text-white">পদবি</label>
              <select
                onChange={designationHandler}
                value={designation.designation}
                name="designation"
                id="designation"
                className="py-2 rounded-md"
              >
                <option value="Joint Secretary">যুগ্মসচিব</option>
                <option value="Deputy Secretary">উপসচিব</option>
                <option value="Senior Assistant Secretary">
                  সিনিয়র সহকারী সচিব
                </option>
                <option value="Programmer">প্রোগ্রামার</option>
                <option value="Assistant Secretary">সহকারী সচিব</option>
                <option value="Accounts Officer">হিসাব রক্ষণ কর্মকর্তা</option>
                <option value="Assistant Maintance Engneer">
                  সহকারী মেইনট্যানেন্স ইঞ্জিনিয়ার
                </option>
                <option value="Librian">লাইব্রেরিয়ান</option>
                <option value="Administrative Officer">
                  প্রশাসনিক কর্মকর্তা
                </option>
                <option value="Personal Officer">ব্যক্তিগত কর্মকর্তা</option>
                <option value="Assistant Accounts Officer">
                  সহকারী হিসাব রক্ষণ কর্মকর্তা
                </option>
                <option value="Cashiar">ক্যাশিয়ার</option>
                <option value="Stano-typist cum Computer Operator">
                  সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর
                </option>
                <option value="Computer Opretor">কম্পিউটার অপারেটর</option>
                <option value="Office Assistant cum Computer Operator">
                  অফিস সহকারী কাম কম্পিউটার অপারেটর
                </option>
                <option value="Cash Sarker">ক্যাশ সরকার</option>
                <option value="Office Sohayak">অফিস সহায়ক</option>
              </select>
            </div>
            <div>
              <label className="block font-light py-2 text-white">
                অনুবিভাগ/অধিশাখা/শাখার নাম
              </label>
              <select
                onChange={sectionHandler}
                name="section"
                id="section"
                value={section.section}
                className="py-2 rounded-md"
              >
                <option value="Secretary">সচিব মহোদয়ের দপ্তর</option>
                <option value="Additional Admin">
                  অতিরিক্ত সচিব (প্রশাসন)
                </option>
                <option value="Joint Secrtary Admin">
                  যুগ্মসচিব (প্রশাসন)
                </option>
                <option value="Joint Secretary Per">যুগ্মসচিব (পার)</option>
                <option value="Admin-1">প্রশাসন-১</option>
                <option value="admin-2">প্রশাসন-২</option>
                <option value="admin-3">প্রশাসন-৩</option>
                <option value="Per-1">পার-১</option>
                <option value="per-2">পার-২</option>
                <option value="Per-3">পার-৩</option>
                <option value="comcell">কম্পিউটার সেল</option>
                <option value="Account">হিসার শাখা</option>
                <option value="Library">লাইব্রেরি শাখা</option>
                <option value="AddionalPublic">অতিরিক্ত সচিব (জনসংখ্যা)</option>
                <option value="Jointpublic">যুগ্মসচিব (জনসংখ্যা)</option>
                <option value="Jointlaw">যুগ্মসচিব (আইন)</option>
                <option value="Jointdispline">যুগ্মসচিব (শৃঙ্খলা)</option>
                <option value="displine">শৃঙ্খলা শাখা</option>
                <option value="law-1">আইন-১</option>
                <option value="law-2">আইন-২</option>
                <option value="population-1">জনসংখ্যা-১</option>
                <option value="population-2">জনসংখ্যা-২</option>
                <option value="additionaldev">অতিরিক্ত সচিব (উন্নয়ন)</option>
                <option value="jointdev">যুগ্মসচিব (পরিকল্পনা)</option>
                <option value="jointconsrepair">
                  যুগ্মসচিব (নির্মান ও মেরামত)
                </option>
                <option value="jointpurchace">যুগ্মসচিব (ক্রয় ও সংগ্রহ)</option>
                <option value="construction">নির্মাণ শাখা</option>
                <option value="repair">মেরামত শাখা</option>
                <option value="purchase-1">ক্রয় ও সংগ্রহ-১</option>
                <option value="purchase-2">ক্রয় ও সংগ্রহ-২</option>
                <option value="planing-1">পরিকল্পনা-১</option>
                <option value="planing-2">পরিকল্পনা-২</option>
                <option value="planing-3">পরিকল্পনা-৩</option>
                <option value="planing-4">পরিকল্পনা-৪</option>
                <option value="planing-5">পরিকল্পনা-৫</option>
                <option value="planing-6">পরিকল্পনা-৬</option>
                <option value="planing-7">পরিকল্পনা-৭</option>
                <option value="additionalMe">
                  অতিরিক্ত সচিব (চিকিৎসা শিক্ষা)
                </option>
                <option value="jointMe">যুগ্মসচিব (চিকিৎসা শিক্ষা)</option>
                <option value="JointNur">যুগ্মসচিব (নার্সিং)</option>
                <option value="me-1">চিকিৎসা শিক্ষা-১</option>
                <option value="me-2">চিকিৎসা শিক্ষা-২</option>
                <option value="Nursing">নার্সিং শিক্ষা</option>
                <option value="policy and activitis">নীতি ও কার্যক্রম</option>
                <option value="AdditionalBudget">অতিরিক্ত সচিব (বাজেট)</option>
                <option value="JointBudget-1">যুগ্মসচিব (বাজেট-১)</option>
                <option value="JointBudget-2">যুগ্মসচিব (বাজেট-২)</option>
                <option value="Budget-1">বাজেট-১ শাখা</option>
                <option value="Budget-2">বাজেট-২ শাখা</option>
                <option value="Budget-3">বাজেট-৩ শাখা</option>
                <option value="Budget-4">বাজেট-৪ শাখা</option>
                <option value="AdditionalFinance">
                  অতিরিক্ত সচিব (আর্থিক ব্যবস্থাপনা)
                </option>
                <option value="JointFinance">
                  যুগ্মসচিব (আর্থিক ব্যবস্থাপনা)
                </option>
                <option value="JointProject">
                  যুগ্মসচিব (প্রকল্প বাস্তবায়ন)
                </option>
                <option value="Audit">অডিট শাখা</option>
                <option value="Finance">আর্থিক ব্যবস্থাপনা শাখা</option>
                <option value="Project-1">প্রকল্প বাস্তবায়ন-১</option>
                <option value="Project-2">প্রকল্প বাস্তবায়ন-২</option>
              </select>
            </div>
            <div>
              <label className="block font-light py-2 text-white">
                ছুটির ধরন
              </label>
              <select
                onChange={typeofleaveHandler}
                className="py-2 rounded-md"
                name="typeofleave"
                value={typeofleave.typeofleave}
                id="typeofleave"
              >
                <option disabled selected>
                  ছুটির ধরন
                </option>
                <option value="cl">নৈমেত্তিক ছুটি</option>
                <option value="ml">মাতৃকালীন ছুটি</option>
                <option value="sl">অসুস্থতাজনিত ছুটি</option>
                <option value="el">অর্জিত ছুটি</option>
              </select>
            </div>
          </div>
        </div>

        <div className="relative border border-2 border-white px-6 py-6 mx-[250px] mt-16  ">
          <h3 className="absulate inline-block translate-y-[-45px] bg-gray-500 text-white px-2 font-light ">
            ছুটির প্রাপ্যতা
          </h3>
          <div className="grid grid-cols-3 ">
            <div>
              <label className="block font-light py-2 text-white">হতে</label>
              <input
                onChange={leavefromtHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="date"
                value={leavefrom.leavefrom}
                name="leavefrom"
              ></input>
            </div>
            <div>
              <label className="block font-light py-2 text-white">
                পর্যন্ত
              </label>
              <input
                onChange={leavetoHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="date"
                value={leaveto.leaveto}
                name="leaveto"
              ></input>
            </div>
            <div>
              <label className="block font-light py-2 text-white">
                চাহিত মোট দিন
              </label>
              <input
                onChange={totaldaysrequiredHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="number"
                name="totaldaysrequired"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-3 ">
            <div>
              <label className="block font-light py-2 text-white">
                মোট ছুটিভোগ
              </label>
              <input
                onChange={enjoytotalleaveHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="text"
                value={enjoytotalleave.enjoytotalleave}
                name="enjoytotalleave"
              ></input>
            </div>
            <div>
              <label className="block font-light py-2 text-white">
                অবশিষ্ট ছুটি
              </label>
              <input
                onChange={remainingleaveHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="text"
                name="remainingleave"
                value={remainingleave.remainingleave}
              ></input>
            </div>
            <div>
              <label className="block font-light py-2 text-white">
                প্রাপ্য মোট দিন
              </label>
              <input
                onChange={totaldaysdueHandler}
                className="py-2 px-12 rounded-md mb-6"
                type="text"
                value={totaldaysdue.totaldaysdue}
                name="totaldaysdue"
              ></input>
            </div>
          </div>
        </div>

        <div className="text-center py-10">
          <button
            onClick={submitLeave}
            className="bg-white px-24 py-3 rounded-lg text-green-500 font-bold hover:bg-green-400 hover:text-white"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="container  mx-auto justify-between  mt-10 ">
        <ul>
          <table id="showdata">
            <th className="w-[193px] ">Name</th>
            <th className="w-[193px]">Designation</th>
            <th className="w-[193px]">Section</th>
            <th className="w-[193px]">Type of Leave</th>
            <th className="w-[193px]">Leave From</th>
            <th className="w-[193px]">Leave to</th>
            <th className="w-[193px]">Total day required</th>
            <th className="w-[193px]">Enjoy Total day Leave</th>
            <th className="w-[193px]">Remaining Leave</th>
            <th className="w-[193px]">Total day due</th>
          </table>
          {showdata.map((items) => {
            return (
              <li>
                <table id="showdata">
                  <tr>
                    <td className="w-[150px]">{items.name}</td>
                    <td className="w-[150px]">{items.designation}</td>
                    <td className="w-[150px]">{items.section}</td>
                    <td className="w-[150px]">{items.typeofleave}</td>
                    <td className="w-[150px]">{items.leavefrom}</td>
                    <td className="w-[150px]">{items.leaveto}</td>
                    <td className="w-[150px]">{items.totaldaysrequired}</td>
                    <td className="w-[150px]">{items.enjoytotalleave}</td>
                    <td className="w-[150px]">{items.remainingleave}</td>
                    <td className="w-[150px]">{items.totaldaysdue}</td>
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

export default Leave;
