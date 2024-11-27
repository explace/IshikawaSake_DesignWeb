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
import ShopInfo from "@/components/ShopInfo";

const TopPage = () => {
  // const vid1 = useRef(null);
  // const vid2 = useRef(null);
  // const vid3 = useRef(null);
  const vid4 = useRef(null);
  const vid5 = useRef(null);
  const vid6 = useRef(null);

  return (
    <>
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

        {/* <div className="z-[40] absolute top-0 grid md:place-items-center w-[100%] h-[100%] overflow-hidden border-0 border-yellow-300">
          <section className="md:flex block relative top-1/2 md:top-0 -translate-y-1/2 md:translate-y-0 w-[100%] h-fit mt-[5rem] bigHeight:mt-[0rem] border-0 border-cyan-300">
            <div className="flex justify-between w-[95%] sm:w-[40%] lg:w-[50%] xl:w-[30%] md:ml-10 xl:ml-44 mb-2 lg:mb-0 relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 border-0 border-green-500">
              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  className="vertical-text relative inline-flex align-middle text-stone-300 text-lg lg:text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <Link href={"#"} passHref>
                    <span className="en-vertical-text">SHOP INFO</span> 御厨榮蔵
                  </Link>
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  onClick={() => {
                    document
                      .getElementById("newsPropTopPage")
                      .scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });

                    // const newsDiv = document.getElementById("newsDiv");
                    // if (newsDiv) {
                    //   const rect = newsDiv.getBoundingClientRect();
                    //   const offsetTop = window.pageYOffset + rect.top - 100; // Subtract 100px from the position
                    //   window.scrollTo({
                    //     top: offsetTop,
                    //     behavior: "smooth",
                    //   });
                    // }
                  }}
                  className="vertical-text relative inline-flex align-middle text-white text-lg lg:text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <span className="en-vertical-text mb-4">NEWS</span>お知らせ
                </h3>
                <p className="infoHoverBelow"></p>
              </div>

              <div className="border-0 border-red-600 relative h-fit w-fit navBtn">
                <p className="infoHoverAbove"> </p>
                <h3
                  className="vertical-text relative inline-flex align-middle text-stone-300 text-lg lg:text-xl cursor-pointer h-fit"
                  // onMouseEnter={() => {
                  //   // vid1.current.style.opacity = 1;
                  //   // vid1.current.play();
                  // }}
                  // onMouseLeave={() => {
                  //   // vid1.current.style.opacity = 0;
                  //   // vid1.current.pause();
                  // }}
                >
                  <Link href={"#"} passHref>
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
                  className="vertical-text relative inline-flex align-middle text-stone-300 text-lg lg:text-xl cursor-pointer h-fit"
                >
                  <Link href={"#"} passHref>
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
                  className="vertical-text relative inline-flex align-middle text-white text-lg lg:text-xl cursor-pointer h-fit"
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
                  className="vertical-text relative inline-flex align-middle text-white text-lg lg:text-xl cursor-pointer h-fit"
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

            <div className="w-fit md:ml-auto md:mr-10 xl:mr-60 mb-0 lg:mb-0 border-0 border-white relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
              <Image
                className="w-[20rem] md:w-[20rem] lg:w-[100%]"
                src={"/LOGO_WH.png"}
                width={350}
                height={100}
                alt="logo"
              />
            </div>
          </section>
        </div> */}

        {/* <div className="absolute left-[50%] bottom-2 z-[50]">
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
        </div> */}
      </main>

      <Story />

      <Location />

      <Products />

      {/* <Enjoy /> */}

      <p id="newsPropTopPage"></p>

      <News />

      <p id="shopInfoPropTopPage"></p>
      <ShopInfo />

      <Footer />
    </>
  );
};

export default TopPage;
