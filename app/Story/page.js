import React from "react";
import Image from "next/image";
const Story = () => {
  return (
    <div className="relative">
      <Image
        className=" w-[96.5%]"
        src="/MtFUJI_ILLUSTRATION_SET.png"
        width={3000}
        height={300}
        alt="nature video"
      />

      <div className="absolute grid place-items-center top-[40%] left-1/2 transform -translate-x-1/2">
        <Image
          className=""
          src="/LOGO_2_BK.png"
          width={100}
          height={300}
          alt="nature video"
        />
        <p className="en-vertical-text text-4xl mt-3">STORY</p>
      </div>

      <div className=" relative w-[100%] grid place-items-center">
        <Image
          className="w-[80%]"
          src="/STORY_IMG_DUMMY.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute top-[40%]">ものがたり</p>
      </div>

      <div className="border-0 flex justify-center relative w-[100%] items-center mt-6">
        {/* <p className="vertical-text absolute top-[40%]"> */}

        {/* 1
この地に根ざす人びとと共に
御殿場で育った米
富士山から湧く神の水と 
100年先の未来にも紡ぐ */}
        <p className="en-vertical-text">---- Message / History / Region</p>
        <p className="en-vertical-text">READ MORE</p>
        <p className="vertical-text text-xl">見飽きることはありません︒</p>
        <p className="vertical-text text-xl">毎日眺めていても</p>
        <p className="vertical-text text-xl">東側から望む富士の稜線はたおやかで︑</p>
        <p className="vertical-text text-xl">富士山をつねに見上げる御殿場︒</p>
        <p className="vertical-text text-xl">酒造りを</p>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Story;
