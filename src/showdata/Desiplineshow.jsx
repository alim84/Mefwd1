import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Desiplineshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const disshowRef = ref(db, "disipline/");
    onValue(disshowRef, (snapshot) => {
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
    setAllData(alldata);
  };

  const handleDelete = (row) => {
    remove(ref(db, "disipline/" + row.key))
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
  const columns = [
    {
      name: " কর্মকর্তার নাম",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "পদবি",
      selector: (row) => row.designation,
      sortable: true,
    },

    {
      name: "কোড",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "মামলার বিবরণ",
      selector: (row) => row.casedes,
      sortable: true,
    },
    {
      name: "কর্মস্থল",
      selector: (row) => row.institute,
      sortable: true,
    },
    {
      name: "মামলার ধরন",
      selector: (row) => row.casecatagory,
      sortable: true,
    },
    {
      name: "সন",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "শাস্তির ধরন",
      selector: (row) => row.punishment,
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
        <button onClick={() => handleDelete(row)} className="">
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

export default Desiplineshow;
