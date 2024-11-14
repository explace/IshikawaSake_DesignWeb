"use client";
import React, { useEffect, useRef } from "react";

import Story from "@/components/Story/page";
import News from "@/components/News/page";
import Location from "@/components/Location/page";
import Enjoy from "@/components/Enjoy/page";
import Products from "@/components/Products/page";
import Footer from "@/components/Footer/page";

import Image from "next/image";
import Link from "next/link";

const TopPage = () => {
  // const btn1Hover=useRef(null);
  // const btn2Hover=useRef(null);
  // const btn3Hover=useRef(null);
  // const btn4Hover=useRef(null);
  // const btn5Hover=useRef(null);
  // const btn6Hover=useRef(null);

  // const vid1 = useRef(null);
  // const vid2 = useRef(null);
  // const vid3 = useRef(null);
  const vid4 = useRef(null);
  const vid5 = useRef(null);
  const vid6 = useRef(null);

  //   useEffect(()=>{
  //     function isSafari() {
  //       const ua = navigator.userAgent.toLowerCase();
  //       return ua.includes("safari") && !ua.includes("chrome");
  //   }

  //   console.log("isSafari",isSafari());

  //   if (!isSafari()) {
  //     document.querySelectorAll(".infoHoverAbove").forEach((el) => {
  //         el.style.left = "120px"; // Example Safari-specific style adjustment
  //         // el.style.transform = "translateX(-45%)";
  //     });
  //     document.querySelectorAll(".infoHoverBelow").forEach((el) => {
  //         el.style.left = "120px";
  //         // el.style.transform = "translateX(-45%)";
  //     });
  // }

  //   },[])
  return (
    <>
      <main id="main" className="topPageBg h-[100vh] relative overflow-hidden">
        {/* <Image
        src="/FV_MAIN_IMG_DUMMY.png"
        width={3000}
        height={100}
        alt="logo"
        className="w-[100vw] mt-10 md:mt-0 block"
      /> */}

        <div className="absolute bottom-0">
          {/* <p className="text-cyan-200">Testing</p> */}
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

        <div className="z-[40] absolute top-0 grid lg:place-items-center w-[100%] h-[100%] overflow-hidden border-0 border-yellow-300">
          <section className="lg:flex block w-[100%] h-fit mt-auto lg:mt-0 border-0 border-cyan-300">
            <div className="flex justify-between w-[95%] sm:w-[70%] lg:w-[50%] xl:w-[30%] mt-auto lg:ml-10 xl:ml-44 mb-8 lg:mb-0 relative left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 border-0 border-green-500">
              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  className="vertical-text relative inline-flex align-middle text-white text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <span className="en-vertical-text">SHOP INFO</span> 御厨榮蔵
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  className="vertical-text relative inline-flex align-middle text-white text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <span className="en-vertical-text">NEWS</span> お知らせ
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  className="vertical-text relative inline-flex align-middle text-white text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <Link href={"/EnjoyPage"} passHref>
                    <span className="en-vertical-text">ENJOY</span>{" "}
                    お酒を楽しく美味しく
                  </Link>
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  onMouseEnter={() => {
                    if (vid4.current) {
                      vid4.current.muted = true; // Ensure the video is muted
                      vid4.current.style.opacity = 1;
                      vid4.current.play();
                    }
                  }}
                  onMouseLeave={() => {
                    if (vid4.current) {
                      vid4.current.style.opacity = 0;
                      vid4.current.pause();
                    }
                  }}
                  className="vertical-text relative inline-flex align-middle text-white text-xl cursor-pointer h-fit"
                >
                  <Link href={"/ProductsPage"} passHref>
                    <span className="en-vertical-text">PRODUCTS</span>{" "}
                    わたしたちのお酒
                  </Link>
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  onMouseEnter={() => {
                    if (vid5.current) {
                      vid5.current.muted = true; // Ensure the video is muted
                      vid5.current.style.opacity = 1;
                      vid5.current.play();
                    }
                  }}
                  onMouseLeave={() => {
                    if (vid5.current) {
                      vid5.current.style.opacity = 0;
                      vid5.current.pause();
                    }
                  }}
                  className="vertical-text relative inline-flex align-middle text-white text-xl cursor-pointer h-fit"
                >
                  <Link href={"/LocationPage"} passHref>
                    <span className="en-vertical-text">LOCATION</span> 郷土
                  </Link>
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  onMouseEnter={() => {
                    if (vid6.current) {
                      vid6.current.muted = true; // Ensure the video is muted
                      vid6.current.style.opacity = 1;
                      vid6.current.play();
                    }
                  }}
                  onMouseLeave={() => {
                    if (vid6.current) {
                      vid6.current.style.opacity = 0;
                      vid6.current.pause();
                    }
                  }}
                  className="vertical-text relative inline-flex align-middle text-white text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <Link href={"/StoryPage"} passHref>
                    <span className="en-vertical-text">STORY</span> ものがたり
                  </Link>
                </h3>
                <p className="infoHoverBelow"></p>
              </div>
            </div>

            <div className="w-fit lg:ml-auto lg:mr-10 xl:mr-60 mb-4 lg:mb-0 border-0 border-white relative left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0">
              <Image src={"/LOGO_WH.png"} width={350} height={100} alt="logo" />
            </div>
          </section>
        </div>

        <div className="absolute left-[50%] bottom-2 z-[50]">
          <p className="en-vertical-text-scroll scroll-text text-black">
            scroll
          </p>
          <Image
            className="scroll-img"
            src={"/SCROLL_DROP_ELEMENT.png"}
            width={20}
            height={100}
            alt="logo"
          />
        </div>
      </main>

      <Story />

      <Location />

      {/* <Products /> */}

      {/* <Enjoy /> */}

      <News />

      <Footer />
    </>
  );
};

export default TopPage;
