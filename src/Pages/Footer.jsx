import { IoSendSharp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto  "></div>
      <div className="bg-black">
        <div className="container mx-auto py-10 px-20">
          <div className="flex justify-between text-white pt-12">
            <div className="w-[200px] text-pretty">
              <h2 className="font-bold text-xl text-red-400 mb-4">Exclusive</h2>
              <p className="text-justify text-xl font-semibold mb-3">
                Subscribe
              </p>
              <div>
                <p>Get 10% off your first order</p>
                <input
                  className="py-2 px-10 outline-none border-2 relative border-white bg-black text-gray-300 rounded-md mt-10"
                  type="text"
                  placeholder="Enter your email"
                ></input>
                <button>
                  <IoSendSharp className="absolate translate-x-[240px] translate-y-[-30px]" />
                </button>
              </div>
            </div>
            <div className="w-[200px]">
              <h2 className="font-bold text-xl text-red-400 mb-4">Support</h2>
              <p>Azimpur, Dhaka, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+8801717-986768</p>
            </div>
            <div className="grid grid-cols-1">
              <h2 className="font-bold text-xl text-red-400 mb-2">Account</h2>

              <a className="text-[16px] hover:text-[19px]" href="">
                My Account
              </a>
              <a className="text-[16px] hover:text-[19px]" href="">
                Login/Register
              </a>
              <a className="text-[16px] hover:text-[19px]" href="">
                Cart
              </a>
              <a className="text-[16px] hover:text-[19px]" href="">
                Wishlist
              </a>
              <a className="text-[16px] hover:text-[19px]" href="">
                Shop
              </a>
            </div>
            <div>
              <h2 className="font-bold text-xl text-red-400 mb-4">
                USEFUL LINKS
              </h2>
              <ul>
                <li>Privacy Policy </li>
                <li>Delivery Policy </li>
                <li>Refund Policy</li>
                <li>Corporate Deal</li>
                <li>FAQs </li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-xl text-red-400 mb-4">
                Download App
              </h2>
              <h3 className="text-white text-[16px] mb-6">
                Save $3 with App New User Only
              </h3>
              <div className="grid grid-cols-2">
                <div className="gap-5">
                  <img src="/public/images/Qr Code.png"></img>
                </div>
                <div className="">
                  <div>
                    <img src="/public/images/GooglePlay.png"></img>
                  </div>
                  <div>
                    <img src="/public/images/AppStore.png"></img>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center gap-6 text-2xl text-white py-4">
                <CiFacebook />
                <FaYoutube />
                <FaLinkedin />
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
