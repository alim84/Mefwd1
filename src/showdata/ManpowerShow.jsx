import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const ManpowerShow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const manpowershowRef = ref(db, "institutemanpower/");
    onValue(manpowershowRef, (snapshot) => {
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
      name: "পদবি",
      selector: (row) => row.designation,
      sortable: true,
    },

    {
      name: "গ্রেড",
      selector: (row) => row.grade,
      sortable: true,
    },
    {
      name: "অনুমোদিত পদ সংখ্যা",
      selector: (row) => row.approvalPost,
      sortable: true,
    },
    {
      name: "কর্মরত জনবল",
      selector: (row) => row.workingMan,
      sortable: true,
    },
    {
      name: "শুন্য পদের সংখ্যা",
      selector: (row) => row.vacantPost,
      sortable: true,
    },
    {
      name: "কর্মরত পুরুষ জনবল",
      selector: (row) => row.workingMale,
      sortable: true,
    },
    {
      name: "কর্মরত মহিলা জনবল",
      selector: (row) => row.workingFemale,
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

export default ManpowerShow;
