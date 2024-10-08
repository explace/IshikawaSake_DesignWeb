import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/page";

const StoryPage = () => {
  return (
    <div className="">
      {/* Main Story Section */}
      <div className="relative h-[100vh] w-[100%] bg-neutral-600 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-[10]">
          <Image
            className="object-cover w-full h-full"
            src={"/LOCATION_IMG_DUMMY.png"}
            width={1700}
            height={1000}
            alt="Background Image"
          />
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
          <p className="text-6xl text-slate-50 basis-1/2 ml-3">LOCATION</p>
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
        <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
          <div className="flex justify-between mt-10 -ml-11">
            <p className="vertical-text text-2xl font-medium">
            呼ばれていました
            </p>
            <p className="vertical-text text-2xl font-medium">御厨（みくりや）と</p>
            <p className="vertical-text text-2xl font-medium">かつてこの土地は、</p>
            <p className="vertical-text text-2xl font-medium">という意味です</p>
            <p className="vertical-text text-2xl font-medium">神様の台所</p>
            <p className="vertical-text text-2xl font-medium">御厨の厨（みくりや）は</p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
        ”郷土
        </p>
      </section>


      <section className="grid place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-4xl">Mt.Fuji Benefit</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>

        <main className="w-[75%]">
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

          <p className="text-sm lg:text-sm mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[45%]">
          2025年1月、御厨糀蔵は富士山の東麓に居を構えました。御殿場は、平均標高が500mの<br/>夏でも涼しい高原の町です。
          </p>


          <Image
            className="w-[100%] lg:w-[62%] mt-20 relative left-1/2 -translate-x-1/2"
            src="/MtFUJI_BENEFIT_PICT_2.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />


          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_3.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-black text-2xl lg:text-3xl mt-20">
          富士山からの恵みと
          </p>
          <p className="text-center text-black text-2xl lg:text-3xl mt-2">
          酒の神が引き寄せた不思議な縁
          </p>

          <p className="text-sm lg:text-sm mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%]">
          富士山の雪解け水が数十年という歳月をかけて地中でろ過され、湧出したものが伏流
水です。御殿場の伏流水は軟水でまろやかな味わいが特徴。日本で多く飲まれているの
も軟水ですが、素材を活かす日本酒を生み出されるのもこの軟水あってのことです。
          </p>

          <p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
          日本酒の成分のほとんどは水。洗米や醪造など、日本酒造りの過程でも良質かつ大量
の水を必要とします。絶えずこんこんと湧き出る良質な湧水が、日本酒の素となりま
す。</p>
          
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2 mt-[8%]"
            src="/MtFUJI_BENEFIT_PICT_4.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-20">
          コピーはダミーです。
          </p>
          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-2">
          お米についてリードコピー。
          </p>

          <p className="text-sm lg:text-sm mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%]">
          そして、米。昼夜の寒暖差と富士山の伏流水を活かして栽培された御殿場産のお米は県
の特産品にもなっています。御殿場コシヒカリはコンテストで数々の賞を獲るなど評
判のお米。御殿場はいわゆる米どころでもあります。
          </p>

          <p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
          そんな稲作に適した環境のなかで、酒米(酒造好適米)作りも始めました。静岡県内で令
和５年産から新たに登場した「令和誉富士(れいわほまれふじ)」を筆頭に、御殿栄蔵では
静岡県産の酒米を使用します。</p>
  
        </main>
        <p></p>
      </section>


      <section className="w-[100%] my-16 grid place-items-center mt-30">
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
            不思議な縁
            </p>
            <p className="vertical-text text-2xl font-medium">酒の神が引き寄せた</p>
            <p className="vertical-text text-2xl font-medium">富士山からの恵みと</p>
          </div>
        </div>
      </section>

      <section className=" grid place-items-center relative overflow-hidden">
        <div className=" absolute lg:top-[12%] top-[6%] left-[2vw]">
          <p className="en-vertical-text text-4xl ">Shuzo</p>

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

          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-20">
          コピーはダミーです。
          </p>
          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-2">
          酒造についてリードコピー。
          </p>

          <p className="text-sm lg:text-sm mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%]">
          現在の御殿場市、小山町、裾野市の一帯はかつて御殿と呼ばれていました。厨は台所を
意味し、神饌を調理する建物のことです。当地は平安時代には伊勢神宮の荘園となり、
食物を供給する土地でした。御殿と呼ばれた荘園は日本各地にあり、御殿場もそのひと
つだったのです。
          </p>

          <p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
          古くから富士山の恩恵を受けてきた当地。富士山の主祭神はコノハナサクヤヒメノミ
コト(木花之佐久夜毘売命)という女性の神様です。じつはお酒の神様ともいわれてお
ります。</p>

          <p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
コノハナサクヤヒメノミコトは、夫のニニギノミコト(邇邇芸命)との間に3人の子ども
を授かります。無事に出産したことを祝い、父であるオオヤマツミノカミ(大山祇神)が
初めて酒をつくって振舞いました。この逸話から、オオヤマツミノカミは酒造りの祖と
してサケノカミ(酒解神)、酒造りのきっかけを与えたコノハナサクヤヒメノミコト
はサケトケコカミ(酒解子神)とも呼ばれています。</p>

<p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
          
御殿の歴史と身近な神様がお酒の神様でもあったというエピソード。御殿栄蔵の環境
は不思議な縁に手繰り寄せられているようです。</p>
          
  

        </main>
        <p></p>
      </section>


      <section className="w-[100%] my-16 grid place-items-center mt-30">
        <div className="w-[8rem]">
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
        </div>
      </section>

      <section className=" grid place-items-center relative overflow-hidden">
        <div className=" absolute lg:top-[12%] top-[6%] left-[2vw]">
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

          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-20">
          コピーはダミーです。
          </p>
          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-2">
          チームについてリードコピー。
          </p>

          <p className="text-sm lg:text-sm mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%]">
          わたしたち御殿桜蔵のシンボルマークは、様々な繋がり「縁」を具現化したものです。
酒づくりに欠かせないものは、なんといっても人です。ふるさとである御殿場の未来を考えたときにも人の存在は不可欠。将来を担う若者がふるさとで誇れるもののひとつに、地酒が加わったら、そんな強い思いがあります。
          </p>

          <p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
          御殿場産の水と米で、御殿場の地で、御殿場の人が醸す日本酒。わたしたちによわたしたちの酒です。</p>

<p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
酒蔵の多くは何代にもわたり、連綿と受け継がれてきた　がりが今に続いています。
つくる人が変わっても酒だけは何十年何百年を経ても変わらず、生き続けています。
そこで受け継がれているものは単に酒の造り方だけではないと思います。情熱や志といった人の原動力となる心も然り。</p>

<p className="text-sm lg:text-sm w-[95%] lg:w-[54%] relative left-1/2 -translate-x-[49%] mt-4">
豊かな自然環境があってこそ生まれる日本酒。新たな御殿場の特産品として御殿桜蔵の地酒が多くの人を幸せにすること。そして、感動をもたらす存在となることをつねに目指します。

</p>
  

        </main>
        <p></p>
      </section>


      <Footer />
    </div>
  );
};

export default StoryPage;
