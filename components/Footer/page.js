import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="sm:w-[80vw] lg:ml-[10%] mt-[20%] md:mt-[10%] mb-[60%] md:mb-[15%] flex flex-col md:flex-row bg-white border-t border-gray-500 justify-between items-start gap-2">
      
      {/* Left Logo Section */}
      <div className="flex basis-1/3 mt-14 md:mt-20 ml-[5.5%] w-[90%] py-2 md:ml-[0] justify-center">
        <Image
          className=" md:w-[100%] md:h-[100%] md:-mr-12"
          src="/SEt_LOGO_BK.png"
          width={300}
          height={100}
          alt="Cloud 3"
        />
      </div>

      {/* First Section */}
      <div className="relative flex basis-1/3 mt-12 justify-center ml-[5.5%] w-[90%] py-2 md:ml-[0] order-2 md:order-1">
        <p className="vertical-text text-[11px] md:text-sm mr-1 ml-1 md:ml-3 mt-6 text-stone-400">
          サイトマップ
        </p>
        <p className="vertical-text text-[11px] md:text-sm mr-2 ml-1 md:ml-3 mt-6 text-stone-400">
          プライバシーポリシー
        </p>
        <p className="vertical-text text-[11px] md:text-sm mr-3 mt-6 text-stone-400">
          ご利用規約
        </p>
        <p className="vertical-text text-[11px] md:text-sm mr-3 mt-6 text-stone-400">
          特定商取引法に基づく表示
        </p>
        <p className="vertical-text text-[11px] md:text-sm mr-3 mt-6 text-stone-400">
          お問い合わせ
        </p>
        <p className="vertical-text text-[11px] md:text-sm mr-5 mt-6 text-stone-400">
          会社概要
        </p>
        <p className="vertical-text text-black mr-6 mt-2 md:mr-9 text-sm md:text-xl font-semibold ">
          <span className="en-vertical-text text-stone-400">ABOUT US</span>
        </p>
        <p className="vertical-text text-[11px] md:text-sm -ml-3 md:-ml-2 mr-5 md:mr-4 mt-6 text-stone-400">
          取扱店舗
        </p>
        <p className="vertical-text text-[11px] md:text-sm -ml-3 mr-3 md:-ml-2 md:-mr-16 mt-6 text-stone-400">
          御厨栄蔵
        </p>
      </div>

      {/* Second Section */}
      <div className="flex basis-1/3 mt-12 md:mt-14 justify-center ml-[11.5%] w-[90%] py-2 md:ml-[0] md:mr-4 order-1 md:order-2">
        <p className="vertical-text text-stone-400 mr-6 md:mr-8 text-sm md:text-xl -ml-10 font-semibold ">
          <span className="en-vertical-text text-stone-400">SHOP INFO</span> 御厨榮蔵
        </p>
        <p className="vertical-text text-black mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
          <span className="en-vertical-text">NEWS</span> お知らせ
        </p>
        <p className="vertical-text text-stone-400 mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
          <span className="en-vertical-text text-stone-400">ENJOY</span> お酒を楽しく美味しく
        </p>
        <p className="vertical-text text-stone-400 mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
          <span className="en-vertical-text text-stone-400">PRODUCTS</span> わたしたちのお酒
        </p>
        <p className="vertical-text text-stone-400 mr-6 md:mr-8 text-sm md:text-xl font-semibold ">
          <span className="en-vertical-text text-stone-400">LOCATION</span> 郷土
        </p>
        <p className="vertical-text text-black mr-0 md:mr-0 text-sm md:text-xl font-semibold ">
          <span className="en-vertical-text">STORY</span> ものがたり
        </p>
      </div>

      {/* Right Section (Social Icons or Additional Info) */}
      <div className="absolute basis-1/3 flex flex-row gap-8 ml-[19.5%] mt-[270%] md:mt-[19%] md:ml-[33.5%]">
        <p className="grid cursor-pointer place-items-center text-2xl mr-0">
          <FaInstagram />
        </p>
        <p className="grid cursor-pointer place-items-center text-2xl mr-0">
          <FaXTwitter />
        </p>
        <p className="grid cursor-pointer place-items-center text-2xl mr-0">
          <FaFacebook />
        </p>
        <p className="grid cursor-pointer place-items-center text-2xl mr-0">
          <FaYoutube />
        </p>
      </div>
    </div>
  );
};

export default Footer;
