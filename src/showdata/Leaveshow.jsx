import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Leaveshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const leaveshowRef = ref(db, "Leave/");
    onValue(leaveshowRef, (snapshot) => {
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
      name: " কর্মকর্তা/কর্মচারী নাম",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "পদবি",
      selector: (row) => row.designation,
      sortable: true,
    },

    {
      name: "শাখা",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "ছুটির ধরন",
      selector: (row) => row.typeofleave,
      sortable: true,
    },
    {
      name: "হতে",
      selector: (row) => row.leavefrom,
      sortable: true,
    },
    {
      name: "পর্যন্ত",
      selector: (row) => row.leaveto,
      sortable: true,
    },
    {
      name: "চাহিত ছুটি",
      selector: (row) => row.totaldaysrequired,
      sortable: true,
    },
    {
      name: "ভোগকৃত ছুটি",
      selector: (row) => row.enjoytotalleave,
      sortable: true,
    },
    {
      name: "মোট ছুটি",
      selector: (row) => row.remainingleave,
      sortable: true,
    },
    {
      name: "অবশিষ্ট",
      selector: (row) => row.totaldaysdue,
      sortable: true,
    },

    {
      name: "কার্যক্রম",
      selector: (row) => (
        <button className="flex gap-4">
          {" "}
          <IoPencilOutline className="text-white bg-purple-400 text-[16px]  rounded-full" />{" "}
          <a href="">
            {" "}
            <TiDeleteOutline className="text-white bg-red-500 text-[16px] rounded-full" />{" "}
          </a>{" "}
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

export default Leaveshow;
