import { useEffect, useState } from "react";
import "../pages/Dashboard.css";
import "../pages/Dashboarstyle.css";

import { getDatabase, ref, onValue } from "firebase/database";

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
    <div className="container">
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="responsive.css" />

      <div className="main-container ">
        <div className="main container">
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
          <div className="grid grid-cols-3 gap-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
