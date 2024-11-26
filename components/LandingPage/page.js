"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  const vid1 = useRef(null);
  const vid2 = useRef(null);
  const vid3 = useRef(null);
  const vid4 = useRef(null);
  const vid5 = useRef(null);
  const vid6 = useRef(null);

  
  return (
    <main id="main" className="topPageMain relative overflow-hidden">
      <Image
        src="/TOP_PAGE_FV_FOR_OPEN.png"
        width={3000}
        height={100}
        alt="logo"
        className="w-[100vw] mt-10 md:mt-0 hidden lg:block"
      />

      <div className="block lg:hidden">
        <Image
          src="/main1.png"
          width={3000}
          height={100}
          alt="logo"
          className="w-[100vw] mt-10 md:mt-0"
        />
        <Image
          src="/main2.png"
          width={3000}
          height={100}
          alt="logo"
          className="w-[100vw]"
        />
      </div>

      {/* Clouds with dynamic z-index */}
      <div className="absolute bottom-0">
          <Image
            className="cloudsimage1"
            src={"/cloud1.png"}
            width={2100}
            height={100}
            alt="Cloud1"
          />
        </div>
        {/* Repeat for other cloud images, applying the same dynamic z-index */}
        <div className="absolute bottom-0">
          <Image
            className="cloudsimage2"
            src={"/cloud2.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage2"
            src={"/cloud3.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage2"
            src={"/cloud4.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0">
          <Image
            className="cloudsimage2"
            src={"/cloud5.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>
     

      <div className="z-[20] border-0 border-blue-500">
        <video
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
        {/* <video
          muted
          loop
          ref={vid3}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid4}
          src="/nature_vid2.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid5}
          src="/nature_vid.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <video
          muted
          loop
          ref={vid6}
          src="/nature_vid2.mp4"
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        /> */}
        <Image
          ref={vid3}
          src="/ENJOY_IMG_DUMMY.png"
          width={3000}
          height={300}
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <Image
          ref={vid4}
          src="/PRODUCTS_IMG_DUMMY.png"
          width={3000}
          height={300}
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <Image
          ref={vid5}
          src="/LOCATION_IMG_DUMMY.png"
          width={3000}
          height={300}
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
        <Image
          ref={vid6}
          src="/STORY_IMG_DUMMY.png"
          width={3000}
          height={300}
          className="absolute w-[100%] h-[100%] object-cover object-center opacity-0 vid"
        />
      </div>

      {/* <div className="z-[40] absolute top-0 grid place-items-center w-[100%] h-[100%] border-0 border-yellow-300">
        <section className="lg:flex grid place-items-center items-center w-[100%] border-0 border-cyan-300">
          <div className="flex justify-between w-[95%] sm:w-[70%] lg:w-[50%] xl:w-[30%]  lg:ml-10 xl:ml-44 mb-24 lg:mb-0 border-0 border-green-500">
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid1.current.style.opacity = 1;
                vid1.current.play();
              }}
              onMouseLeave={() => {
                vid1.current.style.opacity = 0;
                vid1.current.pause();
              }}
            >
              <span className="en-vertical-text">SHOP INFO</span> 御厨榮蔵
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid2.current.style.opacity = 1;
                vid2.current.play();
              }}
              onMouseLeave={() => {
                vid2.current.style.opacity = 0;
                vid2.current.pause();
              }}
            >
              <span className="en-vertical-text">NEWS</span> お知らせ
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid3.current.style.opacity = 1;
                // vid3.current.play();
              }}
              onMouseLeave={() => {
                vid3.current.style.opacity = 0;
                // vid3.current.pause();
              }}
            >
              <span className="en-vertical-text">ENJOY</span>{" "}
              お酒を楽しく美味しく
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid4.current.style.opacity = 1;
                // vid4.current.play();
              }}
              onMouseLeave={() => {
                vid4.current.style.opacity = 0;
                // vid4.current.pause();
              }}
            >
              <Link href={"/ProductsPage"} passHref>
                <span className="en-vertical-text">PRODUCTS</span>{" "}
                わたしたちのお酒
              </Link>
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid5.current.style.opacity = 1;
                // vid5.current.play();
              }}
              onMouseLeave={() => {
                vid5.current.style.opacity = 0;
                // vid5.current.pause();
              }}
            >
              <Link href={"/LocationPage"} passHref>
                <span className="en-vertical-text">LOCATION</span> 郷土
              </Link>
            </p>
            <p
              className="vertical-text text-white text-xl cursor-pointer infoHover h-fit"
              onMouseEnter={() => {
                vid6.current.style.opacity = 1;
                // vid6.current.play();
              }}
              onMouseLeave={() => {
                vid6.current.style.opacity = 0;
                // vid6.current.pause();
              }}
            >
              <Link href={"/StoryPage"} passHref>
                <span className="en-vertical-text">STORY</span> ものがたり
              </Link>
            </p>
          </div>

          <div className="w-[70%] md:w-fit lg:ml-auto lg:mr-10 xl:mr-60 border-0 border-white">
            <Image src={"/LOGO_WH.png"} width={350} height={100} alt="logo" />
          </div>
        </section>
      </div>

      <div className="absolute left-[50%] bottom-2">
        <p className="en-vertical-text-scroll scroll-text text-black">scroll</p>
        <Image
          className="scroll-img"
          src={"/SCROLL_DROP_ELEMENT.png"}
          width={20}
          height={100}
          alt="logo"
        />
      </div> */}
    </main>
  );
};

export default LandingPage;
