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
            src={"/STORY_IMG_DUMMY.png"}
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
          <p className="text-6xl text-slate-50 basis-1/2 ml-3">STORY</p>
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
          <div className="flex justify-between mt-10">
            <p className="vertical-text text-2xl font-medium">
              ローカルチームです
            </p>
            <p className="vertical-text text-2xl font-medium">御厨榮蔵という</p>
            <p className="vertical-text text-2xl font-medium">わたしたちは</p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
          ”ものがたり
        </p>
      </section>

      <section className="grid place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-4xl">Message</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
        </div>

        <main className="w-[75%]">
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/MESSAGE_STORY_1.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />

          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-20">
            コピーはダミーです。
          </p>
          <p className="text-center text-red-500 text-2xl lg:text-3xl mt-2">
            新しい酒蔵リードコピー。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
            富士山をつねに見上げる御殿場。東側から望む富士の稜線はたおやかで、毎日眺めてい
            ても見飽きることはありません。富士山は雄大な眺めだけでなく、伏流水という自然の
            恵みも届けてくれています。私たち御殿場市民は、「飲み水」としてこの伏流水を飲んで
            います。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
            富士山の雪解け水が地中でろ過され、長い歳月を経て湧出す豊かな伏流水。
            <span className="text-red-500">
              この恵まれ
              た素材を活かして何か地域貢献できないか、とつねづね考えていました。
            </span>{" "}
            じつは伏流水
            は、御殿場での米作りにも寄与しています。富士山の水と御殿場の米。大地をありのま
            まに醸せたら……それがまさに日本酒でした。
          </p>

          <Image
            className="w-[100%] lg:w-[62%] mt-20 relative left-1/2 -translate-x-1/2"
            src="/MESSAGE_STORY_2.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
        </main>
        <p></p>
      </section>

      <section className=" w-[100%] my-16 grid place-items-center">
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
      </section>


      <section className="grid place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-2xl lg:text-4xl">History</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
        </div>

        <main className="w-[75%]">
          <Image
            className="w-[100%] lg:w-[62%] relative left-1/2 -translate-x-1/2"
            src="/HISTORY_STORY.png"
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
          石川酒造株式会社（御前崎市、1882年創業）との出会いを経て、“御殿場石川酒造株式
          会社”として新生。御殿場の地で酒蔵を興す運びとなりました。
          </p>

          <p className="text-lg lg:text-xl mt-16 w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          富士山からの湧き水と米作りに適した昼夜の寒暖差が大きい準高冷地帯。自然からの
恵みはわたしたち御厨榮蔵の手を通じて日本酒へと形を変えます。いわば御殿場の風
土そのものです。
          </p>
          <p className="text-lg lg:text-xl w-[95%] lg:w-[54%] relative left-1/2 -translate-x-1/2">
          地元の恵みはそのまま地元へお返しする−−。
酒蔵の誕生は、この土地の未来を担う次世代へのバトンと捉えています。
          </p>

        </main>
        <p></p>
      </section>

      <section className="w-[100%] my-16 grid place-items-center">
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
      </section>

      <section className=" grid place-items-center relative overflow-hidden">
        <div className=" absolute top-0 left-[2vw]">
          <p className="en-vertical-text text-4xl">Region</p>

          <p className="w-[2px] relative left-[37%] mt-2 h-[200vh] bg-black"></p>
        </div>

        <main className="w-[75%]">
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
      </section>

      <Footer />
    </div>
  );
};

export default StoryPage;
