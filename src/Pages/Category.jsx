import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";

const Category = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <div className="flex items-center gap-2  ">
            <div className="w-[15px] h-[30px] bg-[#BD4444] rounded-r-md "></div>
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Categories
            </h2>
          </div>
          <div className=" flex mt-10   items-center justify-between ">
            <div className="">
              <h2 className="text-2xl font-bold">Browse By Category</h2>
            </div>

            <div className=" flex w-[200px] ml-56  ">
              <div>
                <button className="py-2 px-2 bg-red-200 rounded-lg mr-4">
                  <FaArrowRightLong />
                </button>
                <button className="py-2 px-2 bg-red-200 rounded-lg ">
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" gap-10 grid grid-cols-6">
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <CiMobile4 className="text-5xl " />
              <h3>Phone</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <RiComputerLine className="text-5xl" />
              <h3>Computer</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <BsSmartwatch className="text-5xl" />
              <h3>SmartWatch</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <IoCameraOutline className="text-5xl" />
              <h3>Camera</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <FaHeadphonesSimple className="text-5xl" />
              <h3>HeadPhones</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <FaGamepad className="text-5xl" />
              <h3>Gaming</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
