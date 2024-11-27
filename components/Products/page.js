"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
const Products = () => {
  const fadeInProducts = useRef(null);

  useEffect(() => {
    const target = fadeInProducts.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".productHead").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 9
            }s`;
          });
        } else {
          document.querySelectorAll(".productHead").forEach((item, index) => {
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
            // className=" w-[100%]"
            src="/SPRING_WATER_ILLUSTRATION_SET.png"
            width={3000}
            height={300}
            alt="nature video"
          />
        </div>

        <div ref={fadeInProducts} className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image
            className="productHead opacity-0 w-[2rem] sm:w-[4rem] lg:w-[6rem]"
            src="/LOGO_2_BK.png"
            width={100}
            height={300}
            alt="nature video"
          />
           <div className="text-lg sm:text-3xl lg:text-5xl mt-3">
            <p className="productHead opacity-0 en-vertical-text">P</p>
            <p className="productHead opacity-0 en-vertical-text">R</p>
            <p className="productHead opacity-0 en-vertical-text">O</p>
            <p className="productHead opacity-0 en-vertical-text">D</p>
            <p className="productHead opacity-0 en-vertical-text">U</p>
            <p className="productHead opacity-0 en-vertical-text">C</p>
            <p className="productHead opacity-0 en-vertical-text">T</p>
            <p className="productHead opacity-0 en-vertical-text">S</p>
          </div>
        </div>
      </div>

      <div className="mt-14 lg:mt-24 relative grid place-items-center">
        <Image
          className="w-[90%] lg:w-[80%]"
          src="/FV_PRODUCTS_BACKGROUND.jpg"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl dropShadowblack">
        私たちのために
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16 text-red-600">
        <p className="vertical-text text-base lg:text-2xl mr-0">
          見飽きることはありません︒
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          毎日眺めていても
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">
          東側から望む富士の稜線はたおやかで︑
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-4">
          富士山をつねに見上げる御殿場︒
        </p>
        <p className="vertical-text text-base lg:text-2xl mr-0">酒造りを</p>
        {/* </p> */}
      </div>

      <section className="grid place-items-center lg:flex w-[90%] lg:w-[80%] xl:w-[70%] relative left-1/2 -translate-x-1/2 items-center lg:justify-between">
    {/* <div className="">
      
      <div className="relative text-red-600">
      <Image
       className="w-[20rem] mt-6"
       src="/SAKAE_SAKE_IMG_DUMMY.png"
       width={500}
       height={300}
       alt="nature video"
      />
      </div>

   
      <div className="relative mt-6 lg:mt-16 border border-black p-4 max-w-[20rem] mx-auto text-left text-black text-sm font-serif">
  
      <h2 className="text-lg font-bold text-black mb-2">純米吟醸</h2>
      <h1 className="text-2xl font-bold text-black mb-4">雪解 <span className="en-text">YUKIGE</span></h1>

   
      <div className="grid grid-cols-2 gap-y-2 mb-4">
       <p>品目</p>
       <p className="text-right">日本酒</p>
       <p>アルコール分</p>
       <p className="text-right">16度</p>
       <p>原材料名</p>
       <p className="text-right">米（国産）、米麹（国産米）</p>
       <p>精米歩合</p>
       <p className="text-right">60％</p>
       <p>容量</p>
       <p className="text-right">720mL</p>
       <p>酵母</p>
       <p className="text-right">静岡県酵母</p>
      </div>

    
      <p className="border-t border-black pt-2 text-xs">
       直射日光をさけ冷暗所で保管してください。
      </p>
      <p className="text-xs">開栓後はお早めにお飲みください。</p>

     
      <div className="flex justify-between items-center mt-4">
       <p className="text-xs">御厨楽蔵</p>
       <p className="text-xs font-bold">NEW YEAR LIMITED EDITION 2025</p>
      </div>
    </div>
    </div> */}
         
         <div className="">
          <div className=" relative text-red-600">
            <Image
              className="w-[20rem] mt-6"
              src="/SAKAE_SAKE_IMG_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="text-red-600 vertical-text text-base lg:text-2xl mr-0">
              見飽きることはありません︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              毎日眺めていても
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              東側から望む富士の稜線はたおやかで︑
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-4 text-red-600">
              富士山をつねに見上げる御殿場︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              酒造りを <span className="en-vertical-text">SAKAE</span>
            </p>
          </div>
        </div> 


        <div className="">
          <div className=" relative text-red-600">
            <Image
              className="w-[20rem] mt-6"
              src="/SAKUYA_SAKE_IMG_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="text-red-600 vertical-text text-base lg:text-2xl mr-0">
              見飽きることはありません︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              毎日眺めていても
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              東側から望む富士の稜線はたおやかで︑
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-4 text-red-600">
              富士山をつねに見上げる御殿場︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              酒造りを <span className="en-vertical-text">SAKUYA</span>
            </p>
          </div>
        </div>

        <div>
          <div className=" relative text-red-600">
            <Image
              className="w-[20rem] mt-6"
              src="/PREMIUM_SAKE_IMG_DUMMY.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              見飽きることはありません︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              毎日眺めていても
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              東側から望む富士の稜線はたおやかで︑
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-4 text-red-600">
              富士山をつねに見上げる御殿場︒
            </p>
            <p className="vertical-text text-base lg:text-2xl mr-0">
              酒造りを <span className="en-vertical-text">Premium</span>
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4 grid place-items-center">
        <p>VIEW ALL</p>
        <Image
          src="/READMORE_DROP.png"
          width={22}
          height={30}
          alt="nature video"
        />
      </div>
    </div>
  );
};

export default Products;
