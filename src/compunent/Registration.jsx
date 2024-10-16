import React, { useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { getDatabase, push, ref, set } from "firebase/database";

const Registration = () => {
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailShow, setemailShow] = useState(false);
  const [nameShow, setNameShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setemailShow(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
    setNameShow(true);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    }

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSignup = async () => {
    if (!validateInputs()) return;
    
    try {
      await set(push(ref(db, "users/")), {
        name: name,
        email: email,
        password: password,

        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
      });
      if (email && name && password) {
        createUserWithEmailAndPassword(auth, email, password);
      }
      setLoader(false);
      navigate("/login");
    } catch (error) {
      setLoader(false);
      if (error.code.includes("auth/email-already-in-use")) {
        setEmailError("Email already in use");
      } else {
        setEmailError("Error during signup:", error);
      }
    }
  };

  return (
    <>
      <div className="bg-black/40 w-screen h-screen pt-[60px] relative ">
        <div className="w-[800px] h-[800px] bg-black/30 shadow-2xl shadow-white rounded-3xl mx-auto ">
          <div className="w-[600px] h-[600px] bg-black/20 shadow-t-2xl shadow-2xl shadow-white rounded-3xl mx-auto absolute translate-x-[100px] translate-y-[100px] ">
            <div className="text-center">
              <h1 className="text-xl text-white py-4 font-bold ">
                স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ
              </h1>
              <p className="text-[10px] text-white ">
                দ্রুত এবং সহজে স্বাস্থ্য শিক্ষা ব্যবস্থাপনা
              </p>
              <h3 className="text-xl text-white py-10 ">Welcome Back!</h3>
              <RiAdminFill className=" absolute text-cyan-500 w-[70px] h-[70px] translate-x-[500px] translate-y-[-170px]" />
            </div>
            <div className="text-center relative mb-[30px] ">
              <label
                className={`text-[12px] ${
                  emailError ? "text-red-500" : "text-white"
                } absolute translate-x-[3px] translate-y-[-12px] bg-black/40 rounded-full px-2`}
              >
                ইমেইল
              </label>
              <input
                onChange={handleEmail}
                className="bg-black/40 outline-none py-2 px-20 rounded-md border-b-2 text-white "
                type="text"
                value={email}
              ></input>
              {emailError && (
                <p className="text-red-500 text-[12px] font-normal">
                  {emailError}
                </p>
              )}
              {emailShow ? (
                <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-30px] text-cyan-500" />
              ) : (
                <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-37px] text-red-500" />
              )}
            </div>
            <div className="text-center relative mb-[30px] ">
              <label
                className={`text-[12px] ${
                  nameError ? "text-red-500" : "text-white"
                } absolute translate-x-[3px] translate-y-[-12px] bg-black/40 rounded-full px-2`}
              >
                ইউজার নাম
              </label>
              <input
                onChange={handleName}
                className="bg-black/40 outline-none py-2 px-20 rounded-md border-b-2 text-white "
                type="text"
                value={name}
              ></input>
              {nameError && (
                <p className="text-red-500 text-[12px] font-normal">
                  {nameError}
                </p>
              )}

              {nameShow ? (
                <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-30px] text-cyan-500" />
              ) : (
                <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-37px] text-red-500" />
              )}
            </div>
            <div className="text-center relative ">
              <label
                className={`text-[12px] ${
                  passwordError ? "text-red-500" : "text-white"
                } absolute translate-x-[3px] translate-y-[-12px] bg-black/40 rounded-full px-2`}
              >
                পাসওয়ার্ড
              </label>
              <input
                onChange={handlePassword}
                className="bg-black/40 outline-none py-2 px-20 rounded-md border-b-2 text-white "
                type={passwordShow ? "text" : "password"}
                value={password}
              ></input>
              {passwordShow ? (
                <FaEye
                  onClick={() => setPasswordShow(false)}
                  className="2xl absolute top-2/4 right-5 translate-y-[-10px] translate-x-[-115px]   text-cyan-500 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setPasswordShow(true)}
                  className="2xl absolute top-2/4 right-5 translate-y-[-10px] translate-x-[-115px]   text-cyan-500 cursor-pointer"
                />
              )}
              {passwordError && (
                <p className="text-red-500 text-[12px] font-normal">
                  {passwordError}
                </p>
              )}
            </div>
            <div className=" text-center">
              {loader ? (
                <ColorRing
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper mx-72"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              ) : (
                <button
                  onClick={handleSignup}
                  className=" py-2 px-28 bg-cyan-400  rounded-lg mt-8 "
                >
                  Registration
                </button>
              )}
              <p className="text-[10px] text-white text-center pt-[5px]">
                Already have an account?{" "}
                <Link to="/" className="text-[#EA6C00] font-bold">
                  Sign In
                </Link>
              </p>
              <h5 className="mt-5 text-[10px] text-white">
                <a href="">Forget My Password</a>
              </h5>
            </div>

            <div className="text-center  mt-[90px]">
              <h4 className="bg-black/40 inline-block py-1 rounded-md text-[10px] text-white ">
                <a className="mr-1" href="">
                  {" "}
                  Term of use
                </a>{" "}
                ||{" "}
                <a className="ml-1" href="">
                  Privacy policy
                </a>
              </h4>
            </div>
            <div className="relative">
              <button className="absolute bg-white text-[10px] py-3 px-6 rounded-lg translate-x-[580px] translate-y-[-140px] shadow-lg shadow-yellow-50">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
