
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import DataTable from "react-data-table-component";
import Submenu from "../pages/Submenu";

const PersonnelShows = () => {
    const db = getDatabase();
    let [alldata, setAllData] = useState([]);
  
    useEffect(() => {
      const db = getDatabase();
      const personnelRef = ref(db, "personell/");
      onValue(personnelRef, (snapshot) => {
        let array = [];
        snapshot.forEach((items) => {
          array.push(items.val());
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
      name: "গ্রেড",
      selector: (row) => row.grade,
      sortable: true,
    },
    {
      name: "শাখা",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "মোবইল",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "ই-মেইল",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "জন্মতারিখ",
      selector: (row) => row.dateofbirth,
      sortable: true,
    },
    {
      name: "জেন্ডার",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "বৈবাহিক অবস্থা",
      selector: (row) => row.merital,
      sortable: true,
    },
    {
      name: "ধর্ম",
      selector: (row) => row.religion,
      sortable: true,
    },
    {
      name: "নিজ জেলা",
      selector: (row) => row.homedistrict,
      sortable: true,
    },
    {
      name: "বিভাগ",
      selector: (row) => row.perdivision,
      sortable: true,
    },
    {
      name: "জেলা",
      selector: (row) => row.perdristrict,
      sortable: true,
    },
    {
      name: "উপজেলা",
      selector: (row) => row.perthana,
      sortable: true,
    },
    {
      name: "পোস্ট অফিস",
      selector: (row) => row.perPostoffice,
      sortable: true,
    },
    {
      name: "গ্রাম",
      selector: (row) => row.pervillage,
      sortable: true,
    },
    {
      name: "রাস্তা",
      selector: (row) => row.perroad,
      sortable: true,
    },
    {
      name: "বাড়ি",
      selector: (row) => row.perhouse,
      sortable: true,
    },
    {
      name: "স্থা বিভাগ",
      selector: (row) => row.predivision,
      sortable: true,
    },
    {
      name: "জেলা",
      selector: (row) => row.predristrict,
      sortable: true,
    },

    {
      name: "উপজেলা",
      selector: (row) => row.prethana,
      sortable: true,
    },
    {
      name: "পোস্ট অফিস",
      selector: (row) => row.prePostoffice,
      sortable: true,
    },
    {
      name: "গ্রাম",
      selector: (row) => row.previllage,
      sortable: true,
    },
    {
      name: "রাস্তা",
      selector: (row) => row.preroad,
      sortable: true,
    },
    {
      name: "বাড়ি",
      selector: (row) => row.prehouse,
      sortable: true,
    },
 
    {
      name: "নিয়োগের ধরন",
      selector: (row) => row.appontmentCatagory,
      sortable: true,
    },
 
    {
      name: "যোগদানের তারিখ",
      selector: (row) => row.firstjoint,
      sortable: true,
    },
 
    {
      name: "যোগদানের পদবি",
      selector: (row) => row.firstdesignation,
      sortable: true,
    },
 
    {
      name: "গ্রেড",
      selector: (row) => row.scale,
      sortable: true,
    },
 
    {
      name: "পদোন্নতি পদবি",
      selector: (row) => row.promotiondesignation,
      sortable: true,
    },
 
    {
      name: "পদোন্নতির তারিখ",
      selector: (row) => row.promotionjoinindate,
      sortable: true,
    },
 


  ];

    return (
        <>
            <div className="container mx-auto rounded-lg">
                <Submenu/>
      <div className=" text-end mt-2">
        <input
          onChange={handleFilter}
          className="py-2 px-3 rounded-lg border border-orange-400"
          type="text"
        ></input>
      </div>
      <DataTable
        columns={columns}
        data={alldata}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
        </>
    );
};

export default PersonnelShows;