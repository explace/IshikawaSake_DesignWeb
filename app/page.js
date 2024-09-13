"use client";
// import Video from 'next-video';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Story from "./Story/page";
import News from "./News/page";
// import vid from "../public/nature_vid2.mp4";
export default function Home() {
  const vid1 = useRef(null);
  const vid2 = useRef(null);
  const vid3 = useRef(null);
  const vid4 = useRef(null);
  const vid5 = useRef(null);
  const vid6 = useRef(null);
  const nav = useRef(null);
  const navBtns = useRef(null);

  useEffect(() => {
    if(navBtns.current){
      navBtns.current.style.display = "none";
    }
    if (typeof window !== 'undefined') {
      const handleScroll = (e) => {
        const scrollTop = window.scrollY; // Current scroll position
        const windowHeight = window.innerHeight;
        const scrollPercentage = scrollTop / windowHeight;

        if (scrollPercentage <= 1) {
          if(scrollPercentage>.75){
            navBtns.current.style.display = "flex";
          }
          if(scrollPercentage<.75){
            navBtns.current.style.display = "none";
          }
          nav.current.style.filter = `invert(${scrollPercentage})`;
          navBtns.current.style.opacity = scrollPercentage;
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
      };
    }
  }, []);
  return (
    <>
      {/* <Video src={vid}/> */}
      <main
        id="main"
        className="topPageMain h-[100vh] relative overflow-hidden"
      >

    <div className="clouds" style={{ height: '100vh', width: '100vw'}}>  
  
     {/* Cloud 1 - Slow Speed */}
     <Image
        className="cloudsimage"
        src="/cloud1.png"
        style={{ "--i": 1 }}
        width={2100}
        height={100}
        alt="Picture of the cloud"
      />

      {/* Cloud 2 - Fast Speed */}
      <Image
        className="cloudsimage"
        src="/cloud2.png"
        style={{ "--i": 2 }}
        width={2100}
        height={100}
        alt="Picture of the cloud"
      />

      {/* Cloud 3 - Medium Speed */}
      <Image
        className="cloudsimage"
        src="/cloud3.png"
        style={{ "--i": 3 }}
        width={2100}
        height={100}
        alt="Picture of the cloud"
      />

      {/* Cloud 4 - Reverse Slow */}
      <Image
        className="cloudsimage"
        src="/cloud4.png"
        style={{ "--i": 4 }}
        width={2100}
        height={100}
        alt="Picture of the cloud"
      />

      {/* Cloud 5 - Slow Speed */}
      <Image
        className="cloudsimage"
        src="/cloud5.png"
        style={{ "--i": 5 }}
        width={2100}
        height={100}
        alt="Picture of the cloud"
      />

      </div>
   
        <div className="z-[20]">
          <video
          muted
            loop
            ref={vid1}
            src="/nature_vid.mp4"
            className="absolute vid opacity-0 inset-0 object-cover w-[100vw] border-0 border-blue-400"
          />
          <video
          muted
            loop
            ref={vid2}
            src="/nature_vid2.mp4"
            className="absolute vid opacity-0 inset-0 object-cover w-[100vw] border-0 border-blue-400"
          />
          <video
          muted
            loop
            ref={vid3}
            src="/nature_vid.mp4"
            className="absolute vid opacity-0 inset-0 object-cover w-[100vw] border-0 border-blue-400"
          />
          <video
          muted
            loop
            ref={vid4}
            src="/nature_vid2.mp4"
            className="absolute vid opacity-0 inset-0 object-cover w-[100vw] border-0 border-blue-400"
          />
          <video
          muted
            loop
            ref={vid5}
            src="/nature_vid.mp4"
            className="absolute vid opacity-0 inset-0 object-cover w-[100vw] border-0 border-blue-400"
          />
          <video
          muted
            loop
            ref={vid6}
            src="/nature_vid2.mp4"
            className="absolute vid opacity-0 inset-0 object-cover w-[100vw] border-0 border-blue-400"
          />
        </div>

        <nav
          ref={nav}
          className="flex text-white z-[1000000] fixed top-0 w-[100%] items-center p-5 border-0 border-red-600"
        >
          <div>
            <Image
              className="cursor-pointer logo"
              src={"/LOGOTYPE_WH.png"}
              width={250}
              height={100}
              alt="logo"
            />
          </div>

          <div className="ml-auto flex relative">
            {/* <div className="grid place-items-center">
              <Image
                className="mr-6 cursor-pointer"
                src={"/INSTAGRAM_ICON_WH.png"}
                width={20}
                height={100}
                alt="logo"
              />
            </div>
            <div className="grid place-items-center">
              <Image
                className="mr-6 cursor-pointer"
                src={"/X_ICON_WH.png"}
                width={20}
                height={100}
                alt="logo"
              />
            </div>
            <div className="grid place-items-center">
              <Image
                className="mr-6 cursor-pointer"
                src={"/FACEBOOK_ICON_WH.png"}
                width={20}
                height={100}
                alt="logo"
              />
            </div>
            <div className="grid place-items-center">
              <Image
                className="mr-6 cursor-pointer"
                src={"/YOUTUBE_ICON_WH.png"}
                width={30}
                height={10}
                alt="logo"
              />
            </div> */}

            <div ref={navBtns} className="opacity-0 flex items-center">
              <p className="mr-5 cursor-pointer">STORY</p>
              <p className="mr-5 cursor-pointer">LOCATION</p>
              <p className="mr-5 cursor-pointer">PRODUCTS</p>
              <p className="mr-5 cursor-pointer">ENJOY</p>
              <p className="mr-5 cursor-pointer">NEWS</p>
              <p className="mr-5 cursor-pointer">SHOP INFO</p>
            </div>

            <p className=" grid cursor-pointer place-items-center text-2xl mr-5">
              <FaInstagram />
            </p>
            <p className=" grid cursor-pointer place-items-center text-2xl mr-5">
              <FaXTwitter />
            </p>
            <p className=" grid cursor-pointer place-items-center text-2xl mr-5">
              <FaFacebook />
            </p>
            <p className=" grid cursor-pointer place-items-center text-2xl mr-5">
              <FaYoutube />
            </p>

            <p className="mr-2 text-xl">JP</p>

            {/* <div className="grid place-items-center"> */}
            {/* <Image
                className="mr-6 cursor-pointer"
                src={"/LANGUAGE_PULLDOWN_ELEMENT_WH.png"}
                width={15}
                height={10}
                alt="logo"
              /> */}
            <IoIosArrowDown className="text-2xl cursor-pointer" />
            {/* </div> */}
          </div>
        </nav>

        <div className="flex absolute top-0 w-[100%] items-center pt-52 mt-0 border-0 border-green-500">
          <div className="flex ml-44">
            <p
              className="vertical-text text-white mr-14 text-xl cursor-pointer infoHover"
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
              className="vertical-text text-white mr-14 text-xl cursor-pointer infoHover"
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
              className="vertical-text text-white mr-14 text-xl cursor-pointer infoHover"
              onMouseEnter={() => {
                vid3.current.style.opacity = 1;
                vid3.current.play();
              }}
              onMouseLeave={() => {
                vid3.current.style.opacity = 0;
                vid3.current.pause();
              }}
            >
              <span className="en-vertical-text">ENJOY</span>{" "}
              お酒を楽しく美味しく
            </p>
            <p
              className="vertical-text text-white mr-14 text-xl cursor-pointer infoHover"
              onMouseEnter={() => {
                vid4.current.style.opacity = 1;
                vid4.current.play();
              }}
              onMouseLeave={() => {
                vid4.current.style.opacity = 0;
                vid4.current.pause();
              }}
            >
              <span className="en-vertical-text">PRODUCTS</span>{" "}
              わたしたちのお酒
            </p>
            <p
              className="vertical-text text-white mr-14 text-xl cursor-pointer infoHover"
              onMouseEnter={() => {
                vid5.current.style.opacity = 1;
                vid5.current.play();
              }}
              onMouseLeave={() => {
                vid5.current.style.opacity = 0;
                vid5.current.pause();
              }}
            >
              <span className="en-vertical-text">LOCATION</span> 郷土
            </p>
            <p
              className="vertical-text text-white mr-14 text-xl cursor-pointer infoHover"
              onMouseEnter={() => {
                vid6.current.style.opacity = 1;
                vid6.current.play();
              }}
              onMouseLeave={() => {
                vid6.current.style.opacity = 0;
                vid6.current.pause();
              }}
            >
              <span className="en-vertical-text">STORY</span> ものがたり
            </p>
          </div>

          <div className="w-fit ml-auto mr-60">
            <Image src={"/LOGO_WH.png"} width={350} height={100} alt="logo" />
          </div>
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
        </div>
      </main>

      {/* <Story/> */}
      <News />

      <p className="mt-[90vh] text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum
        aut, unde voluptates repudiandae nemo esse labore expedita, consequuntur
        rerum quaerat, porro obcaecati distinctio deserunt maiores facere
        exercitationem repellat suscipit consequatur! Explicabo dolor porro illo
        tempora quia deserunt, molestias voluptatibus rem. Culpa aliquam tempora
        iste reprehenderit sapiente fugit illum minima eius. At modi fugit
        veniam! Corrupti beatae molestias distinctio, at labore earum, cumque
        aut reprehenderit repudiandae iusto nihil. Voluptate consequuntur
        maiores vel assumenda sunt eum! Cum aperiam fuga maiores natus unde?
        Saepe illum harum ab maiores repudiandae non ipsa, cupiditate expedita
        veniam aperiam perspiciatis deserunt sapiente similique blanditiis vitae
        fugit!
      </p>
    </>
  );
}
