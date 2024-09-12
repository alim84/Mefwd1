import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import upazilas from "../json/Upazilas.json";

const PersonelInfo = () => {
  let [name, setName] = useState("");
  let [designation, setDesignation] = useState("");
  let [grade, setGrade] = useState("");
  let [section, setSection] = useState("");
  let [dateofbirth, setDateofbirth] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [merital, setmerital] = useState("");
  let [religion, setReligion] = useState("");
  let [homedistrict, setHomeDristrict] = useState("");
  let [perdivision, setPerDivision] = useState("");
  let [perdristrict, setPerdristrict] = useState("");
  let [perthana, setPerthana] = useState("");
  let [perPostoffice, setPerpostoffice] = useState("");
  let [pervillage, setPervillage] = useState("");
  let [perroad, setPerroad] = useState("");
  let [perhouse, setPerhouse] = useState("");
  let [predivision, setPreDivision] = useState("");
  let [predristrict, setPredristrict] = useState("");
  let [prethana, setPrethana] = useState("");
  let [prePostoffice, setPrepostoffice] = useState("");
  let [previllage, setPrevillage] = useState("");
  let [preroad, setPreroad] = useState("");
  let [prehouse, setPrehouse] = useState("");
  let [appontmentCatagory, setappontmentCatagory] = useState("");
  let [firstjoint, setFirstjoint] = useState("");
  let [firstdesignation, setFirstdesignation] = useState("");
  let [scale, setScale] = useState("");
  let [promotiondesignation, setPromotiondesignation] = useState("");
  let [promotionjoinindate, setPromotionjoinindate] = useState("");

  let [alldata, setAllData] = useState([]);
  let [upzilas, setUpzila] = useState([]);

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
    setEmail(e.target.value);
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
  let homedristrictHandler = (e) => {
    setHomeDristrict(e.target.value);
  };
  let perdivisionHandler = (e) => {
    setPerDivision(e.target.value);
  };
  let perdristrictHandler = (e) => {
    setPerdristrict(e.target.value);
  };
  let perthanaHandler = (e) => {
    setUpzila(e.target.value);
  };
  let perpostHandler = (e) => {
    setPerpostoffice(e.target.value);
  };
  let pervillageHandler = (e) => {
    setPervillage(e.target.value);
  };
  let perroadHandler = (e) => {
    setPerroad(e.target.value);
  };
  let perhouseHandler = (e) => {
    setPerhouse(e.target.value);
  };
  let predivisionHandler = (e) => {
    setPreDivision(e.target.value);
  };
  let predristrictHandler = (e) => {
    setPredristrict(e.target.value);
  };
  let prethanaHandler = (e) => {
    setPrethana(e.target.value);
  };
  let prepostHandler = (e) => {
    setPrepostoffice(e.target.value);
  };
  let previllageHandler = (e) => {
    setPrevillage(e.target.value);
  };
  let preroadHandler = (e) => {
    setPreroad(e.target.value);
  };
  let prehouseHandler = (e) => {
    setPrehouse(e.target.value);
  };
  let appcatagoryHandler = (e) => {
    setappontmentCatagory(e.target.value);
  };
  let firstJointdateHandler = (e) => {
    setFirstjoint(e.target.value);
  };
  let firstdesignationHandler = (e) => {
    setFirstdesignation(e.target.value);
  };
  let scaleHandler = (e) => {
    setScale(e.target.value);
  };
  let promotionHandler = (e) => {
    setPromotiondesignation(e.target.value);
  };
  let promotionjoindateHandler = (e) => {
    setPromotionjoinindate(e.target.value);
  };

  let submitButton = () => {
    const db = getDatabase();
    set(push(ref(db, "personell/")), {
      name: name,
      designation: designation,
      grade: grade,
      section: section,
      mobile: mobile,
      email: email,
      dateofbirth: dateofbirth,
      gender: gender,
      merital: merital,
      religion: religion,
      homedistrict: homedistrict,
      perdivision: perdivision,
      perdristrict: perdristrict,
      perthana: perthana,
      perPostoffice: perPostoffice,
      pervillage: pervillage,
      perroad: perroad,
      perhouse: perhouse,
      predivision: predivision,
      predristrict: predristrict,
      prethana: prethana,
      prePostoffice: prePostoffice,
      previllage: previllage,
      preroad: preroad,
      prehouse: prehouse,
      appontmentCatagory: appontmentCatagory,
      firstjoint: firstjoint,
      firstdesignation: firstdesignation,
      scale: scale,
      promotiondesignation: promotiondesignation,
      promotionjoinindate: promotionjoinindate,
    }).then(() => {
      setName("");
      setDesignation("");
      setGrade("");
      setSection("");
      setMobile("");
      setEmail("");
      setDateofbirth("");
      setGender("");
      setmerital("");
      setReligion("");
      setHomeDristrict("");
      setPerDivision("");
      setPerdristrict("");
      setPerthana("");
      setPerpostoffice("");
      setPervillage("");
      setPerroad("");
      setPerhouse("");
      setPreDivision("");
      setPredristrict("");
      setPrethana("");
      setPrepostoffice("");
      setPrevillage("");
      setPreroad("");
      setPrehouse("");
      setappontmentCatagory("");
      setFirstjoint("");
      setFirstdesignation("");
      setScale("");
      setPromotiondesignation("");
      setPromotionjoinindate("");
      alert("Successfully Submitted your Data");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const MefwdRef = ref(db, "personell/");
    onValue(MefwdRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);
  useEffect(() => {
    setUpzila(upazilas);
  }, []);

  function divisionsList() {
    // get value from division lists
    var diviList = document.getElementById("divisions").value;

    // set barishal division districts
    if (diviList == "Barishal") {
      var disctList =
        '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
    }
    // set Chattogram division districts
    else if (diviList == "Chattogram") {
      var disctList =
        '<option disabled selected>Select Division</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option>';
    }
    // set Dhaka division districts
    else if (diviList == "Dhaka") {
      var disctList =
        '<option disabled selected>Select Division</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
    }
    //  set/send districts name to District lists from division
    document.getElementById("distr").innerHTML = disctList;
  }

  // Thana Section select
  function thanaList() {
    var DisList = document.getElementById("distr").value;
    if (DisList == "Barguna") {
      var thanaList =
        '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
    }
    document.getElementById("polic_sta").innerHTML = thanaList;
  }

  return (
    <>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-10 px-5 ">
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
                    onChange={nameHandler}
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">পদবি :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={designationHandler}
                  >
                    <option>নির্বাচন করুন</option>

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
                <div>
                  <level className="text-yellow-200 block">গ্রেড :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={gradeHandler}
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
                    শাখা/অধিশাখা/অনুবিভাগ :
                  </level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                    onChange={sectionHandler}
                  >
                    <option>নির্বাচন করুন</option>
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
                    onChange={mobileHandler}
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">ই-মেইল :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="ই-মেইল"
                    type="email"
                    name="name"
                    onChange={emailHandler}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-around gap-40">
                <div className="py-3">
                  <level className="text-yellow-200 block">জন্মতারিখ :</level>
                  <input
                    className=" py-2 px-4 rounded-md border outline-1 hover:outline-indigo-600 "
                    type="date"
                    name="name"
                    onChange={birthHandler}
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">জেন্ডার :</level>
                  <select
                    className="rounded-full  border-none hover:border-indigo-300 py-[4px] px-2"
                    id="gender"
                    name="gender"
                    onChange={gengerHandler}
                  >
                    <option value="male">নির্বাচন করুন</option>
                    <option value="male">পুরুষ</option>
                    <option value="Female">মহিলা</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">বৈবাহিক অবস্থা :</level>
                  <select
                    className="rounded-full ml-3 border-none hover:border-indigo-300  py-[4px] px-2"
                    id="mariul status"
                    name="mariul status"
                    onChange={meritalHandler}
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
                    onChange={religionHandler}
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
                    onChange={homedristrictHandler}
                  >
                    <option value="জেলা">নির্বাচন করুন</option>
                    <option value="বাগেরহাট">বাগেরহাট</option>
                    <option value="বান্দরবান">বান্দরবান</option>
                    <option value="বরগুনা">বরগুনা</option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="ভোলা">ভোলা</option>
                    <option value="বগুড়া">বগুড়া</option>
                    <option value="ব্রাহ্মণবাড়িয়া">ব্রাহ্মণবাড়িয়া</option>
                    <option value="চাঁদপুর">চাঁদপুর</option>
                    <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                    <option value="চুয়াডাঙ্গা">চুয়াডাঙ্গা</option>
                    <option value="কুমিল্লা">কুমিল্লা</option>
                    <option value="কক্সবাজার">কক্সবাজারr</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="দিনাজপুর">দিনাজপুর</option>
                    <option value="ফরিদপুর">ফরিদপুর</option>
                    <option value="ফেনী">ফেনী</option>
                    <option value="গাইবান্ধা">গাইবান্ধা</option>
                    <option value="গাজীপুর">গাজীপুর</option>
                    <option value="গোপালগঞ্জ">গোপালগঞ্জ</option>
                    <option value="হবিগঞ্জ">হবিগঞ্জ</option>
                    <option value="জয়পুরহাট">জয়পুরহাট</option>
                    <option value="জামালপুর">জামালপুর</option>
                    <option value="যশোর">যশোর</option>
                    <option value="ঝালকাঠী">ঝালকাঠী</option>
                    <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                    <option value="খাগড়াছড়ি">খাগড়াছড়ি</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                    <option value="কুড়িগ্রাম">কুড়িগ্রাম</option>
                    <option value="কুষ্টিয়া">কুষ্টিয়া</option>
                    <option value="লক্ষীপুর">লক্ষীপুর</option>
                    <option value="লালমনিরহাট">লালমনিরহাট</option>
                    <option value="মাদারীপুর">মাদারীপুর</option>
                    <option value="মাগুড়া">মাগুড়া</option>
                    <option value="মানিকগঞ্জ">মানিকগঞ্জ</option>
                    <option value="মৌলভীবাজার">মৌলভীবাজার</option>
                    <option value="মেহেরপুর">মেহেরপুর</option>
                    <option value="মুন্সিগঞ্জ">মুন্সিগঞ্জ</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                    <option value="নওগাঁ">নওগাঁ</option>
                    <option value="নড়াইল">নড়াইল</option>
                    <option value="নারায়নগঞ্জ">নারায়নগঞ্জ</option>
                    <option value="নরসিংদী">নরসিংদী</option>
                    <option value="নাটোর">নাটোর</option>
                    <option value="নবাবগঞ্জ">নবাবগঞ্জ</option>
                    <option value="নেত্রকোনা">নেত্রকোনা</option>
                    <option value="নীলফামারী">নীলফামারী</option>
                    <option value="নোয়াখালী">নোয়াখালী</option>
                    <option value="পাবনা">পাবনা</option>
                    <option value="পঞ্চগড়">পঞ্চগড়</option>
                    <option value="পটুয়াখালী">পটুয়াখালী</option>
                    <option value="পিরোজপুর">পিরোজপুর</option>
                    <option value="রাজবাড়ী">রাজবাড়ী</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="রাঙ্গামাটি">রাঙ্গামাটি</option>
                    <option value="রংপুর">রংপুর</option>
                    <option value="সাতক্ষিরা">সাতক্ষিরা</option>
                    <option value="শরিয়তপুর">শরিয়তপুর</option>
                    <option value="শেরপুর">শেরপুর</option>
                    <option value="সিরাজগঞ্জ">সিরাজগঞ্জ</option>
                    <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="টাংগাইল">টাংগাইল</option>
                    <option value="ঠাকুরগাঁ">ঠাকুরগাঁ</option>
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
                    onChange={perdivisionHandler}
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="রংপুর">রংপুর</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">জেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="dist"
                    name="dist"
                    onChange={perdristrictHandler}
                  >
                    <option value="বাগেরহাট">বাগেরহাট</option>
                    <option value="বান্দরবান">বান্দরবান</option>
                    <option value="বরগুনা">বরগুনা</option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="ভোলা">ভোলা</option>
                    <option value="বগুড়া">বগুড়া</option>
                    <option value="ব্রাহ্মণবাড়িয়া">ব্রাহ্মণবাড়িয়া</option>
                    <option value="চাঁদপুর">চাঁদপুর</option>
                    <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                    <option value="চুয়াডাঙ্গা">চুয়াডাঙ্গা</option>
                    <option value="কুমিল্লা">কুমিল্লা</option>
                    <option value="কক্সবাজার">কক্সবাজারr</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="দিনাজপুর">দিনাজপুর</option>
                    <option value="ফরিদপুর">ফরিদপুর</option>
                    <option value="ফেনী">ফেনী</option>
                    <option value="গাইবান্ধা">গাইবান্ধা</option>
                    <option value="গাজীপুর">গাজীপুর</option>
                    <option value="গোপালগঞ্জ">গোপালগঞ্জ</option>
                    <option value="হবিগঞ্জ">হবিগঞ্জ</option>
                    <option value="জয়পুরহাট">জয়পুরহাট</option>
                    <option value="জামালপুর">জামালপুর</option>
                    <option value="যশোর">যশোর</option>
                    <option value="ঝালকাঠী">ঝালকাঠী</option>
                    <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                    <option value="খাগড়াছড়ি">খাগড়াছড়ি</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                    <option value="কুড়িগ্রাম">কুড়িগ্রাম</option>
                    <option value="কুষ্টিয়া">কুষ্টিয়া</option>
                    <option value="লক্ষীপুর">লক্ষীপুর</option>
                    <option value="লালমনিরহাট">লালমনিরহাট</option>
                    <option value="মাদারীপুর">মাদারীপুর</option>
                    <option value="মাগুড়া">মাগুড়া</option>
                    <option value="মানিকগঞ্জ">মানিকগঞ্জ</option>
                    <option value="মৌলভীবাজার">মৌলভীবাজার</option>
                    <option value="মেহেরপুর">মেহেরপুর</option>
                    <option value="মুন্সিগঞ্জ">মুন্সিগঞ্জ</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                    <option value="নওগাঁ">নওগাঁ</option>
                    <option value="নড়াইল">নড়াইল</option>
                    <option value="নারায়নগঞ্জ">নারায়নগঞ্জ</option>
                    <option value="নরসিংদী">নরসিংদী</option>
                    <option value="নাটোর">নাটোর</option>
                    <option value="নবাবগঞ্জ">নবাবগঞ্জ</option>
                    <option value="নেত্রকোনা">নেত্রকোনা</option>
                    <option value="নীলফামারী">নীলফামারী</option>
                    <option value="নোয়াখালী">নোয়াখালী</option>
                    <option value="পাবনা">পাবনা</option>
                    <option value="পঞ্চগড়">পঞ্চগড়</option>
                    <option value="পটুয়াখালী">পটুয়াখালী</option>
                    <option value="পিরোজপুর">পিরোজপুর</option>
                    <option value="রাজবাড়ী">রাজবাড়ী</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="রাঙ্গামাটি">রাঙ্গামাটি</option>
                    <option value="রংপুর">রংপুর</option>
                    <option value="সাতক্ষিরা">সাতক্ষিরা</option>
                    <option value="শরিয়তপুর">শরিয়তপুর</option>
                    <option value="শেরপুর">শেরপুর</option>
                    <option value="সিরাজগঞ্জ">সিরাজগঞ্জ</option>
                    <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="টাংগাইল">টাংগাইল</option>
                    <option value="ঠাকুরগাঁ">ঠাকুরগাঁ</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">উপজেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="upzila"
                    name="upzila"
                    onChange={perthanaHandler}
                  >
                    {upzilas.map((item) => {
                      return <option>{item.bn_name}</option>;
                    })}
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
                  onChange={perpostHandler}
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
                  onChange={pervillageHandler}
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">রাস্তা নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="রাস্তা নং"
                  type="text"
                  name="name"
                  onChange={perroadHandler}
                ></input>
              </div>
              <div className="py-3 ">
                <level className="text-yellow-200">বাড়ি নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="বাড়ি"
                  type="text"
                  name="name"
                  onChange={perhouseHandler}
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
                    onChange={predivisionHandler}
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="রংপুর">রংপুর</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200">জেলা :</level>
                  <select
                    className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                    id="dist"
                    name="dist"
                    onChange={predristrictHandler}
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
                    onChange={prethanaHandler}
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
                  onChange={prepostHandler}
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
                  onChange={previllageHandler}
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">রাস্তা নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="রাস্তা নং"
                  type="text"
                  name="name"
                  onChange={preroadHandler}
                ></input>
              </div>
              <div className="py-3 ">
                <level className="text-yellow-200">বাড়ি নং :</level>
                <input
                  className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
                  placeholder="বাড়ি"
                  type="text"
                  name="name"
                  onChange={prehouseHandler}
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
                  onChange={appcatagoryHandler}
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
                  onChange={firstJointdateHandler}
                ></input>
              </div>
              <div className="py-3">
                <level className="text-yellow-200">পদবি :</level>
                <select
                  className="rounded-lg ml-44  border-none hover:border-indigo-300 py-2 px-5"
                  id="designation"
                  name="designation"
                  onChange={firstdesignationHandler}
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
                  onChange={scaleHandler}
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
                  onChange={promotionHandler}
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
                <level className="text-yellow-200">পদোন্নতির তারিখ:</level>
                <input
                  className="py-2 px-10 rounded-md ml-20 border outline-1 hover:outline-indigo-600 "
                  placeholder="Enter Your Name"
                  type="date"
                  name="name"
                  onChange={promotionjoindateHandler}
                ></input>
              </div>
            </div>
            <button
              onClick={submitButton}
              className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-purple-900 hover:bg-indigo-600 hover:text-yellow-300 flex mx-auto justify-center"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonelInfo;
