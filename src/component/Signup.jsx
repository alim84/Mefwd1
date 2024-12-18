import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-24 gap-20 justify-between items-center mb-16">
          <div>
            <img src="/public/images/Signup.png"></img>
          </div>
          <div>
            <h2 className="text-[36px] text-mono font-bold">
              Create an Account
            </h2>
            <p className="text-[16px] mt-[10px]">Enter your details below</p>
            <input
              className="px-20 mt-10 py-3  outline-none border-b-2 border-gary-500 block mb-6"
              placeholder="User Name"
              type="text"
            ></input>
            <input
              className="px-20 py-3  outline-none border-b-2 border-gary-500 block mb-6"
              placeholder="Email"
              type="text"
            ></input>
            <input
              className="px-20 py-3  outline-none border-b-2 border-gary-500 block mb-6"
              placeholder="Password"
              type="text"
            ></input>

            <button className="bg-[#DB4444] px-[70px] text-white font-semibold py-3 rounded-sm shadow-lg shadow-gray-200 block mb-5">
              {" "}
              Create Account
            </button>
            <div className="flex relative content-start">
              <FcGoogle className="absolate translate-x-[45px] translate-y-[18px]" />
              <button className="border-2  border-black outline-none px-[54px] py-3 rounded-sm shadow-lg shadow-gray-200 block mb-5">
                {" "}
                Sign up with Google
              </button>
            </div>
            <div className="flex gap-5 ">
              <p>Already have account?</p>{" "}
              <a className="underline hover:font-semibold" href="">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
