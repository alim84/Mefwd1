import { useEffect, useState } from "react";
import "../pages/Dashboard.css";
import "../pages/Dashboarstyle.css";

import { getDatabase, ref, onValue } from "firebase/database";

const Dashboard = () => {
  const db = getDatabase();

  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const studentRef = ref(db, "Medical/");
    onValue(studentRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
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
            {alldata.map((item) => {
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

            <div className="box box3">
              <div className="text">
                <h2 className="topic-heading">শৃংখলা</h2>
                <h2 className="topic">Article Views</h2>
                <h2 className="topic">Article Views</h2>
                <h2 className="topic">Article Views</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                alt="comments"
              />
            </div>
            <div className="box box4">
              <div className="text">
                <h2 className="topic-heading">প্রতিষ্ঠান</h2>
                <h2 className="topic">Article Views</h2>
                <h2 className="topic">Article Views</h2>
                <h2 className="topic">Article Views</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
                alt="published"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="report-container">
              <div className="report-header">
                <h1 className="recent-Articles">
                  সরকারী মেডিকেল কলেজ শিক্ষার্থী
                </h1>
                <button className="view">
                  <a href={`/studentshow`}>All Data</a>
                </button>
              </div>
              <div className="report-body">
                <div className="report-topic-heading">
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
