import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const OurProducts = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <div className="flex items-center gap-2 ">
            <div className="w-[15px] h-[30px] bg-[#BD4444] rounded-r-md "></div>
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Our Prodects
            </h2>
          </div>
          <div className=" flex mt-10   items-center justify-between ">
            <div className="">
              <h2 className="text-2xl font-bold">Explore Our Products</h2>
            </div>

            <div className=" flex w-[200px]   ">
              <div>
                <button className=" px-4 bg-red-100 text-gray-500 rounded-lg mr-4">
                  <FaArrowRightLong />
                </button>
                <button className=" px-4 bg-red-100 text-gray-500 rounded-lg ">
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 grid grid-cols-5">
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                <FaStar className="text-yellow-600 pb-2 text-2xl  " />
              </div>
            </div>
          </div>
        </div>
       <div className="flex justify-center mt-10">
       <button className="py-3 px-12 bg-[#DB4444] text-white rounded-md mb-10 ">View All Products</button>
       </div>
      </div>
    </>
  );
};

export default OurProducts;
