import { useEffect, useState } from "react";
import "../pages/Dashboard.css";
import "../pages/Dashboarstyle.css";
import { getDatabase, ref, onValue } from "firebase/database";
import { FaHandHoldingMedical } from "react-icons/fa";

const Dashboard = () => {
  const db = getDatabase();

  let [alldata, setAllData] = useState([]);
  let [medata, setMedata] = useState([]);
  let [disdata, setDisData] = useState([]);
  let [manpower, setManpower] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const studentRef = ref(db, "Medical/");
    onValue(studentRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setMedata(array);
    });
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const disRef = ref(db, "disipline/");
    onValue(disRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setDisData(array);
    });
  }, []);
  useEffect(() => {
    const db = getDatabase();
    const manpowerRef = ref(db, "institutemanpower/");
    onValue(manpowerRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setManpower(array);
    });
  }, []);

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
    <div >
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="responsive.css" />

      <div className="main-container ">
        <div className="container mx-auto">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn"
                alt="search-button"
              />
            </div>
          </div>
          <div className="box-container flex justify-between items-center">
            {medata.map((item) => {
              return (
                <div className="box box1">
                  <div className="text">
                    <h2 className="topic-heading">চিকিৎসা শিক্ষা </h2>
                    <h2 className="topic">
                      প্রতিষ্ঠানের নাম : {item.instituteName}
                    </h2>
                    <h2 className="topic">
                      মন্ত্রণালয়ের অনুমোদন : {item.ministryaprove}
                    </h2>
                    <h2 className="topic">আসন সংখ্যা : {item.seat}</h2>

                    <h2 className="topic">
                      মোট শিক্ষার্থী : {item.totalstudent}
                    </h2>
                  </div>
                  <FaHandHoldingMedical className="text-white  bg-purple-950 rounded-md w-[40px] h-[40px]" />
                </div>
              );
            })}

            {disdata.map((item) => {
              return (
                <div className="box box3">
                  <div className="text">
                    <h2 className="topic-heading">শৃংখলা</h2>
                    <h2 className="topic">
                      প্রতিষ্ঠানের নাম : {item.institute}
                    </h2>
                    <h2 className="topic">শাস্তির : {item.punishment} </h2>
                    <h2 className="topic">সন : {item.year}</h2>
                  </div>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                    alt="comments"
                  />
                </div>
              );
            })}
            {manpower.map((item) => {
              return (
                <div className="box box4">
                  <div className="text">
                    <h2 className="topic-heading">জনবল</h2>
                    <h2 className="topic">
                      প্রতিষ্ঠান : {item.instituteName}{" "}
                    </h2>
                    <h2 className="topic">পদ সংখ্যা : {item.approvalPost} </h2>
                    <h2 className="topic">কর্মরত {item.workingMan}</h2>
                    <h2 className="topic">শুন্য {item.vacantPost}</h2>
                  </div>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
                    alt="published"
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="report-container">
              <div className="report-header">
                <h1 className="recent-Articles text-[20px]">
                  সরকারী মেডিকেল কলেজ শিক্ষার্থী
                </h1>
                <button className="view">
                  <a href={`/studentshow`}>All Data</a>
                </button>
              </div>
              <div className="report-body bg-sky-100 rounded-lg font-semibold">
                <div className="report-topic-heading ">
                  <h3 className="t-op">প্রতিষ্ঠান</h3>
                  <h3 className="t-op">কোর্সের নাম</h3>
                  <h3 className="t-op">সেশন</h3>
                  <h3 className="t-op">আসন</h3>
                  <h3 className="t-op">ভর্তি</h3>
                  <h3 className="t-op">শুন্য</h3>
                </div>
              </div>
              {alldata.map((item) => {
                return (
                  <div className="items">
                    <div className="item1">
                      <table className="border-2">
                        <tr className="even:bg-yellow-200">
                          <td className="w-[150px]">{item.instituteName}</td>
                          <td className="w-[150px] text-center">
                            {item.course}
                          </td>
                          <td className="w-[150px] text-center">
                            {item.session}
                          </td>
                          <td className="w-[150px] text-center">{item.seat}</td>
                          <td className="w-[150px] text-center">
                            {item.totaladmissionstudent}
                          </td>
                          <td className="w-[150px] text-center">
                            {item.vacantSeat}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" flex  items-center">
              <div>
                <section>
                  <h2 className=" flex justify-between items-center gap-3 text-[13px] font-semibold">
                    মেডিকেল কলেজ শিক্ষার্থী তথ্য
                    <div>
                      <select
                        className="rounded-lg  border-none hover:border-indigo-300 py-1 px-3"
                        id="designation"
                        name="designation"
                      >
                        <option>নির্বাচন করুন</option>
                        <option>ঢাকা মেডিকেল কলেজ</option>
                        <option>সিরাজগঞ্জ সরকারী মেডিকেল কলেজ</option>
                      </select>
                    </div>
                  </h2>

                  <ul className="chart text-[13px]">
                    <li
                      className="sidebar rounded-r-full"
                      style={{ gridColumn: "span 9" }}
                    >
                      মোট শিক্ষার্থী:
                      <span>9</span>
                    </li>
                    <li
                      className=" sidebar rounded-r-full"
                      style={{ gridColumn: "span 11" }}
                    >
                      আসন সংখ্যা:
                      <span>11</span>
                    </li>
                    <li
                      className=" sidebar rounded-r-full"
                      style={{ gridColumn: "span 5" }}
                    >
                      ছাত্র:
                      <span>5</span>
                    </li>
                    <li
                      className=" sidebar rounded-r-full"
                      style={{ gridColumn: "span 11" }}
                    >
                      ছাত্রী:
                      <span>11</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20 pt-10">
            <div className="chart-container text-[10px]">
              <div className="year-stats">
                <div className="month-group">
                  <div className="bar h-100" />
                  <p className="month">শিক্ষার্থী</p>
                </div>
                <div className="month-group">
                  <div className="bar h-50" />
                  <p className="month">আসন</p>
                </div>
                <div className="month-group">
                  <div className="bar h-75" />
                  <p className="month">জনবল</p>
                </div>
                <div className="month-group">
                  <div className="bar h-25" />
                  <p className="month">কর্মরত</p>
                </div>
                <div className="month-group selected">
                  <div className="bar h-100" />
                  <p className="month">প্রতিষ্ঠান</p>
                </div>
                <div className="month-group">
                  <div className="bar h-50" />
                  <p className="month">মামলা</p>
                </div>
                <div className="month-group">
                  <div className="bar h-75" />
                  <p className="month">পদ</p>
                </div>
                <div className="month-group">
                  <div className="bar h-25" />
                  <p className="month">অনুমোদন</p>
                </div>
                <div className="month-group">
                  <div className="bar h-50" />
                  <p className="month">আইএইচটি</p>
                </div>
                <div className="month-group">
                  <div className="bar h-75" />
                  <p className="month">ম্যাটস</p>
                </div>
                <div className="month-group">
                  <div className="bar h-25" />
                  <p className="month">কলেজ</p>
                </div>
                <div className="month-group">
                  <div className="bar h-100" />
                  <p className="month">নাই</p>
                </div>
              </div>
              <div className="stats-info">
                <div className="graph-container">
                  <div className="percent">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path
                        className="circle"
                        strokeDasharray="100, 100"
                        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="85, 100"
                        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="60, 100"
                        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="30, 100"
                        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                  <p>মোট শিক্ষার্থী</p>
                </div>
                <div className="info">
                  <p>
                    নার্সিং তথ্য <br />
                    <span>বিএসসি নার্সিং : ৮০০০ </span>
                  </p>
                  <p>
                    ডিপ্লোমা নার্সিং <span>: ১১২০০০</span>
                  </p>
                  <p>
                    মিডওয়াইফ <span>: ৯০০</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
