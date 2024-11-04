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
        <p className="en-vertical-text md:mr-4 mr-2 text-sm md:text-base md:-ml-[25%] -ml-[73%] md:mt-2 mt-6">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text md:mr-4 mr-8 text-sm md:text-base md:mt-2 mt-6 mr-12">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p>
        <div className="grid grid-cols-1 absolute md:mt-[11%] mt-[30%] md:ml-[2%] -ml-[15%]">
        <p className=" md:text-base text-sm text-left md:text-md mr-0">
        Abundant, high-quality water and rice
        </p>
        <p className="  md:text-base text-sm text-left md:text-md mr-0">
        are essential for sake brewing,
        </p>
        <p className="  md:text-base text-sm text-left md:text-md mr-0">
        and Gotemba has the foundation for both.
        </p>
        </div>

        
        <div className="grid grid-cols-1 absolute md:ml-[2%] -ml-[27%] mt-4 md:mt-0">
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
        

          <div className="flex flex-col items-center ml-9 relative w-full mt-6 lg:mt-7">
  {/* side part */}
  <div className="flex flex-row items-center absolute left-2 top-4 transform -translate-x-full">
    <p className="en-vertical-text text-sm lg:text-base mr-2 mb-16">---- Shuzo</p>
    <p className="en-vertical-text text-sm lg:text-base">
      READ MORE
      <Image
        className="inline-block relative left-2 mt-3"
        src="/READMORE_DROP.png"
        width={15}
        height={50}
        alt="nature video"
      />
    </p>
  </div>

  {/* top text */}
  <div className="text-center mt-2 md:mt-1 md:-ml-11 -ml-[29%]">
    <p className="text-base md:text-2xl whitespace-nowrap">This area was once called Mikuriya</p>
  </div>

  {/* bottom text */}
  <div className="flex flex-col-reverse items-start mt-8 md:mt-8 md:-ml-[16%] -ml-[18%]">
    <p className="md:text-base text-sm mr-2 whitespace-nowrap">became a manor of Ise Shrine, supplying food.</p>
    <p className="md:text-base text-sm mr-2 whitespace-nowrap">During the Heian period, this land</p>
    <p className="md:text-base text-sm mr-2 whitespace-nowrap">where offerings for the gods were prepared.</p>
    <p className="md:text-base text-sm mr-2 whitespace-nowrap">
      &quot;Kuriya&quot; means kitchen, referring to a building
    </p>
  </div>
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

          <div className="flex flex-col items-center relative w-full mt-6 md:mt-16">
  {/* Side part */}
  <div className="flex flex-row items-center absolute md:left-10 left-11 transform -translate-x-full md:-bottom-6 -bottom-[24%]">
    <p className="en-vertical-text text-sm md:text-base mr-2 mb-16 md:mb-[60%]">---- Team Gotemba</p>
    <p className="en-vertical-text text-sm md:text-base mb-14 md:mb-[60%]">
      READ MORE
      <Image
        className="inline-block relative left-2 mt-3"
        src="/READMORE_DROP.png"
        width={15}
        height={50}
        alt="nature video"
      />
    </p>
  </div>

  {/* Center text */}
  <div className="flex flex-col-reverse items-start mt-[20%] md:mt-9 md:-ml-[8%] -ml-[8%]">
    <p className=" md:text-base text-sm mr-2 whitespace-nowrap">essential element in sake brewing.</p>
    <p className=" md:text-base text-sm mr-2 whitespace-nowrap">People are undoubtedly the most</p>
    <p className=" md:text-base text-sm mr-2 whitespace-nowrap">various connections or &quot;en&quot;.</p>
    <p className=" md:text-base text-sm mr-2 whitespace-nowrap">The symbol at Mikuriya Sakaegura embodies</p>
  </div>

  {/* Right text */}
  <div className="absolute top-0 md:-right-[18%] right-[9%] flex flex-col items-start mt-4 md:-mt-9 ">
    <p className=" text-base md:text-2xl whitespace-nowrap">Sake brewing that has taken root in the Gotemba</p>
    <p className=" text-base md:text-2xl whitespace-nowrap"> area and is being spun towards the future</p>
  </div>
</div>


          
          
        </div>
      
      </>)}  
        
      </section>
    </div>
  );
};

export default Location;
