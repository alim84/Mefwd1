import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const Inventoryconsumption = () => {
  let [productName, setProductName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [sectionName, setSectionName] = useState("");
  let [delevarydate, setDelevarydate] = useState("");

  let [alldata, setAllData] = useState([]);

  let productNameHandler = (e) => {
    setProductName(e.target.value);
  };
  let quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  let sectionNameHandler = (e) => {
    setSectionName(e.target.value);
  };
  let delevarydateHandler = (e) => {
    setDelevarydate(e.target.value);
  };

  let submitBtn = () => {
    const db = getDatabase();
    set(push(ref(db, "StoreOut/")), {
      productName: productName,
      quantity: quantity,
      sectionName: sectionName,
      delevarydate: delevarydate,
    }).then(() => {
      setProductName("");
      setQuantity("");
      setSectionName("");
      setDelevarydate("");
      alert("Submited Data Successfully");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const mefwdRef = ref(db, "StoreOut/");
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
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-10 px-5  rounded-b-lg shadow-2xl shadow-gray-400">
          <div className="mb-12 text-center font-bold text-2xl text-yellow-200">
            <h1 className="py-4">স্টোর মালামাল বিতরনের তথ্য</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 border-2 border-r-rose-500 border-b-rose-500/75  border-l-rose-500/50  border-t-rose-500/25 w-[800px]">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                বিতরন
              </h3>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">মালামালের নাম</level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="মালামালের নাম"
                    type="text"
                    name="emname"
                    onChange={productNameHandler}
                    value={productName}
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">পরিমান :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="পরিমান"
                    type="text"
                    name="designation"
                    onChange={quantityHandler}
                    value={quantity}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    দপ্তর/অধিশাখা/শাখার নাম :
                  </level>

                  <select
                    className="rounded-lg text-balance border-none hover:border-indigo-300 py-2 px-5"
                    id="institute"
                    name="institute"
                    onChange={sectionNameHandler}
                    value={sectionName}
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
                    <option value="AddionalPublic">
                      অতিরিক্ত সচিব (জনসংখ্যা)
                    </option>
                    <option value="Jointpublic">যুগ্মসচিব (জনসংখ্যা)</option>
                    <option value="Jointlaw">যুগ্মসচিব (আইন)</option>
                    <option value="Jointdispline">যুগ্মসচিব (শৃঙ্খলা)</option>
                    <option value="displine">শৃঙ্খলা শাখা</option>
                    <option value="law-1">আইন-১</option>
                    <option value="law-2">আইন-২</option>
                    <option value="population-1">জনসংখ্যা-১</option>
                    <option value="population-2">জনসংখ্যা-২</option>
                    <option value="additionaldev">
                      অতিরিক্ত সচিব (উন্নয়ন)
                    </option>
                    <option value="jointdev">যুগ্মসচিব (পরিকল্পনা)</option>
                    <option value="jointconsrepair">
                      যুগ্মসচিব (নির্মান ও মেরামত)
                    </option>
                    <option value="jointpurchace">
                      যুগ্মসচিব (ক্রয় ও সংগ্রহ)
                    </option>
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
                    <option value="policy and activitis">
                      নীতি ও কার্যক্রম
                    </option>
                    <option value="AdditionalBudget">
                      অতিরিক্ত সচিব (বাজেট)
                    </option>
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
                  <level className="text-yellow-200 block">
                    বিতরনের তারিখ :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    type="date"
                    name="designation"
                    onChange={delevarydateHandler}
                    value={delevarydate}
                  ></input>
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
    </>
  );
};

export default Inventoryconsumption;
