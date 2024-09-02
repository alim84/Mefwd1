import { useEffect, useRef, useState } from "react";
import "../pages/Dashboard.css";
import "../pages/Dashboarstyle.css";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineFamilyRestroom, MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { SiMicrosoftacademic, SiConstruct3 } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { getDatabase, ref, onValue } from "firebase/database";

const Dashboard = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openpfl, setOpenPflw] = useState(false);
  const [openDev, setOpenDev] = useState(false);
  const [openMe, setOpenMe] = useState(false);
  const SubMenusAdmin = [
    "Admin-1",
    "Admin-2",
    "Admin-3",
    "Per-1",
    "Per-2",
    "Per-3",
  ];
  const SubMenusPfw = ["Displine", "Population", "Law"];
  const SubMenusDev = ["Constraction", "Pocuremnet", "Planning"];
  const SubMenusMe = ["ME-1", "ME-2", "Palicy"];
  const menuRef = useRef();
  const imgRef = useRef();
  const menuPflRef = useRef();
  const imgPflRef = useRef();
  const menuRefDev = useRef();
  const imgRefDev = useRef();
  const menuRefMe = useRef();
  const imgRefMe = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target !== menuPflRef.current && e.target !== imgPflRef.current) {
      setOpenPflw(false);
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target !== menuRefDev.current && e.target !== imgRefDev.current) {
      setOpenDev(false);
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target !== menuRefMe.current && e.target !== imgRefMe.current) {
      setOpenMe(false);
    }
  });

  useEffect(() => {
    const db = getDatabase();
    const studentRef = ref(db, "institutemanpower/");
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
    const studentRef = ref(db, "Medical/");
    onValue(studentRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, 
             initial-scale=1.0"
      />
      <title>MEFWD</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="responsive.css" />
      {/* for header part */}
      <header>
        <div className="logo">MEFWDHRM</div>

        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
              className="icn srchicn"
              alt="search-icon"
            />
          </div>
        </div>
        <div className="message">
          <div className="circle" />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
            className="icn"
            alt=""
          />
          <div className="dp">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header>
      <div className="main-container ">
        <div className="navcontainer  ">
          <nav className="nav  ">
            <div className="nav-upper-options ">
              <div className="nav-option option1 ">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="nav-img"
                  alt="dashboard"
                />
                <h3> Wing Function</h3>
              </div>
              <div className="option2 nav-option relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <RiAdminFill className="flex absolute top-[20px] left-[35px]" />
                </div>
                <div className="relative">
                  <button
                    ref={imgRef}
                    onClick={() => setOpen(!open)}
                    className="block focus:overflow-visible cursor-visible drop relative hover:  "
                  >
                    Admin
                  </button>
                </div>
              </div>

              <div className="nav-option option3 relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <MdOutlineFamilyRestroom className="flex absolute top-[20px] left-[35px]" />
                </div>
                <div className="relative">
                  <button
                    ref={imgPflRef}
                    onClick={() => setOpenPflw(!openpfl)}
                    className="block focus:overflow-visible cursor-visible drop relative "
                  >
                    <a href=" Desipline">PFW&LW</a>
                  </button>
                </div>
              </div>
              <div className="nav-option option4 relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <SiConstruct3 className="flex absolute top-[20px] left-[35px]" />
                </div>
                <div className="relative">
                  <button
                    ref={imgRefDev}
                    onClick={() => setOpenDev(!openDev)}
                    className="block focus:overflow-visible cursor-visible drop relative "
                  >
                    Development
                  </button>
                </div>
              </div>
              <div className="nav-option option5 relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <SiMicrosoftacademic className="flex absolute top-[20px] left-[35px]" />
                </div>
                <div className="relative">
                  <button
                    ref={imgRefMe}
                    onClick={() => setOpenMe(!openMe)}
                    className="ml-[-12px] block focus:overflow-visible cursor-visible drop relative "
                  >
                    Medical Educaion
                  </button>
                </div>
              </div>
              <div className="nav-option option6 relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <MdAttachMoney className="flex absolute top-[20px] left-[35px]" />
                </div>
                <h3> Budget</h3>
              </div>
              <div className="nav-option option6 relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <FaMoneyCheck className="flex absolute top-[20px] left-[35px]" />
                </div>
                <h3> FM&AW</h3>
              </div>
              <div className="nav-option logout relative">
                <div className="w-[50px] h-[50px] bg-green-200 rounded-full hover:bg-purple-800 hover:text-white">
                  <IoIosLogOut className="flex absolute top-[20px] left-[35px]" />
                </div>
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>

        {open && (
          <div
            ref={menuRef}
            className="mt-[120px] ml-60 w-40 py-2 text-center rounded-lg shadow-xl content-none absolute"
          >
            {SubMenusAdmin.map((menu) => (
              <a
                onClick={() => setOpen(false)}
                key={menu}
                className="block px-2 py-2 text-purple-800  font-semibold  hover:bg-blue-200 hover:rounded-l-full  hover:text-purple-800"
                href="PersonelInfo"
              >
                {menu}
              </a>
            ))}
          </div>
        )}
        {openpfl && (
          <div
            ref={menuPflRef}
            className="mt-[200px] ml-60 w-40 py-2 text-center rounded-lg shadow-xl content-none absolute"
          >
            {SubMenusPfw.map((menuPfl) => (
              <a
                onClick={() => setOpenPflw(false)}
                key={menuPfl}
                className="block px-2 py-2 text-purple-800  font-semibold  hover:bg-blue-200 hover:rounded-l-full  hover:text-purple-800"
                href="PersonelInfo"
              >
                {menuPfl}
              </a>
            ))}
          </div>
        )}
        {openDev && (
          <div
            ref={menuPflRef}
            className="mt-[300px] ml-60 w-40 py-2 text-center rounded-lg shadow-xl content-none absolute"
          >
            {SubMenusDev.map((menuDev) => (
              <a
                onClick={() => setOpenDev(false)}
                key={menuDev}
                className="block px-2 py-2 text-purple-800  font-semibold  hover:bg-blue-200 hover:rounded-l-full  hover:text-purple-800"
                href="PersonelInfo"
              >
                {menuDev}
              </a>
            ))}
          </div>
        )}
        {openMe && (
          <div
            ref={menuRefMe}
            className="mt-[380px] ml-60 w-40 py-2 text-center rounded-lg shadow-xl content-none absolute"
          >
            {SubMenusMe.map((menuMe) => (
              <a
                onClick={() => setOpenDev(false)}
                key={menuMe}
                className="block px-2 py-2 text-purple-800  font-semibold  hover:bg-blue-200 hover:rounded-l-full  hover:text-purple-800"
                href="PersonelInfo"
              >
                {menuMe}
              </a>
            ))}
          </div>
        )}
        <div className="main">
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
          <div className="box-container">
            {alldata.map((item) => {
              return (
                <div className="box box1">
                  <div className="text">
                    <h2 className="topic-heading">ME </h2>
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

            <div className="box box2">
              <div className="text">
                <h2 className="topic-heading">ME </h2>
                <h2 className="topic">Article Views</h2>
                <h2 className="topic">Article Views</h2>
                <h2 className="topic">Article Views</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                alt="likes"
              />
            </div>
            <div className="box box3">
              <div className="text">
                <h2 className="topic-heading">Development</h2>
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
                <h2 className="topic-heading">FMA</h2>
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
                <h1 className="recent-Articles">ManPower</h1>
                <button className="view">
                  <a href={`/manpowershow`}>All Data</a>
                </button>
              </div>
              <div className="report-body">
                <div className="report-topic-heading py-3 text-center bg-yellow-500 rounded-lg text-sm">
                  <h3 className="t-op w-[150px]">প্রতিষ্ঠানের নাম</h3>
                  <h3 className="t-op">অনুমোদিত পদ সংখ্যা </h3>
                  <h3 className="t-op">কর্মরত জনবল</h3>
                  <h3 className="t-op">শুন্য পদের সংখ্যা</h3>
                </div>

                {alldata.map((item) => {
                  return (
                    <div className="items">
                      <div className="item1">
                        <table>
                          <tr className="even:bg-yellow-200">
                            <td className="w-[150px] ">{item.instituteName}</td>
                            <td className="w-[150px] text-center">
                              {item.approvalPost}
                            </td>
                            <td className="w-[150px] text-center">
                              {item.workingMan}
                            </td>
                            <td className="w-[150px] text-center">
                              {item.vacantPost}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="report-container">
              <div className="report-header">
                <h1 className="recent-Articles">ManPower</h1>
                <button className="view">View</button>
              </div>
              <div className="report-body">
                <div className="report-topic-heading">
                  <h3 className="t-op">Class-1</h3>
                  <h3 className="t-op">Class-2</h3>
                  <h3 className="t-op">Class-3</h3>
                  <h3 className="t-op">Class-4</h3>
                </div>
                <div className="items">
                  <div className="item1">
                    <h3 className="t-op-nextlvl">20</h3>
                    <h3 className="t-op-nextlvl">35</h3>
                    <h3 className="t-op-nextlvl">75</h3>
                    <h3 className="t-op-nextlvl">115</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
