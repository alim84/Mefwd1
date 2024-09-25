import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Studentshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const studentRef = ref(db, "student/");
    onValue(studentRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  let handleFilter = (e) => {
    let data = alldata.filter((row) => {
      return row.productName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setAllData(alldata);
  };

  const columns = [
    {
      name: "প্রতিষ্ঠানের নাম",
      selector: (row) => row.instituteName,
      sortable: true,
    },
    {
      name: "কোর্সের নাম",
      selector: (row) => row.course,
      sortable: true,
    },

    {
      name: "সেশন",
      selector: (row) => row.session,
      sortable: true,
    },
    {
      name: "আসন সংখ্য",
      selector: (row) => row.seat,
      sortable: true,
    },
    {
      name: "মোট ভর্তিকৃত শিক্ষার্থীর সংখ্যা",
      selector: (row) => row.totaladmissionstudent,
      sortable: true,
    },
    {
      name: "শুন্য আসন",
      selector: (row) => row.vacantSeat,
      sortable: true,
    },
    {
      name: "ছাত্র সংখ্যা",
      selector: (row) => row.maleStudent,
      sortable: true,
    },
    {
      name: "ছাত্রী সংখ্যা",
      selector: (row) => row.femalStudent,
      sortable: true,
    },
    {
      name: "প্রতিষ্ঠানের অবস্থান",
      selector: (row) => row.district,
      sortable: true,
    },

    {
      name: "আপডেট",
      selector: (row) => (
        <button onClick={() => handleDelete(item.key)} className="">
          <IoPencilOutline className="text-white bg-purple-400 text-[16px] text-center  rounded-full" />{" "}
        </button>
      ),
    },
    {
      name: "ডিলেট",
      selector: (row) => (
        <button className="">
          <TiDeleteOutline className="text-white bg-red-500 text-[16px] rounded-full" />{" "}
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto rounded-lg ">
        <div className=" text-end m-2 relative">
          <input
            onChange={handleFilter}
            className="py-1 px-5 rounded-lg border border-orange-400 "
            type="text"
          ></input>
          <FaSearch className="absolute text-purple-500 text-[13px] translate-x-[1285px] translate-y-[-22px]" />
        </div>
        <DataTable
          columns={columns}
          data={alldata}
          fixedHeader
          pagination
          selectableRows
        ></DataTable>
      </div>
    </>
  );
};

export default Studentshow;
