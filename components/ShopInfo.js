import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ShopInfo = () => {
  const fadeInShopInfo = useRef(null);

  useEffect(() => {
    const target = fadeInShopInfo.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".fadeInShopInfo")
            .forEach((item, index) => {
              item.style.animation = `fadeInAnimation .6s forwards ease-out ${
                index / 10
              }s`;
            });

          document.querySelectorAll(".fadeInShopInfoLine").forEach((item) => {
            item.style.animation =
              "fadeInNewsLineAni .6s forwards ease-out 1.5s";
          });
        } else {
          document.querySelectorAll(".fadeInShopInfo").forEach((item) => {
            item.style.animation = "none";
          });
          document.querySelectorAll(".fadeInShopInfoLine").forEach((item) => {
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
    <div className="border-0 border-red-500 mt-24 grid place-items-center relative">
      <div
        ref={fadeInShopInfo}
        className="flex items-center w-[95%] lg:w-[80%] mb-8 md:mb-14"
      >
        <div className="text-xl lg:text-4xl mr-3 flex items-center">
          <p className="fadeInShopInfo opacity-0">S</p>
          <p className="fadeInShopInfo opacity-0">H</p>
          <p className="fadeInShopInfo opacity-0">O</p>
          <p className="fadeInShopInfo opacity-0 mr-3">P</p>
          <p className="fadeInShopInfo opacity-0">I</p>
          <p className="fadeInShopInfo opacity-0">N</p>
          <p className="fadeInShopInfo opacity-0">F</p>
          <p className="fadeInShopInfo opacity-0">O</p>
        </div>
        <p className="w-full h-[2px] opacity-0 bg-black fadeInShopInfoLine"></p>
      </div>

      <div className="border-0 border-red-300 grid place-items-center md:place-items-start md:flex md:items-center w-[95%] lg:w-[80%]">
        <Image
          className="mr-4 xl:mr-8 2xl:mr-16 mb-8 md:mb-0 w-[100%] md:w-[65%] 2xl:w-[75%]"
          src="/SHOPINFO_IMG.png"
          width={3000}
          height={300}
          alt="shop1"
        />

        <div className="border-0 flex-none border-yellow-200">
          <div className="flex">
            <p className="w-[5px] h-[1.5rem] lg:h-[1.8rem] bg-black mr-1"></p>
            <p className="text-xl lg:text-2xl">店舗情報</p>
          </div>
          <Image
            className="my-3 lg:my-6 w-[8rem] lg:w-[10rem]"
            src="/MIKURIYASAKAEGURA_LOGOTYPE_BK.png"
            width={3000}
            height={300}
            alt="shop2"
          />
          <p className="text-sm lg:text-base">〒412-0008</p>
          <p className="text-sm lg:text-base">静岡県御殿場市印野1388-37</p>
          <p className="text-sm lg:text-base">電話 ／ 0550-75-7788</p>
          <p className="text-sm lg:text-base">FAX ／ 0550-70-7799</p>
          <p className="text-sm lg:text-base">営業時間 ／ 00時-00時</p>
          <p className="text-sm lg:text-base">定休日 ／ 毎週火曜日、年末年始</p>

        </div>
      </div>

      {/* <div className="border-0 border-green-700 mt-8 md:mt16 flex flex-wrap justify-between items-center w-[95%] lg:w-[80%]">
        <Image
          className="w-[100%] md:w-[48%] mb-6 md:mb-0"
          src="/ONLINESTORE_IMG.png"
          width={3000}
          height={300}
          alt="shop1"
        />
        <div className="relative w-[100%] md:w-[48%]">
          <Image
            className=""
            src="/STORE_LIST_PICT.png"
            width={3000}
            height={300}
            alt="shop1"
          />
          <p className="absolute w-fit h-fit border-0 border-red-400 tracking-[10px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-2xl lg:text-4xl">
          取扱店舗
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ShopInfo;
