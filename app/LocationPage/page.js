'use client'
import React, { useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/page";

import { useSelector } from "react-redux";

const StoryPage = () => {

  const vidRef = useRef(null);
  const imgRef = useRef(null);

  const lang = useSelector((state) => state.reducer1.lang); // Get language from Redux

  // Function to play the video
  const handleMouseEnter = () => {
    vidRef.current.style.opacity = 1;
    imgRef.current.style.opacity = 0;

    vidRef.current.play();
  };

  // Function to pause the video
  const handleMouseLeave = () => {
    vidRef.current.style.opacity = 0;
    imgRef.current.style.opacity = 1;
    vidRef.current.pause();
  };

  return (
    <div className="">
      {/* Main Story Section */}
      <div className="relative h-[100vh] w-[100%] bg-neutral-600 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-[10]">
        <Image
            className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out" // Add transition to the image
            ref={imgRef}
            src={"/LOCATION_IMG_DUMMY.png"}
            width={1700}
            height={1000}
            alt="Background Image"
            style={{ opacity: 1 }} // Initial opacity for the image
          />

           {/* Video */}

          <div className="absolute inset-0 z-[0]">

          <video
              muted
              loop
              ref={vidRef}
              src="/LOCATION.mp4"
              className="absolute w-[100%] h-[100%] object-cover object-center transition-opacity duration-1000 ease-in-out" // Add transition to the video
              style={{ opacity: 0 }} // Initial opacity for the video
            />

          </div>

        </div>

        
        {/* Clouds */}
        <div className="clouds absolute top-10 left-0 h-[100%] w-[100%] z-[20]">
          {/* Cloud 1 - Slow Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud1.png"
            style={{ "--i": 1 }}
            width={2100}
            height={100}
            alt="Cloud 1"
          />
          {/* Cloud 2 - Fast Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud2.png"
            style={{ "--i": 2 }}
            width={2100}
            height={100}
            alt="Cloud 2"
          />
          {/* Cloud 3 - Medium Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud3.png"
            style={{ "--i": 3 }}
            width={2100}
            height={100}
            alt="Cloud 3"
          />
          {/* Cloud 4 - Reverse Slow */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud4.png"
            style={{ "--i": 4 }}
            width={2100}
            height={100}
            alt="Cloud 4"
          />
          {/* Cloud 5 - Slow Speed */}
          <Image
            className="cloudsimage mb-20 md:mb-0"
            src="/cloud5.png"
            style={{ "--i": 5 }}
            width={2100}
            height={100}
            alt="Cloud 5"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-4 z-[40] relative top-12 w-[100vw] items-center pt-52 mt-0 border-0 border-green-500">
          <div className="w-fit basis-1/2">
            <Image src={"/LOGO_WH.png"} width={150} height={30} alt="logo" />
          </div>
          <p
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           className="text-6xl text-slate-50 basis-1/2 ml-3 cursor-pointer">LOCATION</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-[50%] bottom-2 z-[50]">
          <p className="en-vertical-text-scroll scroll-text text-black">
            scroll
          </p>
          <Image
            className="scroll-img"
            src={"/SCROLL_DROP_ELEMENT.png"}
            width={20}
            height={100}
            alt="Scroll Indicator"
          />
        </div>

        {/* Mist Image at the Bottom */}
        <div className="absolute -bottom-9 md:-bottom-40 left-0 w-full z-[20]">
          <Image
            className="object-cover w-full"
            src={"/MIST_IMG.png"}
            width={1700}
            height={200}
            alt="Mist Image"
          />
        </div>
      </div>

      <section className="w-[100%] my-16 relative grid place-items-center">
        { lang === 'jp' ? (
        <>
        <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          
          <div className="flex justify-center mt-10 ">
            <p className="vertical-text text-2xl font-medium">

            </p>
            <p className="vertical-text text-2xl font-medium">不思議な縁</p>
            <p className="vertical-text text-2xl font-medium">酒の神が引き寄せた</p>
            <p className="vertical-text text-2xl font-medium">富士山からの恵みと</p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
        ”郷土
        </p>
        </>):(<>

          <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          
          <div className="justify-center mt-12 md:-ml-[150%] -ml-[130%]">
            <p className="text-xl md:text-2xl font-medium whitespace-nowrap">A magical bond brought about by the blessings of Mt.</p>
            <p className="text-xl md:text-2xl text-2xl font-medium whitespace-nowrap ml-[45%]"> Fuji and the god of sake</p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
        ”郷土
        </p>
        
        
        </>)}
      </section>

      {/*Part 1 Benefit  */}

      <section className="grid place-items-center overflow-hidden relative">
       { lang === 'jp' ? (
        <>
        <div className="absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl">Mt.Fuji Benefit</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>
        </>):(<>
          <div className="absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl ml-1 mb-2">Mt.Fuji Benefit</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>
        </>)}

        <main className="w-[75%]">
        { lang === 'jp' ? (
        <>

          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/MtFUJI_BENEFIT_PICT_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          恵まれた自然環境が
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          オンリーワンの日本酒を生み出します
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          2025年1月、御厨榮蔵は富士山の東麓に居を構えました。御殿場は、平均標高が約500mの夏でも涼しい高原の町です。日本酒造りには豊富で良質な水と米が欠かせません。御殿場にはその素地があります。
          </p>

        </>):(<>
           
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/MtFUJI_BENEFIT_PICT_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          The blessed natural environment creates a unique Japanese sake
          </p>
          

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          In January 2025, Mikuriya Sakaegura established its presence at the eastern foot of Mt. Fuji. Gotemba is a highland town with an average altitude of about 500m, cool even in summer. Abundant, high-quality water and rice are essential for sake brewing, and Gotemba has the foundation for both.
          </p>
        
        </>)}  

          <Image
            className="w-[100%] lg:w-[62%] mt-20 relative left-1/2 -translate-x-1/2"
            src="/MtFUJI_BENEFIT_PICT_2.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
        
  
        </main>
        <p></p>

        { lang === 'jp' ? (
        <>
        </>):(<>
        </>)}

        <main className="w-[75%]">

        { lang === 'jp' ? (
        <>

          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_3.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          こんこんと
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          絶えず湧き出る清涼な水
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          富士山の雪解け水が数十年という歳月をかけて地中でろ過され、湧出したものが伏流水です。御殿場の伏流水は軟水でまろやかな味わいが特徴。日本で多く飲まれているのも軟水ですが、素材を活かす日本食が生み出されたのもこの軟水あってのことです。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          日本酒の成分のほとんどは水。洗米や醸造など、日本酒造りの過程でも良質かつ大量の水を必要とします。絶えずこんこんと湧き出る良質な水が、日本酒の素となります。
          </p> 
        </>):(<>

          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_3.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          
          <p className="text-center text-black text-2xl lg:text-3xl mt-12">
          Continuously flowing pure spring water
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          The snowmelt from Mt. Fuji is filtered through the ground over decades, emerging as underground water. Gotemba&apos;s underground water is soft water characterized by a mild taste. Soft water is widely consumed in Japan and has contributed to the development of Japanese cuisine that brings out the best in ingredients.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Water makes up most of the components in sake. High-quality water in large quantities is also needed throughout the sake-making process, from washing rice to brewing. The constantly flowing, high-quality water becomes the basis for sake.
          </p> 
        
        
        </>)}

          
  
        </main>
        <p></p>


        { lang === 'jp' ? (
        <>
        {/* <div className="absolute top-[10%] left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl">選りすぐりの米、伏流水で育てた米を目指して
          </p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[700vh] bg-black"></p>
        </div> */}
        </>):(<>

        {/* <div className="absolute top-[7%] left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl ml-1 mb-2">Aiming to grow rice using carefully selected</p>
          <p className="en-vertical-text text-2xl lg:text-3xl ml-1">varieties and underground water </p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div> */}
        
        
        </>)}

        <main className="w-[75%]">
          
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_4.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

         { lang === 'jp' ? (
          <>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          選りすぐりの米、
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          伏流水で育てた米を目指して
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          そして、米。昼夜の寒暖差と富士山の伏流水を活かして栽培された御殿場産の米は県の特産品にもなっています。ごてんばこしひかりはコンテストで数々の賞に輝くほどの極上米。御殿場はいわゆる米どころでもあります。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2 mb-[1%]">
          そんな稲作に適した環境のなかで、酒米（酒造好適米）作りも始めました。静岡県内で令和５年産から新たに登場した「令和誉富士（れいわほまれふじ）」など、御厨榮蔵では主に静岡県産の酒米を使用します。ゆくゆくは、御厨榮蔵の日本酒の素となる全てを静岡県産の酒米で生み出すことを目指しています。
          </p>

          </>):(<>
          
          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          Aiming to grow rice using carefully selected
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          varieties and underground water
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Rice is another crucial element. Gotemba-grown rice, cultivated using the temperature difference between day and night and Mt.Fuji&apos;s underground water, has become a prefectural specialty. &quot;Gotemba Koshihikari&quot; is a premium rice that has won numerous awards in contests. Gotemba is indeed a rice-producing region.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2 mb-[1%]">
          In this environment suitable for rice cultivation, we have also begun growing sake rice. Mikuriya Sakaegura primarily uses sake rice from Shizuoka Prefecture, including the newly introduced &quot;Reiwa Homare Fuji&quot; from 2023. Our goal is to eventually produce all the ingredients for our sake using Shizuoka-grown sake rice.
          </p>
          
          </>)} 
  
        </main>
        <p></p>


      </section>

      {/* Part 2 Benefit */}

      {/* <section className="grid place-items-center overflow-hidden relative mt-[10%]">
      { lang === 'jp' ? (
        <>
        <div className="absolute top-[10%] left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl">こんこんと絶えず湧き出る清涼な水
          </p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>
        </>):(<>
          <div className="absolute top-[10%] left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl ml-1">Continuously flowing pure spring water
          </p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div> 
        </>)}

        <main className="w-[75%]">

        { lang === 'jp' ? (
        <>

          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_3.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          こんこんと
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          絶えず湧き出る清涼な水
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          富士山の雪解け水が数十年という歳月をかけて地中でろ過され、湧出したものが伏流水です。御殿場の伏流水は軟水でまろやかな味わいが特徴。日本で多く飲まれているのも軟水ですが、素材を活かす日本食が生み出されたのもこの軟水あってのことです。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          日本酒の成分のほとんどは水。洗米や醸造など、日本酒造りの過程でも良質かつ大量の水を必要とします。絶えずこんこんと湧き出る良質な水が、日本酒の素となります。
          </p> 
        </>):(<>

          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_3.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          
          <p className="text-center text-black text-2xl lg:text-3xl mt-12">
          Continuously flowing pure spring water
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          The snowmelt from Mt. Fuji is filtered through the ground over decades, emerging as underground water. Gotemba&apos;s underground water is soft water characterized by a mild taste. Soft water is widely consumed in Japan and has contributed to the development of Japanese cuisine that brings out the best in ingredients.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Water makes up most of the components in sake. High-quality water in large quantities is also needed throughout the sake-making process, from washing rice to brewing. The constantly flowing, high-quality water becomes the basis for sake.
          </p> 
        
        
        </>)}

          
  
        </main>
        <p></p>
      </section> */}

      {/* Part 3 Benefit */}

      {/* <section className="grid place-items-center overflow-hidden relative mt-[10%]">
      { lang === 'jp' ? (
        <>
        <div className="absolute top-[10%] left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl">選りすぐりの米、伏流水で育てた米を目指して
          </p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[700vh] bg-black"></p>
        </div>
        </>):(<>

        <div className="absolute top-[7%] left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-3xl ml-1 mb-2">Aiming to grow rice using carefully selected</p>
          <p className="en-vertical-text text-2xl lg:text-3xl ml-1">varieties and underground water </p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>
        
        
        </>)}

        <main className="w-[75%]">
          
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_4.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

         { lang === 'jp' ? (
          <>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          選りすぐりの米、
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          伏流水で育てた米を目指して
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          そして、米。昼夜の寒暖差と富士山の伏流水を活かして栽培された御殿場産の米は県の特産品にもなっています。ごてんばこしひかりはコンテストで数々の賞に輝くほどの極上米。御殿場はいわゆる米どころでもあります。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2 mb-[15%]">
          そんな稲作に適した環境のなかで、酒米（酒造好適米）作りも始めました。静岡県内で令和５年産から新たに登場した「令和誉富士（れいわほまれふじ）」など、御厨榮蔵では主に静岡県産の酒米を使用します。ゆくゆくは、御厨榮蔵の日本酒の素となる全てを静岡県産の酒米で生み出すことを目指しています。
          </p>

          </>):(<>
          
          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          Aiming to grow rice using carefully selected
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          varieties and underground water
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Rice is another crucial element. Gotemba-grown rice, cultivated using the temperature difference between day and night and Mt.Fuji&apos;s underground water, has become a prefectural specialty. &quot;Gotemba Koshihikari&quot; is a premium rice that has won numerous awards in contests. Gotemba is indeed a rice-producing region.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2 mb-[15%]">
          In this environment suitable for rice cultivation, we have also begun growing sake rice. Mikuriya Sakaegura primarily uses sake rice from Shizuoka Prefecture, including the newly introduced &quot;Reiwa Homare Fuji&quot; from 2023. Our goal is to eventually produce all the ingredients for our sake using Shizuoka-grown sake rice.
          </p>
          
          </>)} 
  
        </main>
        <p></p>
      </section> */}


      <section className="w-[100%] my-16 grid place-items-center mt-30">
        {/* <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
          <div className="flex text-red-500 justify-between mt-10">
            <p className="vertical-text text-2xl font-medium">
            不思議な縁
            </p>
            <p className="vertical-text text-2xl font-medium">酒の神が引き寄せた</p>
            <p className="vertical-text text-2xl font-medium">富士山からの恵みと</p>
          </div>
        </div> */}
      </section>

      <section className=" grid place-items-center relative overflow-hidden">
        <div className=" absolute lg:top-[6%] top-[6%] left-[2vw]">
        <p className="en-vertical-text text-4xl ">History</p>
        <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
        </div>

        <main className="w-[75%]">
        <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/HISTORY_PICT_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

         { lang === 'jp' ? (
          <>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          御厨の厨（くりや）は神様の台所という意味です
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          かつてこの土地は、御厨（みくりや）と呼ばれていました
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          現在の御殿場市、小山町、裾野市の一帯はかつて御厨と呼ばれていました。厨は台所を意味し、神饌を調理する建物のことです。当地は平安時代には伊勢神宮の荘園となり、食物を供給する土地でした。御厨と呼ばれた荘園は日本各地にあり、御殿場もそのひとつだったのです。
          </p>
          
          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          古くから富士山の恩恵を受けてきた当地。富士山の主祭神はコノハナサクヤヒメノミコト（木花之佐久夜毘売命）という女性の神様です。じつはお酒の神様ともいわれています。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          コノハナサクヤヒメノミコトは、夫のニニギノミコト（瓊瓊杵尊）との間に3人の子どもを授かります。無事に出産したことを祝い、父であるオオヤマツミノカミ（大山祇神）が初めて酒を造って振舞いました。この逸話から、オオヤマツミノカミは酒造りの祖としてサケトケカミ（酒解神）、酒造りのきっかけを与えたコノハナサクヤヒメノミコトはサケトケコカミ（酒解子神）とも呼ばれています。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          御厨の歴史、そしてわたしたちの氏神様がお酒の神様でもあったというエピソード。御厨榮蔵の環境は不思議な縁に手繰り寄せられているようです。
          </p>

          </>):(<>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          The word &quot;kuriya&quot; in the name &quot;Mikuriya&quot; means &quot;kitchen for the gods&quot;.
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          This area was once called Mikuriya
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          The area now comprising Gotemba City, Oyama Town, and Susono City was formerly known as Mikuriya. &quot;Kuriya&quot; means kitchen, referring to a building where offerings for the gods were prepared. During the Heian period, this land became a manor of Ise Shrine, supplying food. Manors called Mikuriya existed throughout Japan, and Gotemba was one of them.
          </p>
          
          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          This region has long benefited from Mt. Fuji. The main deity of Mt. Fuji is Konohanasakuyahime-no-mikoto, a female god who is also considered the god of sake.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">         
          Konohanasakuyahime-no-mikoto was blessed with three children with her husband Ninigi-no-mikoto. To celebrate her safe delivery, her father Oyamatsumi-no-kami brewed sake for the first time and served it. From this anecdote, Oyamatsumi-no-kami is known as Saketoke-kami as the founder of sake brewing, while Konohanasakuyahime-no-mikoto, who inspired the sake brewing, is called Saketoke-kokami.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          The history of Mikuriya and the episode of our local deity also being the god of sake - it seems that Mikuriya Sakaegura&apos;s environment is drawn to a magical connection.
          </p>
          
          
          
          </>)}

        </main>
        <p></p>
      </section>


      


      <section className="w-[100%] my-16 grid place-items-center mt-30">
        {/* <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
          <div className="flex text-black justify-between mt-10">
            <p className="vertical-text text-2xl font-medium">
            未来に紡ぐ酒造り
            </p>
            <p className="vertical-text text-2xl font-medium">根を張った</p>
            <p className="vertical-text text-2xl font-medium">御殿場の地で</p>
          </div>
        </div> */}
      </section>

      <section className=" grid place-items-center relative overflow-hidden">
        <div className=" absolute lg:top-[6%] top-[6%] left-[2vw]">
          <p className="en-vertical-text text-4xl ">Team Gotemba</p>

          <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
        </div>

        <main className="w-[75%]">
        <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/TEAM_GOTEMBA_PICT_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          { lang === 'jp' ? (
          <>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          御殿場の地で根を張った
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          未来に紡ぐ酒造り
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          わたしたち御厨榮蔵のシンボルマークは、様々な繫がり「縁」を具現化したものです。酒造りに欠かせないものは、なんといっても人です。ふるさとである御殿場の未来を考えたときにも人の存在は不可欠。将来を担う若者がふるさとで誇れるもののひとつに、地酒が加わることができたなら、そんな強い思いがあります。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          富士山からの恵みの水で、御殿場の地で、御殿場の人びとが醸す日本酒。
          わたしたちによるわたしたちの酒です。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          酒蔵の多くは何代にもわたり、連綿と受け継がれてきた繫がりが今に続いています。つくる人が変わっても酒だけは何十年何百年を経ても変わらず、生き続けています。そこで受け継がれているものは単に酒の造り方だけではないと思います。情熱や志といった人の原動力となる心も然り。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          豊かな資源を活かし、原料づくりからお客さまのお手元に届くまで、すべてを「オール御殿場」で造る日本酒。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          御厨榮蔵の地酒が、新たな御殿場の特産品として多くの人びとを幸せにすること。なによりも、感動をもたらす存在となることを目指します。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          そして、御殿場から日本全国へ、世界へ。伏流水のごとく富士山麓から絶えず発信していきます。
          </p>

          </>):(<>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          Sake brewing that has taken root in the Gotemba area
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          and is being spun towards the future
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          The symbol at Mikuriya Sakaegura embodies various connections or &quot;en&quot;. People are undoubtedly the most essential element in sake brewing. When considering the future of our hometown Gotemba, people are indispensable. We have a strong desire for local sake to become one of the things young people, who will lead the future, can be proud of in their hometown.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Japanese sake brewed by the people of Gotemba, in Gotemba, with the blessed water from Mt. Fuji.
          This is our sake, by us and for us.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Many sake breweries have continued their connections over generations. Even as brewers change, the sake remains unchanged for decades or centuries. What is passed down is not just the method of brewing sake, but also the passion and aspirations that drive people.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          Utilizing rich resources, we aim to produce Japanese sake that is &quot;All Gotemba&quot; from ingredient production to delivery to customers.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          We strive for Mikuriya Sakaegura&apos;s local sake to become a new Gotemba specialty that brings happiness to many people and, above all, to be an entity that brings excitement.
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[100%] lg:w-[54%] relative left-[52%] -translate-x-1/2">
          And from Gotemba to all of Japan, and to the world. Like underground water, we will continuously transmit from the foot of Mt. Fuji
          </p>
          
          
          </>)}


        </main>
        <p></p>
      </section>


      <Footer />
    </div>
  );
};

export default StoryPage;
