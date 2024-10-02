"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {
  const lang = useSelector((state) => state.reducer1.lang);

  const easeOutQuad = (t) => t * (2 - t);

  const handleScrollToElement = (event) => {
  const targetElement = event.target.closest("p"); 
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().bottom + window.scrollY;
    const offset = -10;
    const targetScrollPosition = elementPosition - offset;
    const oppositeScrollPosition = targetScrollPosition - (window.innerHeight - 2 * offset);

   
    const start = window.scrollY;
    const distance = oppositeScrollPosition - start;
    const duration = 1000; 
    let startTime = null;

  
    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); 

      
      const ease = easeOutQuad(progress);

  
      window.scrollTo(0, start + distance * ease);

    
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

   
    requestAnimationFrame(animateScroll);
  }
  };

  


  return (
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
        <p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-stone-400">
          {lang === "en" ? (
            <span className="en-vertical-text">Inquiries</span>
          ) : (
            "お問い合わせ"
          )}
        </p>
        <Link href={"/Profile"}>
          <p className="vertical-text relative top-4 mr-4 text-base lg:text-lg text-black">
            {lang === "en" ? (
              <span className="en-vertical-text">Company Profile</span>
            ) : (
              "会社概要"
            )}
          </p>
        </Link>
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
        <p className="vertical-text relative top-4 text-base lg:text-lg text-stone-400">
          {lang === "en" ? (
            <span className="en-vertical-text">Mikuriya sakaegura</span>
          ) : (
            "御厨栄蔵"
          )}
        </p>
      </div>

      {/* Second Section */}
      <div className="flex order-1 lg:order-3 justify-center mb-10 lg:mb-0">
        <p className="vertical-text text-stone-400 mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-stone-400 text-xl lg:text-2xl">
            SHOP INFO
          </span>{" "}
          御厨榮蔵
        </p>
        <p onClick={handleScrollToElement} className="cursor-pointer vertical-text text-black mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-xl lg:text-2xl">NEWS</span>{" "}
          お知らせ
        </p>
        <p className="vertical-text text-stone-400 mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-stone-400 text-xl lg:text-2xl">
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
          </span>{" "}
          郷土
        </p>
        <p className="vertical-text text-stone-400 text-base lg:text-lg font-medium">
          <span className="en-vertical-text text-xl lg:text-2xl">STORY</span>{" "}
          ものがたり
        </p>
      </div>

      {/* Right Section (Social Icons or Additional Info) */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-3xl flex">
       <Link href={"https://www.instagram.com/gotembaishikawashuzo/"} target="_blank">
        <p className="grid cursor-pointer place-items-center mr-6">
          <FaInstagram />
        </p>
       </Link>
       <Link href={"https://x.com/gotembaishikawa"} target="_blank"> 
        <p className="grid cursor-pointer place-items-center mr-6">
          <FaXTwitter />
        </p>
       </Link>
       <Link href={"https://www.facebook.com/profile.php?id=61565849080359"} target="_blank">  
        <p className="grid cursor-pointer place-items-center mr-6">
          <FaFacebook />
        </p>
       </Link> 
       <Link href={"http://www.youtube.com/@gotembaishikawashuzo"} target="_blank"> 
        <p className="grid cursor-pointer text-stone-400 place-items-center mr-0">
          <FaYoutube />
        </p>
       </Link>
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
              飲酒は20歳になってから。
              <br />
              飲酒運転は法律で禁止されています。絶対にやめましょう。
              <br />
              妊娠中や授乳期の飲酒は、胎児・乳児の発育に悪影響を与える恐れがあります。
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Footer;
