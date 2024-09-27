"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeLangFunc } from "@/redux/actions";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
const Nav = () => {
  const navLogo = useRef(null);
  const navPCMain = useRef(null);
  // const navMobileMain = useRef(null);
  const navBtns = useRef(null);
  const menuToggle = useRef(null);
  const menu = useRef(null);
  const langChangeFuncPC = useRef(null);
  const enPC = useRef(null);
  const jpPC = useRef(null);
  const langChangeFuncMb = useRef(null);
  const enMb = useRef(null);
  const jpMb = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("jp");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (navBtns.current) {
  //     navBtns.current.style.display = "none";
  //   }
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY / window.innerHeight > 1) {
  //       navLogo.current.style.filter = `invert(1)`;
  //       menuToggle.current.style.filter = `invert(1)`;
  //       navPCMain.current.style.filter = `invert(1)`;
  //       if (window.innerWidth > 1280) {
  //         navBtns.current.style.display = "flex";
  //         navBtns.current.style.opacity = 1;
  //       }
  //     }

  //     const handleScroll = (e) => {
  //       const scrollTop = window.scrollY; // Current scroll position
  //       const windowHeight = window.innerHeight;
  //       const scrollPercentage = scrollTop / windowHeight;

  //       if (scrollPercentage <= 1) {
  //         if (window.innerWidth > 1280) {
  //           if (scrollPercentage > 0.75) {
  //             navBtns.current.style.display = "flex";
  //           }
  //           if (scrollPercentage < 0.75) {
  //             navBtns.current.style.display = "none";
  //           }
  //           navBtns.current.style.opacity = scrollPercentage;
  //         }
  //         navLogo.current.style.filter = `invert(${scrollPercentage})`;
  //         navPCMain.current.style.filter = `invert(${scrollPercentage})`;
  //         menuToggle.current.style.filter = `invert(${scrollPercentage})`;
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
  //     };
  //   }
  // }, []);

  return (
    <nav className="fixed top-0 z-[1000000] text-black w-[100%]">
      <section className="z-[101] mt-2 flex items-center p-2 md:p-3 md:mt-4 w-[100%] md:w-[96%] relative left-1/2 -translate-x-1/2 rounded-full backdrop-blur-md ">
        <Link href={"/"} passHref>
          <div ref={navLogo} className="border-0 border-white">
            <Image
              className="cursor-pointer invert"
              src={"/LOGOTYPE_WH.png"}
              width={250}
              height={100}
              alt="logo"
            />
          </div>
        </Link>

        {/* desktop navbar */}
        <main ref={navPCMain} className="ml-auto relative flex">
          {/* <div ref={navBtns} className="opacity-0 flex items-center">
            <Link href={"/StoryPage"} passHref>
              <p className="mr-5 cursor-pointer">STORY</p>
            </Link>
            <Link href={"/LocationPage"} passHref>
              <p className="mr-5 cursor-pointer">LOCATION</p>
            </Link>
            <Link href={"/ProductsPage"} passHref>
              <p className="mr-5 cursor-pointer">PRODUCTS</p>
            </Link>
            <p className="mr-5 cursor-pointer">ENJOY</p>
            <p className="mr-5 cursor-pointer">NEWS</p>
            <p className="mr-5 cursor-pointer">SHOP INFO</p>
         </div> */}

          <p className="hidden xl:grid cursor-pointer place-items-center text-2xl mr-5">
            <FaInstagram />
          </p>
          <p className="hidden xl:grid cursor-pointer place-items-center text-2xl mr-5">
            <FaXTwitter />
          </p>
          <p className="hidden xl:grid cursor-pointer place-items-center text-2xl mr-5">
            <FaFacebook />
          </p>
          <p className="hidden xl:grid cursor-pointer place-items-center text-2xl mr-5">
            <FaYoutube />
          </p>

          <div
            onClick={() => {
              langChangeFuncPC.current.classList.toggle("langChangeAction");
            }}
            ref={langChangeFuncPC}
            className="relative cursor-pointer flex items-center"
          >
            <p className="mr-2 text-xl">{lang === "en" ? "EN" : "JP"}</p>
            <IoIosArrowDown className="text-2xl arrow" />

            <div className="dropdown border-2 border-gray-400 p-1 rounded-md absolute top-[100%] w-[100%]">
              <p
                onClick={() => {
                  // langChangeFuncPC.current.classList.remove("langChangeAction");

                  if (lang === "jp") {
                    dispatch(changeLangFunc());
                    setLang("en");
                    enPC.current.classList.toggle("bg-gray-300");
                    jpPC.current.classList.toggle("bg-gray-300");
                  }
                }}
                ref={enPC}
                className="text-center w-[100%] mb-2 rounded-md"
              >
                EN
              </p>
              <p
                onClick={() => {
                  // langChangeFunc.current.classList.remove("langChangeAction");
                  if (lang === "en") {
                    dispatch(changeLangFunc());
                    setLang("jp");
                    enPC.current.classList.toggle("bg-gray-300");
                    jpPC.current.classList.toggle("bg-gray-300");
                  }
                }}
                ref={jpPC}
                className="text-center bg-gray-300 w-[100%] rounded-md"
              >
                JP
              </p>
            </div>
          </div>
        </main>

        {/* mobile navbar */}

        {/* <div
          onClick={() => {
            menuToggle.current.classList.toggle("menuToggle");
            menu.current.classList.toggle("menu_action");
            setMenuOpen(!menuOpen);
            if (menuOpen) {
              menu.current.style.opacity = 0;
              menu.current.style.pointerEvents = "none";
            } else {
              menu.current.style.opacity = 1;
              menu.current.style.pointerEvents = "all";
            }
          }}
          ref={menuToggle}
          className="block xl:hidden ml-auto relative w-fit cursor-pointer menuNormal"
        >
          <p className="line1 w-[2.5rem] h-[2px] bg-black rounded-lg"></p>
          <p className="line2 w-[2.5rem] h-[2px] bg-black rounded-lg mb-2 mt-2"></p>
          <p className="line3 w-[2.5rem] h-[2px] bg-black rounded-lg"></p>
        </div> */}
      </section>

      {/* <div
        ref={menu}
        className="menu grid xl:hidden absolute place-items-center z-[100] top-0 right-0 w-[100vw] h-[100vh] opacity-[0] pointer-events-none"
      >
        <div>
          <Link href={"/StoryPage"} passHref>
            <p className="mb-[4vh] text-xl cursor-pointer text-center">STORY</p>
          </Link>
          <Link href={"/LocationPage"} passHref>
            <p className="mb-[4vh] text-xl cursor-pointer text-center">
              LOCATION
            </p>
          </Link>
          <Link href={"/ProductsPage"} passHref>
            <p className="mb-[4vh] text-xl cursor-pointer text-center">
              PRODUCTS
            </p>
          </Link>

          <div className="mb-[4vh] flex justify-evenly items-center">
            <p className=" grid cursor-pointer place-items-center text-3xl">
              <FaInstagram />
            </p>
            <p className=" grid cursor-pointer place-items-center text-3xl">
              <FaXTwitter />
            </p>
          </div>

          <div className="mb-[4vh] flex justify-evenly items-center">
            <p className=" grid cursor-pointer place-items-center text-3xl">
              <FaFacebook />
            </p>
            <p className="grid cursor-pointer place-items-center text-3xl">
              <FaYoutube />
            </p>
          </div>

          <div
            onClick={() => {
              langChangeFuncMb.current.classList.toggle("langChangeAction");
            }}
            ref={langChangeFuncMb}
            className="relative cursor-pointer flex justify-center items-center text-center"
          >
            <p className="mr-2 text-2xl">{lang === "en" ? "EN" : "JP"}</p>
            <IoIosArrowDown className="text-3xl arrow" />

            <div className="dropdown border-2 border-gray-800 p-1 rounded-md absolute top-[100%] w-[100%]">
              <p
                onClick={() => {
                  // langChangeFuncMb.current.classList.remove("langChangeAction");

                  if (lang === "jp") {
                    dispatch(changeLangFunc());
                    setLang("en");
                    enMb.current.classList.toggle("bg-gray-300");
                    jpMb.current.classList.toggle("bg-gray-300");
                  }
                }}
                ref={enMb}
                className="text-center text-xl w-[100%] mb-2 rounded-md"
              >
                EN
              </p>
              <p
                onClick={() => {
                  // langChangeFunc.current.classList.remove("langChangeAction");
                  if (lang === "en") {
                    dispatch(changeLangFunc());
                    setLang("jp");
                    enMb.current.classList.toggle("bg-gray-300");
                    jpMb.current.classList.toggle("bg-gray-300");
                  }
                }}
                ref={jpMb}
                className="text-center text-xl bg-gray-300 w-[100%] rounded-md"
              >
                JP
              </p>
            </div>
          </div>
        </div> 
      </div>*/}
    </nav>
  );
};

export default Nav;
