
const Login = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-24 gap-20 justify-between items-center mb-16">
          <div>
            <img src="/public/images/Signup.png"></img>
          </div>
          <div>
            <h2 className="text-[36px] text-mono font-bold">
              Log in to Exclusive
            </h2>
            <p className="text-[16px] mt-[10px]">Enter your details below</p>
       
            <input
              className="px-20 py-3  outline-none border-b-2 border-gary-500 block mb-6 mt-20"
              placeholder="Email or Mobile Number"
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
           
          
              <a className="underline hover:font-semibold text-[#DB4444]" href="">
                Forget Password ?
              </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
