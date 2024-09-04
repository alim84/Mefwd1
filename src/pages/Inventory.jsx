import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const Inventory = () => {
  let [productName, setProductName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [cashmemo, setCashmemo] = useState("");
  let [purchasedate, setpurchasedate] = useState("");
  let [productscatagory, setProductscatagory] = useState("");
  let [alldata, setAllData] = useState([]);

  let productNameHandler = (e) => {
    setProductName(e.target.value);
  };
  let quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  let cashmemoHandler = (e) => {
    setCashmemo(e.target.value);
  };
  let purchasedateHandler = (e) => {
    setpurchasedate(e.target.value);
  };
  let productsCatagoryHandler = (e) => {
    setProductscatagory(e.target.value);
  };

  let submitBtn = () => {
    const db = getDatabase();
    set(push(ref(db, "StoreIn/")), {
      productName: productName,
      quantity: quantity,
      cashmemo: cashmemo,
      purchasedate: purchasedate,
      productscatagory: productscatagory,
    }).then(() => {
      setProductName("");
      setQuantity("");
      setCashmemo("");
      setpurchasedate("");
      setProductscatagory("");
      alert("Submit Data");
    });
  };
  useEffect(() => {
    const db = getDatabase();
    const mefwdRef = ref(db, "StoreIn/");
    onValue(mefwdRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setAllData(array);
    });
  }, []);

  return (
    <>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-5 px-5 mt-10 rounded-lg shadow-2xl shadow-gray-400">
          <div className="mb-12 text-center font-bold text-2xl text-yellow-200">
            <h1 className="py-4">স্টোর জমা তথ্য</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 border-2 border-r-rose-500 border-b-rose-500/75  border-l-rose-500/50  border-t-rose-500/25 w-[800px]">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                জমা
              </h3>
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">মালামালের নাম</level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="মালামালের নাম"
                    type="text"
                    name="emname"
                    onChange={productNameHandler}
                    value={productName}
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">পরিমান :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="পরিমান"
                    type="text"
                    name="designation"
                    onChange={quantityHandler}
                    value={quantity}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    ক্যাশ মেমো/টেন্ডারের তথ্য
                  </level>

                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="ক্যাশ মেমো/টেন্ডারের তথ্য"
                    type="text"
                    name="emname"
                    onChange={cashmemoHandler}
                    value={cashmemo}
                  ></input>
                </div>
                <div>
                  <level className="text-yellow-200 block">
                    ক্রয়ের তারিখ :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    type="date"
                    name="designation"
                    onChange={purchasedateHandler}
                    value={purchasedate}
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    {" "}
                    মালামালের ধরন :
                  </level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="year"
                    name="year"
                    onChange={productsCatagoryHandler}
                    value={productscatagory}
                  >
                    <option>নির্বাচন করুন</option>
                    <option value="কম্পিউটার">কম্পিউটার </option>
                    <option value="স্ট্রেশনারী">স্ট্রেশনারী</option>
                    <option value="পেপার">পেপার</option>
                    <option value="পেন্সিল">পেন্সিল</option>
                  </select>
                </div>
              </div>{" "}
            </div>
            <button
              onClick={submitBtn}
              className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-gray-600 hover:bg-indigo-600 hover:text-white flex mx-auto justify-center"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Inventory;
