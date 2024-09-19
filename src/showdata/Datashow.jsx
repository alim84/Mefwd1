import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import DataTable from "react-data-table-component";

const Datashow = () => {
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

  function subtotal(alldata) {
    return alldata.map(({ quantity }) => quantity).reduce((sum, i) => sum + i, 0);
  }

  const invoiceSubtotal = subtotal(alldata);

  const columns = [
   
    {
      name: "মালামালের নাম",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "দপ্তর/অধিশাখা/শাখার নাম",
      selector: (row) => row.sectionName,
      sortable: true,
    },
    {
      name: "বিতরনের তারিখ",
      selector: (row) => row.delevarydate,
      sortable: true,
    },
    {
      name: "পরিমান",
      selector: (row) => row.quantity,
      sortable: true,
    },

  ];

  return (
    <div className="container mx-auto rounded-lg">
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
  );
};

export default Datashow;
