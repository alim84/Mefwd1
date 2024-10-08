import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Inventoryshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const inventoryshowRef = ref(db, "StoreIn/");
    onValue(inventoryshowRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push({ ...item.val(), key: item.key });
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
  const handleDelete = (row) => {
    remove(ref(db, "StoreIn/" + row.key))
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
      name: " মালামালের নাম",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "পরিমান",
      selector: (row) => row.quantity,
      sortable: true,
    },

    {
      name: "ক্যাশ মেমো/টেন্ডারের তথ্য",
      selector: (row) => row.cashmemo,
      sortable: true,
    },
    {
      name: "ক্রয়ের তারিখ",
      selector: (row) => row.purchasedate,
      sortable: true,
    },
    {
      name: "মালামালের ধরন",
      selector: (row) => row.productscatagory,
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

export default Inventoryshow;
