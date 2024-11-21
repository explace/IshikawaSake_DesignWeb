"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

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
    <div className="mt-12">
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
          src="/FV_STORY_BACKGROUND.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
          ものがたり
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
        {lang === "jp" ? (
          <>
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              ---- Message / History / Region
            </p>
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              <Link href="/StoryPage">
              READ MORE
              <Image
                className="inline-block relative left-[10%] mt-5"
                src="/READMORE_DROP.png"
                width={16}
                height={50}
                alt="nature video"
              />
            </Link>
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
            <p className="vertical-text text-base lg:text-md mr-0">
              湧出る豊かな伏流水。
            </p>
            <p className="vertical-text text-base lg:text-md mr-0">
              富士山の雪解け水が長い歳月を経て地中でろ過され、
            </p>

            {/* <p className="vertical-text text-base lg:text-2xl mr-1 ml-4">
        酒造りを
        </p> */}
            <p className="vertical-text text-base md:text-2xl mr-1 ml-5">
              100年先の未来にも紡ぐ酒造りを
            </p>
            <p className="vertical-text text-base md:text-2xl mr-1">
              この地に根ざす人びとと共に
            </p>
            <p className="vertical-text text-base md:text-2xl mr-0">
              選りすぐりの米
            </p>
            <p className="vertical-text text-base md:text-2xl mr-0">
              富士山から湧く神の水と
            </p>
          </>
        ) : (
          <div className="flex border-0 border-red-400 w-[80vw] md:w-[60vw] lg:w-[40rem] ml-0 lg:ml-[10rem]">
             <p className="en-vertical-text md:mr-4 mr-2 text-sm lg:text-base">
              ---- Message / History / Region
            </p>
           <p className="en-vertical-text mr-4 md:mr-8 text-sm lg:text-base">
           <Link href="/StoryPage">
              READ MORE
              <Image
                className="inline-block relative left-[10%] mt-5"
                src="/READMORE_DROP.png"
                width={16}
                height={50}
                alt="nature video"
              />
            </Link>
            </p>
            

            <section>
              <div className="text-lg lg:text-2xl mb-6">
                <p>Sake brewing that will be spun</p>
                <p>with the people rooted in this</p>
                <p>land for 100 years into</p>
                <p>the future</p>
                <p>
                  Divine water springing from Mt. Fuji and carefully selected
                  rice
                </p>
              </div>
              <div className="text-sm md:text-base">
                <p>
                  The rich underground water that emerges after being filtered
                  through long years from the melted snow of Mt.Fuji. We have
                  always been thinking about how to convey this wonderful gift
                  of nature more widely and how to give back to the region in a
                  better way.
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Story;
