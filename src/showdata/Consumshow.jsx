import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Consumshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const consumptionshowRef = ref(db, "StoreOut/");
    onValue(consumptionshowRef, (snapshot) => {
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
      name: "শাখা",
      selector: (row) => row.sectionName,
      sortable: true,
    },
    {
      name: "বিতরনের তারিখ",
      selector: (row) => row.delevarydate,
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
      <div className="w-[1320px] mx-auto ">
        <div className=" text-end m-2 relative">
          <input
            onChange={handleFilter}
            className="py-1 px-5 rounded-lg border border-orange-400 "
            type="text"
          ></input>
          <FaSearch className="absolute text-purple-500 text-[13px] translate-x-[1285px] translate-y-[-22px]" />
        </div>
        <DataTable
          className="container"
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

export default Consumshow;
