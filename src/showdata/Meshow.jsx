import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { IoPencilOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";

const Meshow = () => {
  const db = getDatabase();
  let [alldata, setAllData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const medicalRef = ref(db, "Medical/");
    onValue(medicalRef, (snapshot) => {
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
      name: "মন্ত্রণালয় কর্তৃক অনুমোদন",
      selector: (row) => row.ministryaprove,
      sortable: true,
    },

    {
      name: "মন্ত্রণালয় কর্তৃক একাডেমিক অনুমোদন",
      selector: (row) => row.academicaprove,
      sortable: true,
    },
    {
      name: "প্রতিষ্ঠানের ধরন",
      selector: (row) => row.institutecatagory,
      sortable: true,
    },
    {
      name: "বিভাগ",
      selector: (row) => row.division,
      sortable: true,
    },
    {
      name: "জেলা",
      selector: (row) => row.distric,
      sortable: true,
    },
    {
      name: "উপজেলা",
      selector: (row) => row.upzila,
      sortable: true,
    },
    {
      name: "বাড়িং নং/রাস্তা/মহল্লা",
      selector: (row) => row.house,
      sortable: true,
    },
    {
      name: "আসন সংখ্যা",
      selector: (row) => row.seat,
      sortable: true,
    },
    {
      name: "মোট শিক্ষার্থী",
      selector: (row) => row.totalstudent,
      sortable: true,
    },
    {
      name: "মোট ছাত্র",
      selector: (row) => row.totalmalestudent,
      sortable: true,
    },
    {
      name: "মোট ছাত্রী",
      selector: (row) => row.totalfemalestudent,
      sortable: true,
    },
    {
      name: "দরিদ্র শিক্ষার্থী সংখ্যা",
      selector: (row) => row.poorstudent,
      sortable: true,
    },
    {
      name: "শিক্ষাবর্ষ",
      selector: (row) => row.year,
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

export default Meshow;
