import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Leaveshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const leaveshowRef = ref(db, "Leave/");
    onValue(leaveshowRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push({ ...item.val(), key: item.key });
      });

      setAllData(array);
    });
  }, []);

  let handleFilter = (e) => {
    let data = alldata.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setAllData(data);
  };

  const handleDelete = (row) => {
    remove(ref(db, "Leave/" + row.key))
      .then(() => {
        setAllData((prevData) =>
          prevData.filter((item) => item.key !== row.key)
        );
        setFilteredData((prevData) =>
          prevData.filter((item) => item.key !== row.key)
        );
        alert("Data Deleted Successfully");
      })
      .catch((error) => {
        alert("Are You Sure Deleting Data");
      });
  };

  function enjoyleave(a, b) {
    return a + b;
  }
  let result = enjoyleave(20, 10);
  console.log(result);

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
      name: "আপডেট",
      selector: (row) => (
        <button className="">
          <IoPencilOutline className="text-white bg-purple-400 text-[16px] text-center  rounded-full" />{" "}
        </button>
      ),
    },
    {
      name: "ডিলেট",
      selector: (row) => (
        <button onClick={() => handleDelete(row)} className="bg-cyan-900">
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
            className="py-1 px-5 rounded-l-full border border-orange-400 "
            type="text"
          ></input>
          <FaSearch className="absolute text-[13px] translate-x-[1320px] text-orange-500 z-30 translate-y-[-22px]" />
          <button className="bg-blue-950 w-[60px] h-[35px] absolute translate-x-[-235px] rounded-l-full"></button>
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
