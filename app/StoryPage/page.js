'use client'
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/page";
import { useSelector } from "react-redux";

const StoryPage = () => {
  const vidRef = useRef(null);
  const imgRef = useRef(null);
  const lang = useSelector((state) => state.reducer1.lang); // Get language from Redux
  const [cloudZIndex, setCloudZIndex] = useState(0);

  // Autoplay video on page load
  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play().catch((err) =>
        console.error('Video playback failed:', err)
      );
    }
  }, []);

  // Handle mouse hover events
  const handleMouseEnter = () => {
    if (vidRef.current && imgRef.current) {
      vidRef.current.style.opacity = 0;
      imgRef.current.style.opacity = 1;
      vidRef.current.play();
    }
    setCloudZIndex(10); // Set clouds behind video
  };

  const handleMouseLeave = () => {
    if (vidRef.current && imgRef.current) {
      vidRef.current.style.opacity = 1;
      imgRef.current.style.opacity = 0;
    }
    setCloudZIndex(0); // Set clouds in front of video
  };


  return (
    <div className="">
      <div className="relative h-[100vh] w-[100%] bg-neutral-600 overflow-hidden">
        <div className="absolute inset-0 z-[10]">
          <Image
            className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
            ref={imgRef}
            src={"/FIRST_VIEW_STORY_BAACKGROUND_PICT.png"}
            width={1700}
            height={1000}
            alt="Background Image"
            style={{ opacity: 0 }}
          />

          {/* Video */}
          <div className="absolute inset-0 z-[0]">
            <video
              muted
              loop
              ref={vidRef}
              src="/STORY.mp4"
              className="absolute w-[100%] h-[100%] object-cover object-center transition-opacity duration-1000 ease-in-out"
              style={{ opacity: 1 }}
            />
          </div>
        </div>

        {/* Clouds with dynamic z-index */}
        <div className="absolute bottom-0" style={{ zIndex: cloudZIndex }}>
          <Image
            className="cloudsimage1"
            src={"/cloud1.png"}
            width={2100}
            height={100}
            alt="Cloud1"
          />
        </div>
        {/* Repeat for other cloud images, applying the same dynamic z-index */}
        <div className="absolute bottom-0" style={{ zIndex: cloudZIndex }}>
          <Image
            className="cloudsimage2"
            src={"/cloud2.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0" style={{ zIndex: cloudZIndex }}>
          <Image
            className="cloudsimage2"
            src={"/cloud3.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0" style={{ zIndex: cloudZIndex }}>
          <Image
            className="cloudsimage2"
            src={"/cloud4.png"}
            width={2100}
            height={100}
            alt="Cloud2"
          />
        </div>

        <div className="absolute bottom-0" style={{ zIndex: cloudZIndex }}>
          <Image
            className="cloudsimage2"
            src={"/cloud5.png"}
            width={2100}
            height={100}
            alt="Cloud2"
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
          className="text-6xl text-slate-50 basis-1/2 ml-3 cursor-pointer">STORY</p>
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
          
          <div className="flex justify-between mt-10">
            <p className="vertical-text text-2xl font-medium">
            ローカルチームです
            </p>
            <p className="vertical-text text-2xl font-medium">御厨榮蔵（みくりやさかえぐら）という</p>
            <p className="vertical-text text-2xl font-medium">わたしたちは</p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
          ”ものがたり
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
          
          <div className="flex-cols justify-between lg:mt-[45%] mt-[55%]">
            <p className=" text-xl lg:text-2xl font-medium whitespace-nowrap lg:-ml-[60%] -ml-[45%]">
            We are Mikuriya Sakaegura,
            </p>
            <p className=" text-xl lg:text-2xl font-medium whitespace-nowrap lg:ml-[0%] ml-[5%]">
            a local team.
            </p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
          ”ものがたり
        </p>
        
        
        
        </>)}


      </section>

      <section className="grid place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw]">
          {/* <p className="en-vertical-text text-2xl lg:text-3xl">富士山から湧く神の水と選りすぐりの米</p> */}
          { lang === 'jp' ? (
          <>
          <p className="en-vertical-text text-2xl lg:text-3xl">Message</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
          </>):(<>
          <p className="en-vertical-text text-2xl lg:text-3xl">Message</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[208vh] bg-black"></p>
          </>) }
        </div>

        <main className="w-[75%]">
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/MESSAGE_PICT_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          { lang === 'jp' ? (
          <>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          富士山から湧く神の水と
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          選りすぐりの米
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          霊峰富士の深い懐に包まれる御殿場。<br/>
          わたしたちが望む富士の稜線はたおやかで、毎日眺めていても見飽きることはありません。
          </p>

          <p className="text-lg lg:text-xl mt-12 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          富士山は雄大な眺めだけでなく、伏流水という自然の恵みも届けてくれています。
          御殿場市ではこの伏流水がわたしたち市民の飲み水でもあります。
          <br /><br />
          富士山の雪解け水が地中でろ過され、長い歳月を経て湧出る豊かな伏流水。
          この素晴らしい自然の恵みをもっと広く伝えるとともに、地域により良い形で還元する方法はないかと、
          つねづね考えていました。じつは伏流水は、御殿場での米作りにも寄与しています。
          御殿場の地は、寒暖差があり米作りに適した地勢です。
          富士山の水と御殿場の米。大地をありのままに醸せたら……それがまさに日本酒でした。
          </p>


          {/* <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
            富士山の雪解け水が地中でろ過され、長い歳月を経て湧出す豊かな伏流水。
            <span className="text-red-500">
              この恵まれ
              た素材を活かして何か地域貢献できないか、とつねづね考えていました。
            </span>{" "}
            じつは伏流水
            は、御殿場での米作りにも寄与しています。富士山の水と御殿場の米。大地をありのま
            まに醸せたら……それがまさに日本酒でした。
          </p> */}
          
          {/* <p className="text-lg lg:text-xl mt-12 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          富士山の雪解け水が長い歳月を経てろ過され、湧き出る豊かな伏流水。この素晴らしい自然の恵みをもっと広く伝えるとともに、地域により良い形で還元する方法はないかと、つねづね考えていました。じつは伏流水は、御殿場での米作りにも寄与しています。御殿場の地は、寒暖差があり米作りに適した地勢です。富士山の水と御殿場の米。大地をありのままに醸せたら……それがまさに日本酒でした。
          </p> */}

          </>):(<>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          Divine water springing from Mt. Fuji and carefully selected rice
          </p>
         

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          Gotemba, embraced by the deep bosom of the sacred Mt. Fuji. The ridge of Mt. Fuji that we gaze upon is gentle, and we never tire of looking at it every day. 
          </p>

          <p className="text-lg lg:text-xl mt-12 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          Mt. Fuji not only offers a majestic view but also provides us with the natural blessing of underground water. This underground water is also the drinking water for us, the citizens of Gotemba.
          </p>

          {/* <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
            富士山の雪解け水が地中でろ過され、長い歳月を経て湧出す豊かな伏流水。
            <span className="text-red-500">
              この恵まれ
              た素材を活かして何か地域貢献できないか、とつねづね考えていました。
            </span>{" "}
            じつは伏流水
            は、御殿場での米作りにも寄与しています。富士山の水と御殿場の米。大地をありのま
            まに醸せたら……それがまさに日本酒でした。
          </p> */}
          
          <p className="text-lg lg:text-xl mt-12 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          The rich underground water that emerges after being filtered through long years from the melted snow of Mt. Fuji. We have always been thinking about how to convey this wonderful gift of nature more widely and how to give back to the region in a better way. In fact, the underground water also contributes to rice cultivation in Gotemba. The land of Gotemba, with its temperature differences, is suitable for rice cultivation. The water from Mt. Fuji and the rice from Gotemba. We wanted to create something that truly embodies these gifts of nature. For us, the answer was clearly Japanese sake.
          </p>
          
          </>)}


          <Image
            className="w-[100%] lg:w-[62%] mt-20 relative left-1/2 -translate-x-1/2"
            src="/MESSAGE_PICT_2.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
        </main>
        <p></p>
      </section>

      <section className=" w-[100%] my-16 grid place-items-center">
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
              ローカルチームです
            </p>
            <p className="vertical-text text-2xl font-medium">御厨榮蔵という</p>
            <p className="vertical-text text-2xl font-medium">わたしたちは</p>
          </div>
        </div> */}
      </section>


      <section className="grid place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw]">
          {/* <p className="en-vertical-text text-2xl lg:text-3xl">この地に根ざす人びとと共に100</p>
          <p className="en-vertical-text text-2xl lg:text-3xl mt-2">年先の未来にも紡ぐ酒造りを</p> */}
           { lang === 'jp' ? (
          <>
          <p className="en-vertical-text text-2xl lg:text-3xl">Mission</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[300vh] bg-black"></p>
          </>):(<>
          <p className="en-vertical-text text-2xl lg:text-3xl">Mission</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[329vh] bg-black"></p>
          </>) }
        </div>

        <main className="w-[75%]">
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/MISSION_PICT_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

           
        { lang === 'jp' ? (
        <>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          この地に根ざす人びとと共に
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          100年先の未来にも紡ぐ酒造りを
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          そして、1882年に静岡県御前崎市で創業し、その後休眠蔵となっていた石川酒造株式会社との出会い。蔵主石川雅紀氏の協力のもと酒造事業を引き継ぎ、“御殿場石川酒造株式会社”として新生。御殿場市印野の地で酒蔵を興す運びとなりました。
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          富士山からの湧き水という自然からの恵みは、わたしたち御厨榮蔵の手を通じて日本酒へと形を変えます。
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          日本酒に欠かせないもうひとつの要素といえば、米。わたしたちは酒米作りも始めました。
          御殿場は水稲を基幹作物としています。ごてんばこしひかりは全国でも高い評価を得つつも、農業を取り巻く環境は農業従事者の担い手不足や高齢化など様々な看過できない課題も……。
        
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          わたしたちは、新たに酒米という需要を生み出すことで米作りの促進を期待し、また、ゆくゆくは静岡県内産・御殿場産の酒米だけでの酒造りを目指しています。
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          日本酒は水と米。風土そのものを醸し、多くの人に御殿場の魅力をお届けすることもひとつの目的です。<br />
          地元の恵みはそのまま地元へお返しする−−。<br />
          酒蔵の誕生は、この土地の未来を担う次世代へのバトンと捉えています。
          </p>


          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          日本酒の長い歴史と伝統を大切にしながらも、令和に歩み出した酒蔵らしく、柔軟な発想とアイデアを持ち味に形にとらわれない酒造りに挑みます。
          </p>

        </>):(<>

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          Sake brewing that will be spun with the people rooted
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          in this land for 100 years into the future
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          Then, we encountered Ishikawa Sake Brewery Co., Ltd., which was founded in Omaezaki City, Shizuoka Prefecture in 1882 and had since become a dormant brewery. With the cooperation of the brewery owner, Mr. Masanori Ishikawa, we took over the sake brewing business and were reborn as &quot;Gotemba Ishikawa Shuzo Co., Ltd.&quot; We were able to establish a sake brewery in Inno, Gotemba City
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          The blessing from nature, the spring water from Mt. Fuji, changes its form into sake through our hands at Mikuriya Sakaegura.
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          Another essential element for sake is rice. We have also started growing sake rice.Gotemba&apos;s main crop is rice. While Gotemba Koshihikari is highly evaluated nationwide, the environment surrounding agriculture faces various unavoidable challenges such as a shortage of agricultural workers and an aging population.
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          We hope to promote rice cultivation by creating a new demand for sake rice, and eventually aim to brew sake using only sake rice produced in Shizuoka Prefecture and Gotemba.
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          Sake is water and rice. One of our goals is to brew the terroir itself and deliver the charm of Gotemba to many people.
          Giving back to the local community the blessings of the local area.
          We see the birth of the sake brewery as a baton to the next generation who will be responsible for the future of this land.
          </p>

          <p className="text-lg lg:text-xl mt-14 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          While cherishing the long history and tradition of sake, as a brewery that has stepped into the Reiwa era, we challenge ourselves to brew sake without being bound by form, with flexible thinking and ideas as our strengths.
          </p>
        
        
        </>)}  


          <Image
            className="w-[100%] lg:w-[62%] relative mt-[10%] left-1/2 -translate-x-1/2"
            src="/MISSION_PICT_2.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

        </main>
        <p></p>
      </section>

      {/* <section className="w-[100%] my-16 grid place-items-center">
        <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
          <div className="flex text-red-500 justify-between mt-10">
            <p className="vertical-text text-2xl font-medium">
              ローカルチームです
            </p>
            <p className="vertical-text text-2xl font-medium">御厨榮蔵という</p>
            <p className="vertical-text text-2xl font-medium">わたしたちは</p>
          </div>
        </div>
      </section> */}

      {/* <section className=" grid place-items-center relative overflow-hidden">
        <div className=" absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-4xl">Region</p>

          <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
        </div>

        <main className="w-[75%] mt-[10%]">
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/REGION_STORY.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-20">
          コピーはダミーです。
          </p>
          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-2">
          ヒストリーリードコピー。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          日本酒の長い歴史と伝統を大切にしながらも、令和に歩み出した酒蔵らしく、柔軟な
発想とアイデアを持ち味に形にとらわれない酒造りに挑みます。
          </p>

        </main>
        <p></p>
      </section> */}

      <Footer />
    </div>
  );
};

export default StoryPage;
