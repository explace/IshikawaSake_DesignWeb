"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Portal from "../Portal";
import { MdOutlineCancel } from "react-icons/md";

const ProductCard = (props) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <main className="border-0 border-blue-600 w-[16rem]">
        <Image
          className="w-full mb-8"
          src="/SAKAE_SAKE_IMG_DUMMY.png"
          width={1700}
          height={1000}
          alt="Background Image"
        />

        {/* <div className="border-0 border-red-500 flex items-center"> */}
        <p className="text-lg md:text-2xl font-semibold">{props.jpname}</p>
        {/* <p className="ml-auto text-lg md:text-2xl">{props.volume}</p> */}
        {/* </div> */}
        <p className="text-sm md:text-lg">{props.enname}</p>

        <div className="border-red-700 border-0 my-6 flex items-center">
          <Image
            className="w-[2rem] md:w-[2.5rem] mr-2 md:mr-4"
            src={`/LOGO_${props.color}.png`}
            width={3000}
            height={1000}
            alt="Story Image"
          />
          <p className="text-sm md:text-xl">{props.type}</p>
        </div>

        {/* {props.points.map((point, index) => {
        return (
          <p key={index} className="text-xl mb-2">
          {point}
          </p>
          );
          })} */}

        {/* <p className="text-base mt-6">
      {props.desc}
      </p> */}
        {/* <p
          className="border-0 border-red-600 mt-4 md:mt-6 text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: props.points }}
        /> */}
        {/* <p
        className="border-2 border-red-600 mt-4 md:mt-6 text-sm md:text-base"
        >
        {props.points}
        </p> */}
        <p className="border-0 border-red-600 mt-2 text-sm md:text-base">
          {props.desc}
        </p>

        <button
          onClick={() => setPopup(true)}
          className="border-2 border-black mt-4 py-1 px-3"
        >
          <p className="text-sm md:text-base">詳細はこちら</p>
        </button>
      </main>

      {popup && (
        <Portal>
          <section className="border-0 border-yellow-400 bg-white w-[100vw] h-[100vh]">

            <div
              onClick={() => {
                setPopup(false);
              }}
              className="z-[25] right-4 bottom-6 absolute sm:top-[10rem] sm:right-[15vw] w-fit text-5xl sm:text-6xl cursor-pointer"
            >
              <MdOutlineCancel />
            </div>
            <div
              // key={index}
              className="z-[24] mt-8 sm:mt-0 border-0 mr-4 border-black w-fit relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 grid place-items-center sm:place-items-start sm:flex"
            >
              <Image
                className="w-[20rem] md:w-[22rem] lg:w-[25rem] sm:mr-20"
                src="/SAKAE_SAKE_IMG_DUMMY.png"
                width={1700}
                height={1000}
                alt="Background Image"
              />

              <div className="border-0 border-green-500 mt-6 sm:mt-0 w-[20rem] sm:w-[17rem]">
                <p className="text-2xl md:text-3xl">{props.jpname}</p>
                <p className="text-base md:text-xl">{props.enname}</p>

                <div className="border-red-700 border-0 my-6 flex items-center">
                  <Image
                    className="w-[2.5rem] mr-2"
                    src={`/LOGO_BLUE.png`}
                    width={3000}
                    height={1000}
                    alt="Story Image"
                  />
                  <p className="font-semibold text-base md:text-xl">{props.type}</p>
                </div>

                <p className="border-0 border-red-600 text-sm md:text-base">
                  {props.desc}
                </p>

                <p
                  className="mt-4 text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: props.points }}
                />

                <p className="text-sm md:text-base mt-6">希望小売価格</p>

                <p
                  className="mt-1 text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: props.amount }}
                />
              </div>
            </div>
          
          </section>
        </Portal>
      )}
    </>
  );
};

export default ProductCard;
