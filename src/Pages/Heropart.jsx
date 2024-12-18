import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
const Heropart = () => {
  return (
    <>
      <div className="container mx-auto items-center flex grid-cols-2 pt-10">
        <div className="w-[420px] py-3 ">
            <div className="font-light font-serif flex items-center gap-4 py-2">
                <div>

                <a className="py-2 hover:text-lg hover:text-pink-700" href="">Woman's Fashion </a>
                </div>
                <div>

            <FaAngleRight />
                </div>
            </div>
            <div className="font-light font-serif flex items-center gap-10 py-2">
                <div>

                <a className="py-2 hover:text-lg hover:text-pink-700" href="">Men's Fashion </a>
                </div>
                <div>

            <FaAngleRight />
                </div>
            </div>
            
          
          <ul className="">
        
            <li className="py-2 hover:text-lg hover:text-pink-700">
              Men's Fashion
            </li>

            <li className="py-2 hover:text-lg hover:text-pink-700">
              Electronics
            </li>

            <li className="py-2 hover:text-lg hover:text-pink-700">
              Home & Lifestyle
            </li>

            <li className="py-2 hover:text-lg hover:text-pink-700">Medicine</li>

            <li className="py-2 hover:text-lg hover:text-pink-700">
              Sports & Outdoor
            </li>

            <li className="py-2 hover:text-lg hover:text-pink-700">
              Baby's & Outdoor
            </li>

            <li className="py-2 hover:text-lg hover:text-pink-700">
              Groceries & Pets
            </li>

            <li className="py-2 hover:text-lg hover:text-pink-700">
              Health & Beauty
            </li>
          </ul>
        </div>
        <div className="w-[800px]">
          <Carousel className="rounded-xl">
            <div className="relative h-full w-full ">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                   Product Name
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                   Up to 10% off Voucher
                  </Typography>
                  <div className="flex justify-start items-center gap-3 ">
                    <Button size="lg" color="white" variant="text">
                     Shop Now
                    </Button>
                     <FaArrowRightLong className="text-white" />
                  </div>
                </div>
              </div>
            </div>
    
          
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Heropart;
