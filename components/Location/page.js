"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Location = () => {
  const fadeInLocation = useRef(null);

  const lang = useSelector((state) => state.reducer1.lang); // Get language type from Redux

  useEffect(() => {
    const target = fadeInLocation.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".locationHead").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 9
            }s`;
          });
        } else {
          document.querySelectorAll(".locationHead").forEach((item, index) => {
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
    <div className="mt-6">
      <div className="relative overflow-hidden">
        <div className="w-[150%] lg:w-[100%] relative -translate-x-[15%] lg:translate-x-0">
          <Image
            // className=""
            src="/UNDERWATER_ILLUSTRATION_SET.png"
            width={3000}
            height={300}
            alt="nature video"
          />
        </div>

        <div
          ref={fadeInLocation}
          className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <Image
            className="locationHead opacity-0 w-[2rem] sm:w-[4rem] lg:w-[6rem]"
            src="/LOGO_2_BK.png"
            width={100}
            height={300}
            alt="nature video"
          />
          <div className="text-lg sm:text-3xl lg:text-5xl mt-3">
            <p className="locationHead opacity-0 en-vertical-text">L</p>
            <p className="locationHead opacity-0 en-vertical-text">O</p>
            <p className="locationHead opacity-0 en-vertical-text">C</p>
            <p className="locationHead opacity-0 en-vertical-text">A</p>
            <p className="locationHead opacity-0 en-vertical-text">T</p>
            <p className="locationHead opacity-0 en-vertical-text">I</p>
            <p className="locationHead opacity-0 en-vertical-text">O</p>
            <p className="locationHead opacity-0 en-vertical-text">N</p>
          </div>
        </div>
      </div>

      <div className=" relative grid place-items-center">
        <Image
          className="w-[90%] lg:w-[80%]"
          src="/FV_LOCATION_BACKGROUND.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
        ホームタウン
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16 mb-12">
        {lang === "jp" ? (
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
              御殿場には素地が揃っています。
            </p>
            {/* <p className="vertical-text text-base lg:text-md mr-0">
              米が欠かせません。
            </p> */}
            <p className="vertical-text text-base lg:text-md mr-0">
              豊富で良質な水と米が欠かせません。
            </p>
            <p className="vertical-text text-base lg:text-md mr-5">
              日本酒造りには
            </p>

            {/* Additional text with new font size */}
            {/* <p className="vertical-text text-2xl lg:text-2xl mr-2">
              不思議な縁
            </p> */}
            <p className="vertical-text text-2xl lg:text-2xl mr-2">
              酒の神が引き寄せた不思議な縁
            </p>
            <p className="vertical-text text-2xl lg:text-2xl mr-4">
              富士山からの恵みと
            </p>
          </>
        ) : (
          <div className="flex border-0 border-red-400 w-[80vw] md:w-[60vw] lg:w-[40rem] ml-0 lg:ml-[10rem]">
            <p className="en-vertical-text md:mr-4 mr-2 text-sm lg:text-base">
              ---- Message / History / Region
            </p>
            <p className="en-vertical-text mr-4 md:mr-8 text-sm lg:text-base">
              READ MORE
              <Image
                className="inline-block relative left-[10%] mt-5"
                src="/READMORE_DROP.png"
                width={16}
                height={50}
                alt="nature video"
              />
            </p>

            <section>
              <div className="text-lg lg:text-2xl mb-6">
                <p>A magical bond brought about</p>
                <p>by the blessings of Mt.Fuji</p>
                <p>and the god of sake</p>
              </div>
              <div className="text-sm md:text-base">
                <p className=" md:text-base text-sm text-left md:text-md mr-0">
                  Abundant, high-quality water and rice are essential for sake
                  brewing, and Gotemba has the foundation for both.
                </p>
              </div>
            </section>
          </div>
        )}
      </div>

      <section className="grid border-0 border-yellow-200 place-items-center lg:place-items-start lg:flex w-[90vw] lg:w-[80vw] xl:w-[70vw] relative left-1/2 -translate-x-1/2 lg:justify-between mt-[10%]">
        {lang === "jp" ? (
          <div className="border-0 border-red-300 mr-0 lg:mr-8 mb-10 lg:mb-0 w-[22rem] sm:w-[30rem]">
            <Image
              className="w-[100%]"
              src="/TOPPAGE_LOCATION_PICT_2.png"
              width={500}
              height={300}
              alt="nature video"
            />

            <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
              <p className="en-vertical-text mr-4 text-sm lg:text-base">
                ---- History
              </p>
              <p className="en-vertical-text mr-4 text-sm lg:text-base">
                READ MORE
                <Image
                  className="inline-block relative left-[10%] mt-3"
                  src="/READMORE_DROP.png"
                  width={15}
                  height={50}
                  alt="nature video"
                />
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-2">
                食物を供給する土地でした。
              </p>
              {/* <p className="vertical-text text-base lg:text-2xl mr-2">
                  伊勢神宮の荘園となり、
                </p> */}
              <p className="vertical-text text-base lg:text-2xl mr-2">
                当地は平安時代には伊勢神宮の荘園となり、
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-2">
                神饌（しんせん）を調理する建物のことです。
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-[15%]">
                厨は台所を意味し、
              </p>

              <div className="absolute top-[-30%] right-6 flex">
                <p className="vertical-text text-base lg:text-2xl dropShadow">
                  御厨（みくりや）と呼ばれていました
                </p>
                <p className="vertical-text text-base lg:text-2xl dropShadow">
                  かつてこの土地は、
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:mr-8 mb-10 lg:mb-0 w-[22rem] sm:w-[30rem] border-0 border-red-400">
            <Image
              className="w-[100%]"
              src="/TOPPAGE_LOCATION_PICT_2.png"
              width={500}
              height={300}
              alt="nature video"
            />

            <div className="flex mt-6">
              <p className="en-vertical-text md:mr-4 mr-2 text-sm lg:text-base">
                ---- History
              </p>
              <p className="en-vertical-text mr-4 md:mr-8 text-sm lg:text-base">
                READ MORE
                <Image
                  className="inline-block relative left-[10%] mt-5"
                  src="/READMORE_DROP.png"
                  width={16}
                  height={50}
                  alt="nature video"
                />
              </p>

              <section>
                <div className="text-base lg:text-xl mb-4">
                  <p>This area was once called Mikuriya</p>
                </div>
                <div className="text-sm md:text-base">
                  <p>became a manor of Ise Shrine, supplying food.</p>
                  <p>During the Heian period, this land</p>
                  <p>where offerings for the gods were prepared.</p>
                  <p>
                    &quot;Kuriya&quot; means kitchen, referring to a building
                  </p>
                </div>
              </section>
            </div>
          </div>
        )}

        {lang === "jp" ? (
          <div className="w-[22rem] sm:w-[30rem]">
            <Image
              className="w-[100%] border-0 border-cyan-400"
              src="/LOCATION_IMG_3_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />

            <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
              <p className="en-vertical-text mr-4 text-sm lg:text-base">
                ---- Team Gotemba
              </p>
              <p className="en-vertical-text mr-4 text-sm lg:text-base">
                READ MORE
                <Image
                  className="inline-block relative left-[10%] mt-3"
                  src="/READMORE_DROP.png"
                  width={15}
                  height={50}
                  alt="nature video"
                />
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-2">
                なんといっても人です。
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-2">
                酒造りに欠かせないものは、
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-2">
                様々な繫がり「縁」を具現化したものです。
              </p>
              <p className="vertical-text text-base lg:text-2xl mr-[15%]">
                わたしたち御厨榮蔵のシンボルマークは、
              </p>
              <div className="absolute top-[-30%] right-6 flex">
                <p className="vertical-text text-base lg:text-2xl dropShadow">
                  未来に紡ぐ酒造り
                </p>
                <p className="vertical-text text-base lg:text-2xl dropShadow">
                  御殿場の地で根を張った
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[22rem] sm:w-[30rem] border-0 border-red-400">
            <Image
              className="w-[100%]"
              src="/LOCATION_IMG_3_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />

            <div className="flex mt-6">
              <p className="en-vertical-text md:mr-4 mr-2 text-sm lg:text-base">
                ---- Team Gotemba
              </p>
              <p className="en-vertical-text mr-4 md:mr-8 text-sm lg:text-base">
                READ MORE
                <Image
                  className="inline-block relative left-[10%] mt-5"
                  src="/READMORE_DROP.png"
                  width={16}
                  height={50}
                  alt="nature video"
                />
              </p>

              <section>
                <div className="text-base lg:text-xl mb-4">
                  <p>Sake brewing that has taken root in the</p>
                  <p>Gotemba area and is being spun towards</p>
                  <p>the future</p>
                </div>
                <div className="text-sm md:text-base">
                  <p>The symbol at Mikuriya Sakaegura embodies</p>
                  <p>various connections or &quot;en&quot;.</p>
                  <p>People are undoubtedly the most</p>
                  <p>essential element in sake brewing.</p>
                </div>
              </section>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Location;
