import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Wishlist = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <div className="flex justify-between items-center gap-2 ">
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Wishlist
            </h2>
            <button className="py-2 px-6 outline-none border-2 border-gary-800 content-end  text-black rounded- ">
              Move All to Bag
            </button>
          </div>
        </div>

        <div className=" gap-10 grid grid-cols-5">
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <MdDelete className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <MdDelete className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <MdDelete className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <MdDelete className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between items-center gap-2 ">
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Just For You
            </h2>
            <button className="py-2 px-6 outline-none border-2 border-gary-800 content-end  text-black rounded- ">
              See All
            </button>
          </div>
        </div>

        <div className=" gap-10 grid grid-cols-5">
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button className="bg-white">
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>

            <div className="ml-3">
              <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-6 mb-3 ">
                <p className="text-[#BD4444]">$120</p>
                <p className=" text-gray-800 line-through">$160 </p>
              </div>
              <div className="text-center">
                <button className="py-2 px-10 bg-black rounded-md text-center text-white mb-4 hover:font-semibold ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
