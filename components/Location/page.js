"use client"
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

        <div ref={fadeInLocation} className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
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
          src="/LOCATION_IMG_DUMMY.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
          ものがたり
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16 mb-12">

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
        御殿場には素地が揃っています。
        </p>
        <p className="vertical-text text-base lg:text-md mr-0">
        米が欠かせません。
        </p>
        <p className="vertical-text text-base lg:text-md mr-0">
        豊富で良質な水と
        </p>
        <p className="vertical-text text-base lg:text-md mr-5">
        日本酒造りには
        </p>


        {/* Additional text with new font size */}
        <p className="vertical-text text-2xl lg:text-2xl mr-2">
        不思議な縁
        </p>
        <p className="vertical-text text-2xl lg:text-2xl mr-2">
        酒の神が引き寄せた
        </p>
        <p className="vertical-text text-2xl lg:text-2xl mr-4">
        富士山からの恵みと
        </p>

        </>  
      ):(

        <>
        <p className="en-vertical-text mr-4 text-sm lg:text-base -ml-[11%] mt-2">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text mr-4 text-sm lg:text-base mt-2 mr-12">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p>
        <div className="grid grid-cols-1 absolute mt-[9%] ml-[12%] mb-1">
        <p className=" text-base text-left lg:text-md mr-0">
        Abundant, high-quality water and rice
        </p>
        <p className=" text-base text-left lg:text-md mr-0">
        are essential for sake brewing,
        </p>
        <p className=" text-base text-left lg:text-md mr-0">
        and Gotemba has the foundation for both.
        </p>
        </div>

        
        <div className="grid grid-cols-1 absolute ml-[12%]">
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        A magical bond brought about
        </p>
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        by the blessings of Mt.Fuji 
        </p>
        <p className=" text-base lg:text-2xl mr-0 tracking-tighter">
        and the god of sake
        </p>
        </div>
      </>     
      )}
        
      </div>

      <section className="grid place-items-center lg:flex w-[90%] lg:w-[80%] xl:w-[70%] relative left-1/2 -translate-x-1/2 items-center lg:justify-between mt-[10%]">
      { lang === 'jp' ? (
        <>  
        <div className="">
          <div className="relative">
            <Image
              className="w-[30rem] mt-6"
              src="/LOCATION_IMG_2_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              ---- Shuzo
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
            <p className="vertical-text text-base lg:text-2xl mr-2">
            伊勢神宮の荘園となり、
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-2">
            当地は平安時代には
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-2">
            神饌（しんせん）を調理する建物のことです。
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-[15%]">厨は台所を意味し、</p>

            <p className="vertical-text text-base lg:text-2xl mr-0 absolute ml-[65%] -mt-[28%]">御厨（みくりや）と呼ばれていました</p>
            <p className="vertical-text text-base lg:text-2xl mr-0 absolute ml-[80%] -mt-[28%]">かつてこの土地は、</p>


          </div>
        </div>
        </>
      ):(<>
  
        <div className="">
          <div className="relative">
            <Image
              className="w-[30rem] mt-6"
              src="/LOCATION_IMG_2_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>
        

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              ---- Shuzo
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
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            became a manor of Ise Shrine, supplying food.
            </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            During the Heian period, this land
            </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            where offerings for the gods were prepared.
            </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            &quot;Kuriya&quot; means kitchen, referring to a building

            </p>

            <p className="en-vertical-text text-base lg:text-2xl mr-0 absolute ml-[65%] -mt-[28%]">This area was once called Mikuriya</p>

          </div>
          
        
        
      </div>
      </>
    )}

    { lang === 'jp' ? (
        <> 
        <div>
          <div className="relative">
            <Image
              className="w-[30rem] mt-6"
              src="/LOCATION_IMG_3_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

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
            <p className="vertical-text text-base lg:text-2xl mr-2">
            シンボルマークは、
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-[15%]">わたしたち御厨榮蔵の</p>

            <p className="vertical-text text-base lg:text-2xl mr-0 absolute ml-[65%] -mt-[28%]">未来に紡ぐ酒造り</p>
            <p className="vertical-text text-base lg:text-2xl mr-0 absolute ml-[80%] -mt-[28%]">御殿場の地で根を張った</p>

            
          </div>
        </div>
      </>):(<>
      
        <div>
          <div className="relative">
            <Image
              className="w-[30rem] mt-6"
              src="/LOCATION_IMG_3_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

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
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            essential element in sake brewing.
            </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            People are undoubtedly the most
            </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            various connections or &quot;en&quot;.
            </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-2">
            The symbol at Mikuriya Sakaegura embodies
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-2">
            シンボルマークは、
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-[15%]">わたしたち御厨榮蔵の</p>

            <p className="en-vertical-text text-base lg:text-2xl mr-0 absolute ml-[65%] -mt-[28%]">Sake brewing that has taken root in the Gotemba area </p>
            <p className="en-vertical-text text-base lg:text-2xl mr-0 absolute ml-[80%] -mt-[28%]">and is being spun towards the future
            </p>

            
          </div>
        </div>
      
      </>)}  
        
      </section>
    </div>
  );
};

export default Location;
