"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Story = () => {
  const fadeInStory = useRef(null);

  const lang = useSelector((state) => state.reducer1.lang); // Get language from Redux

  useEffect(() => {
    const target = fadeInStory.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".storyHead").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 6
            }s`;
          });
        } else {
          document.querySelectorAll(".storyHead").forEach((item, index) => {
            item.style.animation = "none";
          });
        }
      });
    });

    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="mt-40">
      <div className="relative overflow-hidden">
        <div className="w-[150%] lg:w-[96.5%] relative -translate-x-[19%] lg:translate-x-0">
          <Image
            // className=" w-[96.5%]"
            src="/MtFUJI_ILLUSTRATION_SET.png"
            width={3000}
            height={300}
            alt="nature video"
          />
        </div>

        <div
          ref={fadeInStory}
          className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <Image
            className="storyHead opacity-0 w-[2rem] sm:w-[4rem] lg:w-[6rem]"
            src="/LOGO_2_BK.png"
            width={100}
            height={300}
            alt="nature video"
          />
          <div className="text-lg sm:text-3xl lg:text-5xl mt-3">
            <p className="storyHead opacity-0 en-vertical-text">S</p>
            <p className="storyHead opacity-0 en-vertical-text">T</p>
            <p className="storyHead opacity-0 en-vertical-text">O</p>
            <p className="storyHead opacity-0 en-vertical-text">R</p>
            <p className="storyHead opacity-0 en-vertical-text">Y</p>
          </div>
        </div>
      </div>

      <div className=" relative grid place-items-center">
        <Image
          className="w-[90%] lg:w-[80%]"
          src="/STORY_IMG_DUMMY.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
          ものがたり
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">

        { lang === 'jp' ? (
        <>
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p>
        <p className="vertical-text text-base lg:text-md mr-0">
        つねづね考えていました。
        </p>
        {/* <p className="vertical-text text-base lg:text-md mr-0">
        もっと広く伝えたいと、
        </p> */}
        <p className="vertical-text text-base lg:text-md mr-0">
        この素晴らしい自然の恵みをもっと広く伝えたいと、
        </p>
        <p className="vertical-text text-base lg:text-md mr-4">
        湧出る豊かな伏流水。
        </p>
        <p className="vertical-text text-base lg:text-md mr-0 -ml-3">富士山の雪解け水が長い歳月を経て地中でろ過され、</p>


        {/* <p className="vertical-text text-base lg:text-2xl mr-1 ml-4">
        酒造りを
        </p> */}
        <p className="vertical-text text-base md:text-2xl mr-1 ml-5">
        100年先の未来にも紡ぐ酒造りを
        </p>
        <p className="vertical-text text-base md:text-2xl mr-1">
        この地に根ざす人びとと共に
        </p>
        <p className="vertical-text text-base md:text-2xl mr-4">
        選りすぐりの米
        </p>
        <p className="vertical-text text-base md:text-2xl mr-0 -ml-3">富士山から湧く神の水と</p>
      </>  
      ):(
      
        <>
        <p className="en-vertical-text md:mr-4 mr-2 text-sm lg:text-base md:-ml-[25%] -ml-[73%] md:mt-2 mt-6">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text md:mr-4 mr-8 text-sm lg:text-base md:mt-2 mt-6 mr-12">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p>
        <div className="grid grid-cols-1 absolute md:mt-[13%] mt-[49%] md:ml-[15%] ml-[18%]">
        <p className=" md:text-base text-sm text-left md:text-md mr-0">
        The rich underground water that emerges after being
        </p>
        <p className=" md:text-base text-sm text-left md:text-md mr-0">
        filtered through long years from the
        </p>
        <p className=" md:text-base text-sm text-left md:text-md mr-0">
        melted snow of Mt.Fuji. We have always been thinking
        </p>
        <p className=" md:text-base text-sm text-left md:text-md mr-0">
        about how to convey this wonderful 
        </p>
        <p className=" md:text-base text-sm text-left md:text-md mr-0">
        gift of nature more widely and how to give back to the region in a better way.
        </p>
        </div>

        
        <div className="grid grid-cols-1 absolute md:ml-[20%] ml-[18%] mt-4 md:mt-0">
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        Sake brewing that will be spun
        </p>
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        with the people rooted in this 
        </p>
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        land for 100 years into
        </p>
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        the future
        </p>
        <p className=" text-base lg:text-2xl mr-4 tracking-tighter">
        Divine water springing from Mt. Fuji and carefully selected rice
        </p>
        </div>
      </>    

      )}
      </div>
    </div>
  );
};

export default Story;
