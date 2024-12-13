"use client";
import { useEffect, useRef, useState } from "react";
// import Story from "../components/Story/page";
// import Nav from "../components/Navbar/page";
// import LandingPage from "../components/LandingPage/page";
// import Location from "@/components/Location/page";
// import Enjoy from "@/components/Enjoy/page";
// import Products from "@/components/Products/page";
// import Footer from "@/components/Footer/page";
// import Image from "next/image";
// import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { useSelector } from "react-redux";
// import Link from "next/link";
import Story from "@/components/Story/page";
import News from "@/components/News/page";
import Location from "@/components/Location/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import ShopInfo from "@/components/ShopInfo";

export default function Home() {
  // const lang = useSelector((state) => state.reducer1.lang);

  // useEffect(() => {
  //   // Check if there's a hash in the URL
  //   if (window.location.hash) {
  //     const targetElement = document.querySelector(window.location.hash);
  //     if (targetElement) {
  //       setTimeout(() => {
  //         targetElement.scrollIntoView({ behavior: "smooth" });
  //       }, 500);
  //     }
  //   }
  // }, []);

  // const vid1 = useRef(null);
  // const vid2 = useRef(null);
  // const vid3 = useRef(null);
  const vid4 = useRef(null);
  const vid5 = useRef(null);
  const vid6 = useRef(null);
  return (
    <main>
      {/* Comment out this component for the Grand Opening page */}
      {/* <LandingPage /> */}

      {/* Uncomment out this component for the Main Opening page */}
      {/* <TopPage/> */}

      {/* Comment out this component for the Grand Opening page */}
      {/* <p id="newsProp"></p>
      <News /> */}

      <main id="main" className="topPageBg h-[100vh] relative overflow-hidden">
        <div className="absolute bottom-0">
          <Image
            className="cloudsimage1"
            src={"/cloud1.png"}
            // style={{ "--i": 1 }}
            width={2100}
            height={100}
            alt="Cloud1"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage2"
            src={"/cloud2.png"}
            // style={{ "--i": 2 }}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage3"
            src={"/cloud3.png"}
            // style={{ "--i": 3 }}
            width={2100}
            height={100}
            alt="Cloud3"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage4"
            src={"/cloud4.png"}
            // style={{ "--i": 4 }}
            width={2100}
            height={100}
            alt="Cloud4"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage5"
            src={"/cloud5.png"}
            // style={{ "--i": 5 }}
            width={2100}
            height={100}
            alt="Cloud5"
          />
        </div>

        <div className="z-[20] border-0 border-blue-500">
          {/* <video
          muted
          loop
          ref={vid1}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid2}
          src="/nature_vid2.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid3}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        /> */}
          <video
            muted
            loop
            playsInline
            ref={vid4}
            src="/PRODUCTS.mp4"
            className="absolute w-[100vw] h-[100vh] object-cover object-center opacity-0 vid"
          />
          <video
            muted
            loop
            playsInline
            ref={vid5}
            src="/LOCATION.mp4"
            className="absolute w-[100vw] h-[100vh] object-cover object-center opacity-0 vid"
          />
          <video
            muted
            playsInline
            loop
            ref={vid6}
            src="/STORY.mp4"
            className="absolute w-[100vw] h-[100vh] object-cover object-center opacity-0 vid"
          />
        </div>
      </main>

      <Story />

      <Location />

      <p id="newsPropTopPage"></p>

      <News />

      <p id="shopInfoPropTopPage"></p>
      <ShopInfo />

      <Footer />

      {/* <div className="w-full mt-20 p-2 sm:p-6 lg:p-12 2xl:p-24 grid lg:flex justify-evenly relative">
        <div className="mb-32 lg:mb-0 order-3 lg:order-1 grid place-items-center mr-0 lg:mr-2 2xl:mr-32">
          <Image
            className="w-[70%] md:w-[50%] lg:w-72"
            src="/SEt_LOGO_BK.png"
            width={3000}
            height={100}
            alt="Cloud 3"
          />
        </div>

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
        </div>

        <div className="flex order-1 lg:order-3 justify-center mb-10 lg:mb-0">
          <p className="vertical-text text-stone-400 mr-4 2xl:mr-10 text-base lg:text-lg font-medium">
            <span className="en-vertical-text text-stone-400 text-xl lg:text-2xl">
              SHOP INFO
            </span>{" "}
            御厨榮蔵
          </p>
          <p className="vertical-text text-black mr-4 2xl:mr-10 text-base lg:text-lg cursor-pointer font-medium">
            <Link href="/#newsProp">
              <span className="en-vertical-text text-xl lg:text-2xl">NEWS</span>{" "}
              お知らせ
            </Link>
          </p>

          <p className="vertical-text text-black mr-4 2xl:mr-10 text-base  text-stone-400 lg:text-lg font-medium cursor-pointer">
            <span className="en-vertical-text text-xl lg:text-2xl">ENJOY</span>{" "}
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

        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-3xl flex">
          <p className="grid cursor-pointer place-items-center mr-6">
            <Link
              href={"https://www.instagram.com/gotembaishikawashuzo/"}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </p>
          <p className="grid cursor-pointer place-items-center mr-6">
            <Link href={"https://x.com/gotembaishikawa"} target="_blank">
              <FaXTwitter />
            </Link>
          </p>
          <p className="grid cursor-pointer place-items-center mr-6">
            <Link
              href={"https://www.facebook.com/profile.php?id=61565849080359"}
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </p>
          <p className="grid cursor-pointer text-stone-400 place-items-center mr-0">
            <Link
              href={"http://www.youtube.com/@gotembaishikawashuzo"}
              target="_blank"
            >
              <FaYoutube />
            </Link>
          </p>
        </div>

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
                Drinking alcohol during pregnancy or while breastfeeding may
                have a negative impact on the development of the fetus or
                infant.
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
      </div> */}
    </main>
  );
}
