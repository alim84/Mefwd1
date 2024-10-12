import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import { ColorRing } from "react-loader-spinner";
import { getDatabase, push, ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../slices/Userslice";
import GoogleImage from "../assets/Gmail.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const db = getDatabase();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailerror] = useState("");
  let [passwordError, setPassworderror] = useState("");
  let [passwordShow, setPasswordShow] = useState(false);
  const [emailShow, setemailShow] = useState(false);
  const [loader, setLoader] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
    setemailShow(true);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };

  let handleSignIn = () => {
    setLoader(false);
    if (!email || !password) {
      if (!email) {
        setEmailerror("Email is required");
      }
      if (!password) {
        setPassworderror("Password is required");
      }
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(userLoginInfo(user));
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/"); 
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("auth/invalid-credential")) {
            setEmailerror("Invalid credentials");
          } else {
            setEmailerror("Failed to sign in");
          }
        });
    }
  };

  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          image: userCredential.user.photoURL,
          date: `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
        });
        navigate("/"); // Navigate to the homepage after successful Google login
      })
      .catch((error) => {
        console.log(error);
      });
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
              <button
                onClick={handleGoogleLogin}
                className="text-center my-5 rounded-lg border-2 border-gray-400 py-3 px-6 shadow shadow-gray-200 mr-8"
              >
                <img
                  className="inline-block mr-4"
                  src={GoogleImage}
                  alt="Google"
                />
                Login with Google
              </button>
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
                <IoMdCheckmark className="absolute translate-x-[450px] translate-y-[-30px] text-red-500" />
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
                  onClick={handleSignIn}
                  className=" py-2 px-28 bg-cyan-400  rounded-lg mt-8 font-bold text-white "
                >
                  Login
                </button>
              )}

              <h5 className="mt-5 text-[10px] text-white">
                <Link to="/"></Link> Forget My Password
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
              <button className=" absolute bg-blue-500 text-[10px] py-3 px-6 rounded-lg translate-x-[570px] translate-y-[-120px] shadow-sm shadow-yellow-50">
                <Link to="/registration" className=" font-semibold">
                  Request An Account
                </Link>
              </button>
              <button className="absolute bg-white text-[10px] py-3 px-6 rounded-lg translate-x-[590px] translate-y-[-60px] shadow-lg shadow-yellow-50">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
