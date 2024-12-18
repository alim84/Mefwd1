const AddEnhance = () => {
  return (
    <>
      <div className="container mx-auto bg-black rounded-md items-center pt-[69px] pl-[56px] mb-10">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-[#00FF66] font-[16px]">Categories</h2>
            <h3 className="text-white text-[48px] font-[600] mt-[20px]">
              Enhance Your <br></br> Music Experience
            </h3>
            <div className="flex grid grid-cols-5 items-center   ">
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center ">
                <p className="text-xl font-bold ml-2">03 </p>
                <h3 className="text-lg font-bold">Days</h3>
              </div>
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                <p className="text-xl font-bold ml-3 ">11 </p>
                <h3 className="text-lg font-bold">Hours</h3>
              </div>
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                <p className="text-xl font-bold ml-2 ">56 </p>
                <h3 className="text-lg font-bold">Minutes</h3>
              </div>
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                <p className="text-xl font-bold  ">32 </p>

                <h3 className="text-lg font-bold ">Second</h3>
              </div>
            </div>
          </div>

          <div>
            <img src="/public/images/Frame694.png"></img>
          </div>
        </div>
        <button className="px-6 py-3 bg-[#00FF66] rounded-md mb-5">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default AddEnhance;
