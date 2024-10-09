import React from "react";
import Image from "next/image";

import Footer from "@/components/Footer/page";
import ProductCard from "@/components/ProductCard/page";
const ProductPage = () => {
  return (
    <div>
      {/* Main Story Section */}
      <div className="relative h-[100vh] w-[100%] bg-neutral-600 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-[10]">
          <Image
            className="object-cover w-full h-full"
            src={"/PRODUCTS_IMG_DUMMY.png"}
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
        <div className="flex flex-col gap-4 z-[40] relative top-12 w-[50%] items-center pt-52 mt-0 border-0 ml-[25%] border-green-500">
          <div className="w-fit basis-1/2">
            <Image src={"/LOGO_WH.png"} width={150} height={30} alt="logo" />
          </div>
          <p className="text-6xl text-slate-50 basis-1/2 ml-3">PRODUCTS</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-[50%] bottom-2 z-[50]">
          <p className="en-vertical-text-scroll scroll-text text-white">
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
        <div className="absolute -bottom-40 left-0 w-full z-[20]">
          <Image
            className="object-cover w-full"
            src={"/MIST_IMG.png"}
            width={1700}
            height={200}
            alt="Mist Image"
          />
        </div>
      </div>

      <section className="w-[100%] mt-16 mb-40 relative grid place-items-center">
        <div className="w-[8rem]">
          <Image
            className="w-[80%] relative left-1/2 -translate-x-1/2"
            src="/LOGO_2_BK.png"
            width={3000}
            height={1000}
            alt="Story Image"
          />
          <div className="flex justify-between mt-10 text-red-500">
            <p className="vertical-text text-2xl font-medium">生み出します</p>
            <p className="vertical-text text-2xl font-medium">
              おいしい日本酒を
            </p>
            <p className="vertical-text text-2xl font-medium">
              冷涼な自然環境が
            </p>
          </div>
        </div>
        <p className="absolute top-0 vertical-text text-2xl font-medium right-2 lg:right-24">
          ”わたしたちのお酒
        </p>
      </section>

      <section className="grid border-0 border-cyan-500 place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw] lg:left-[8vw]">
          <p className="en-vertical-text text-2xl lg:text-4xl">SAKAE</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>

        <main className="w-[85%] px-4 lg:px-44">
          <div className="border-0 border-red-600 w-[100%] lg:w-[70%] grid place-items-center lg:place-items-start lg:flex relative left-1/2 -translate-x-1/2">
            <div className="flex items-start border-0 border-green-600">
              <p className="text-center vertical-text mr-2 text-red-500 text-xl lg:text-2xl">
                高い水準で揃っていました︒
              </p>
              <p className="text-center vertical-text mr-2 text-red-500 text-2xl lg:text-2xl">
                御殿場にはそのふたつが
              </p>
              <p className="text-center vertical-text mr-2 text-red-500 text-2xl lg:text-2xl">
                良質な水と米が欠かせません︒
              </p>
              <p className="text-center vertical-text mr-8 text-red-500 text-2xl lg:text-2xl">
                日本酒づくりには豊富で
              </p>
              <p className="text-center vertical-text mr-4 text-red-500 text-2xl lg:text-2xl font-semibold">
                神様の台所という意味です
              </p>
              <p className="text-center vertical-text text-red-500 text-2xl lg:text-2xl font-semibold">
                榮の特徴キャッチコピー
              </p>
            </div>
            <Image
              className="border-0 border-yellow-600 w-[33%] ml-auto relative mt-4 lg:mt-0 -left-1/2 lg:left-0 translate-x-1/2 lg:translate-x-0"
              src="/SAKAE_LOGO.png"
              width={3000}
              height={1000}
              alt="Story Image"
            />
          </div>

          <p className="my-10 lg:my-20 text-lg lg:text-xl">
            <span className="text-2xl lg:text-4xl font-semibold">純米大吟醸</span> JUNMAI
            DAI GINJO
          </p>

          <div className="border-red-500 border-0 flex flex-wrap justify-center sm:justify-between">
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
          </div>

          <p className="mt-20 mb-16 text-xl">
            <span className="text-4xl font-semibold">特別純米</span>JUNMAI GINJO
          </p>

          <div className="border-red-500 border-0 flex flex-wrap justify-center sm:justify-between">
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
          </div>

          <p className="mt-20 mb-16 text-xl">
            <span className="text-4xl font-semibold">特別純米</span>SPECIAL
            JUNMAI
          </p>

          <div className="border-red-500 border-0 flex flex-wrap justify-center sm:justify-between">
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
          </div>
        </main>
      </section>


      <section className="grid mt-24 border-0 border-cyan-500 place-items-center overflow-hidden relative">
        <div className="absolute top-0 left-[2vw] lg:left-[8vw]">
          <p className="en-vertical-text text-2xl lg:text-4xl">SAKUYA</p>
          <p className="w-[2px] relative left-[37%] mt-2 h-[500vh] bg-black"></p>
        </div>

        <main className="w-[85%] px-4 lg:px-44">
        <div className="border-0 border-red-600 w-[100%] lg:w-[70%] grid place-items-center lg:place-items-start lg:flex relative left-1/2 -translate-x-1/2">
            <div className="flex items-start border-0 border-green-600">
              <p className="text-center vertical-text mr-2 text-red-500 text-xl lg:text-2xl">
                高い水準で揃っていました︒
              </p>
              <p className="text-center vertical-text mr-2 text-red-500 text-2xl lg:text-2xl">
                御殿場にはそのふたつが
              </p>
              <p className="text-center vertical-text mr-2 text-red-500 text-2xl lg:text-2xl">
                良質な水と米が欠かせません︒
              </p>
              <p className="text-center vertical-text mr-8 text-red-500 text-2xl lg:text-2xl">
                日本酒づくりには豊富で
              </p>
              <p className="text-center vertical-text mr-4 text-red-500 text-2xl lg:text-2xl font-semibold">
                神様の台所という意味です
              </p>
              <p className="text-center vertical-text text-red-500 text-2xl lg:text-2xl font-semibold">
                榮の特徴キャッチコピー
              </p>
            </div>
            <Image
              className="border-0 border-yellow-600 w-[33%] ml-auto relative mt-4 lg:mt-0 -left-1/2 lg:left-0 translate-x-1/2 lg:translate-x-0"
              src="/SAKAE_LOGO.png"
              width={3000}
              height={1000}
              alt="Story Image"
            />
          </div>

          <p className="my-10 lg:my-20 text-lg lg:text-xl">
            <span className="text-2xl lg:text-4xl font-semibold">純米大吟醸</span> JUNMAI
           GINJO
          </p>

          <div className="border-red-500 border-0 flex flex-wrap justify-center sm:justify-between">
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
            <ProductCard
              jpmsg="このは榮"
              volume="720ml"
              enmsg="KONOHA SAKAE"
              color="BLUE"
              name="令和誉富士"
              points={[
                "– 精米歩合５０％",
                "– アルコール度１５度",
                "– 生�仕込み",
              ]}
              desc="福島県いわき市産、酒米の横綱とも
い わ れ る「山 田 錦」を 蔵 で 最 高 の
50％まで磨き上げ、昔ながらの生仕
込みで醸したトラディショナルな正
統派の日本酒です。"
            />
          </div>

        
        </main>
      </section>
      {/* Footer Section */}
      {/* 生み出します
おいしい日本酒を
冷涼な自然環境が
高い水準で揃っていました︒
御殿場にはそのふたつが
良質な水と米が欠かせません︒
日本酒づくりには豊富で
神様の台所という意味です
榮の特徴キャッチコピー
STORY LOCATION PRODUCTS ENJOY NEWS SHOP INFO JP scroll
STORY LOCATION PRODUCTS ENJOY NEWS SHOP INFO JP
”わた */}
      {/* FO JP
”わたしたちのお酒 */}
      {/* 高い水準で揃っていました︒ 御殿場にはそのふたつが
      良質な水と米が欠かせません︒ 日本酒づくりには豊富で
      神様の台所という意味です 榮の特徴キャッチコピー STORY LOCATION PRODUCTS
      ENJOY NEWS SHOP INFO JP scroll STORY LOCATION PRODUCTS ENJOY NEWS SHOP
      INFO JP ”わた */}
      <Footer />
    </div>
  );
};

export default ProductPage;
