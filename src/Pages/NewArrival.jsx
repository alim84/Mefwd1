const NewArrival = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="">
          <div className="flex items-center gap-2  ">
            <div className="w-[15px] h-[30px] bg-[#BD4444] rounded-r-md "></div>
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Featured
            </h2>
          </div>
          <div className=" flex mt-10 items-center justify-between ">
            <div className="">
              <h2 className="text-2xl font-bold">New Arrival</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  mt-10 mb-10">
          <div className="w-[690px] h-[600px] content-end relative  bg-black rounded-md shadow-lg shadow-black">
            <img
              className="w-[511px] h-[511px] ml-8"
              src="/public/images/Speaker.png"
            ></img>
          </div>
          <div className="text-white ml-[50px] absolute translate-y-[400px]">
            <h3 className="text-[36px] font-semibold mb-3">Play Station 5</h3>
            <p className="text-[10px] mb-8">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="underline hover:text-[20px]">Shop Now</button>
          </div>
          <div>
            <div className="bg-black rounded-md shadow-lg shadow-black relative  ">
              <img
                className="h-[290px] rounded-md ml-[270px] "
                src="/public/images/Lady.png"
              ></img>
            </div>
            <div className="text-white ml-[30px] absolute translate-y-[-160px]">
              <h3 className="text-[36px] font-semibold mb-3">
                Women’s Collections
              </h3>
              <p className="text-[10px] mb-8">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="underline hover:text-[20px]">Shop Now</button>
            </div>
            <div className="grid grid-cols-2 h-[290px] gap-5 mt-5 ">
              <div className="relative bg-black rounded-md shadow-lg shadow-black content-end">
                <img
                  className="ml-[80px]"
                  src="/public/images/Frame707.png"
                ></img>
              </div>
              <div className="text-white ml-[30px] absolute translate-y-[150px]">
                <h3 className="text-[24px] font-semibold mb-3">Speakers</h3>
                <p className="text-[10px] mb-8">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="underline hover:text-[20px]">
                  Shop Now
                </button>
              </div>
              <div className="bg-black rounded-md shadow-lg shadow-black content-end ">
                <img
                  className="ml-[80px]"
                  src="/public/images/Frame706.png"
                ></img>
              </div>
              <div className="text-white ml-[30px] absolute translate-x-[400px] translate-y-[150px]">
                <h3 className="text-[24px] font-semibold mb-3">Perfume</h3>
                <p className="text-[10px] mb-8">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="underline hover:text-[20px]">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
