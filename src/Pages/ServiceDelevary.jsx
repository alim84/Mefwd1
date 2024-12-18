import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
const ServiceDelevary = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 justify-between mt-20 mb-20 ">
          <div className="relative text-center ">
            <div className="w-[80px] h-[80px] bg-gray-400 rounded-full ml-[220px] ">
              <div className="w-[60px] h-[60px] bg-black rounded-full absolute translate-x-[10px] translate-y-[10px]">
                <TbTruckDelivery className="text-white text-2xl absolute translate-x-[17px] translate-y-[15px] " />
              </div>
            </div>
            <h3 className="text-[16px] mt-[16px] font-semibold">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-[10px]">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="relative text-center ">
            <div className="w-[80px] h-[80px] bg-gray-400 rounded-full ml-[220px] ">
              <div className="w-[60px] h-[60px] bg-black rounded-full absolute translate-x-[10px] translate-y-[10px]">
                <MdOutlineHeadsetMic className="text-white text-2xl absolute translate-x-[17px] translate-y-[15px] " />
              </div>
            </div>
            <h3 className="text-[16px] mt-[16px] font-semibold">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-[10px]">Friendly 24/7 customer suppor</p>
          </div>
          <div className="relative text-center ">
            <div className="w-[80px] h-[80px] bg-gray-400 rounded-full ml-[220px] ">
              <div className="w-[60px] h-[60px] bg-black rounded-full absolute translate-x-[10px] translate-y-[10px]">
                <SiAdguard className="text-white text-2xl absolute translate-x-[17px] translate-y-[15px] " />
              </div>
            </div>
            <h3 className="text-[16px] mt-[16px] font-semibold">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-[10px]">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDelevary;
