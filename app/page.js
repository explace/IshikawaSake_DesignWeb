"use client";
// import Video from 'next-video';
import { useEffect, useRef, useState } from "react";
import Story from "../components/Story/page";
import News from "../components/News/page";
// import Nav from "../components/Navbar/page";
import LandingPage from "../components/LandingPage/page";
import Location from "@/components/Location/page";
import Enjoy from "@/components/Enjoy/page";
import Products from "@/components/Products/page";
import Footer from "@/components/Footer/page";
import TopPage from "./TopPage/page";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Home() {
  const lang = useSelector((state) => state.reducer1.lang);

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);
  return (
    <main>
      {/* Comment out this component for the Grand Opening page */}
      <LandingPage />

      {/* Uncomment out this component for the Main Opening page */}
      {/* <TopPage/> */}

      
      <p id="newsProp">
      </p>

      {/* Comment out this component for the Grand Opening page */}
      <News />
      
      {/* Uncomment out this component for the Grand Opening page */}
      {/* <Story/>

      {/* Uncomment out this component for the Grand Opening page */}
      {/* <Location/> */}

       {/* Uncomment out this component for the Grand Opening page */}
      {/* <Products/> */}
      
      {/* Uncomment out this component for the Grand Opening page */}
      {/* <Enjoy/>  */}

      {/* Common part for both pages */}
      {/* <Footer/> */}

      <div className="w-full mt-20 p-2 sm:p-6 lg:p-12 2xl:p-24 grid lg:flex justify-evenly relative">
      {/* Left Logo Section */}
      <div className="mb-32 lg:mb-0 order-3 lg:order-1 grid place-items-center mr-0 lg:mr-2 2xl:mr-32">
        <Image
          className="w-[70%] md:w-[50%] lg:w-72"
          src="/SEt_LOGO_BK.png"
          width={3000}
          height={100}
          alt="Cloud 3"
        />
      </div>

      {/* First Section */}
      <div className="flex order-2 justify-center mb-10 lg:mb-0">
        <p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-stone-400">
          {lang === "en" ? (
            <span className="en-vertical-text">Sitemap</span>
          ) : (
            "サイトマップ"
          )}
        </p>
        <p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-stone-400">
          {lang === "en" ? (
            <span className="en-vertical-text">Privacy Policy</span>
          ) : (
            "プライバシーポリシー"
          )}
        </p>
        
            <p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-black">
            {lang === "en" ? (
              <span className="en-vertical-text">Inquiries</span>
            ) : (
              "お問い合わせ"
            )}
            </p>
        
          <p className="vertical-text relative top-4 mr-4 text-base lg:text-lg text-black">
          <Link href={"/Profile"}>
            {lang === "en" ? (
              <span className="en-vertical-text">Company Profile</span>
            ) : (
              "会社概要"
            )}
              </Link>
          </p>

        <p className="en-vertical-text mr-6 2xl:mr-10 text-black text-xl lg:text-2xl font-medium">
          ABOUT US
        </p>
        <p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-stone-400">
          {lang === "en" ? (
            <span className="en-vertical-text">Stores</span>
          ) : (
            "取扱店舗"
          )}
        </p>
        {/* <p className="vertical-text relative top-4 text-base lg:text-lg text-stone-400">
          {lang === "en" ? (
            <span className="en-vertical-text">Mikuriya sakaegura</span>
          ) : (
            "御厨栄蔵"
          )}
        </p> */}
      </div>

      {/* Second Section */}
      <div className="flex order-1 lg:order-3 justify-center mb-10 lg:mb-0">
        <p className="vertical-text text-stone-400 mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-stone-400 text-xl lg:text-2xl">
            SHOP INFO
          </span>{" "}
          御厨榮蔵
        </p>
        <p
        // onClick={handleScrollToElement}
        className="vertical-text text-black mr-4 2xl:mr-10 text-base lg:text-lg cursor-pointer font-medium">
        <Link href="/#newsProp">
          <span className="en-vertical-text text-xl lg:text-2xl">NEWS</span>{" "}
          お知らせ
           </Link>
        </p>

        <p className="vertical-text text-black mr-4 2xl:mr-10 text-base  text-stone-400 lg:text-lg font-medium cursor-pointer">
          <span className="en-vertical-text text-xl lg:text-2xl">
            ENJOY
          </span>{" "}
          お酒を楽しく美味しく
        </p>

        <p className="vertical-text text-stone-400 mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-stone-400 text-xl lg:text-2xl">
            PRODUCTS
          </span>{" "}
          わたしたちのお酒
        </p>
        <p className="vertical-text text-stone-400 mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-stone-400 text-xl lg:text-2xl">
            LOCATION
          </span>
          郷土
        </p>
        <p className="vertical-text text-stone-400 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-xl lg:text-2xl">STORY</span>{" "}
          ものがたり
        </p>
      </div>

      {/* Right Section (Social Icons or Additional Info) */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-3xl flex">
        <p className="grid cursor-pointer place-items-center mr-6">
       <Link href={"https://www.instagram.com/gotembaishikawashuzo/"} target="_blank">
          <FaInstagram />
       </Link>
        </p>
        <p className="grid cursor-pointer place-items-center mr-6">
       <Link href={"https://x.com/gotembaishikawa"} target="_blank">
          <FaXTwitter />
       </Link>
        </p>
        <p className="grid cursor-pointer place-items-center mr-6">
       <Link href={"https://www.facebook.com/profile.php?id=61565849080359"} target="_blank">
          <FaFacebook />
       </Link>
        </p>
        <p className="grid cursor-pointer text-stone-400 place-items-center mr-0">
       <Link href={"http://www.youtube.com/@gotembaishikawashuzo"} target="_blank">
          <FaYoutube />
       </Link>
        </p>
      </div>

      {/* Last Section */}
      <div
        className={`absolute lg:-bottom-[15%] ${
          lang === "en" ? "-bottom-[27%]" : "-bottom-[19%]"
        } ${
          lang === "en" ? "lg:-bottom-[29%]" : "lg:-bottom-[23%]"
        } left-1/2 -translate-x-1/2 text-white text-base lg:text-lg flex justify-center items-center p-4 lg:p-6 mt-20 w-[90%] lg:w-[60%]`}
      >
        <p className="text-center text-stone-400 leading-relaxed lg:leading-loose">
          {lang === "en" ? (
            <>
              You must be 20 years of age to drink alcohol.
              <br />
              Drinking and driving is prohibited by law. Never do this.
              <br />
              Drinking alcohol during pregnancy or while breastfeeding may have
              a negative impact on the development of the fetus or infant.
            </>
          ) : (
            <>
              飲酒は20歳になってからです。
              <br />
              飲酒運転は法律で禁止されています。絶対にやめましょう。
              <br />
              妊娠中や授乳期の飲酒は、胎児・乳児の発育に悪影響を与える恐れがあります。
            </>
          )}
        </p>
      </div>
    </div>



     
    </main>
  );
}
