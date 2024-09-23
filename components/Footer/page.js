import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative h-[50vh] mt-20 w-[80vw] left-[10%] bg-white border-t border-gray-500  justify-center items-center">
      {/* Footer Content */}
      <div className="footer-content w-[80vw] flex justify-between items-start gap-6 px-6 py-10">
        {/* Left Logo Section */}
        <Image
          className=" mt-20 ml-2 "
          src="/SEt_LOGO_BK.png"
          width={300}
          height={100}
          alt="Cloud 3"
        />

        <div className="flex ml-38 mt-12">
          <p className="vertical-text text-sm mr-3 mt-6 text-stone-400">
            見飽きることはありません︒
          </p>
          <p className="vertical-text text-sm mr-3 mt-6 text-stone-400">
            毎日眺めていても
          </p>
          <p className="vertical-text text-sm mr-3 mt-6 text-stone-400">
            東側から望む富士の稜線はたおやかで︑
          </p>
          <p className="vertical-text text-sm mr-3 mt-6 text-stone-400">
            富士山をつねに見上げる御殿場︒
          </p>
          <p className="vertical-text text-sm mr-7 mt-6 text-stone-400">
            酒造りを
          </p>

          <p className="vertical-text text-black mr-10 text-xl font-semibold ">
            <span className="en-vertical-text">ABOUT US</span>
          </p>

          <p className="vertical-text text-sm -ml-3 mr-5 mt-6 text-stone-400">
            酒造りを
          </p>
          <span className="en-vertical-text text-sm -ml-3 mr-5 mt-6 text-stone-400">
            ONLINE STORE
          </span>
          <p className="vertical-text text-sm -ml-3 mr-5 mt-6 text-stone-400">
            毎日眺めていても
          </p>

          <p className="vertical-text text-black mr-8 text-xl font-semibold ">
            <span className="en-vertical-text">SHOP INFO</span> 御厨榮蔵
          </p>
          <p className="vertical-text text-black mr-8 text-xl font-semibold ">
            <span className="en-vertical-text">NEWS</span> お知らせ
          </p>
          <p className="vertical-text text-black mr-8 text-xl font-semibold ">
            <span className="en-vertical-text">ENJOY</span> お酒を楽しく美味しく
          </p>
          <p className="vertical-text text-black mr-8 text-xl font-semibold ">
            <span className="en-vertical-text">PRODUCTS</span> わたしたちのお酒
          </p>
          <p className="vertical-text text-black mr-8 text-xl font-semibold ">
            <span className="en-vertical-text">LOCATION</span> 郷土
          </p>
          <p className="vertical-text text-black mr-8 text-xl font-semibold ">
            <span className="en-vertical-text">STORY</span> ものがたり
          </p>
        </div>

        {/* Right Section (Social Icons or Additional Info) */}
        <div className=" absolute flex flex-row gap-5 right-[55%] -bottom-[16%]">
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaInstagram />
          </p>
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaXTwitter />
          </p>
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaFacebook />
          </p>
          <p className=" grid cursor-pointer place-items-center text-2xl mr-0">
            <FaYoutube />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
