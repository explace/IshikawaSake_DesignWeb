"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Footer from "@/components/Footer/page";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import { changeNavTransition } from "@/redux/actions";

const EnjoyPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeNavTransition(false));
  },[])
  const fadeInEnjoy = useRef(null);
  const [posts, setPosts] = useState([]);
  const [enjoyPopup, setEnjoyPopup] = useState(false);
  const [enjoyTitle, setEnjoyTitle] = useState("");
  const [enjoyDesc, setEnjoyDesc] = useState("");
  const [enjoyImage, setEnjoyImage] = useState("");

  useEffect(() => {
    const target = fadeInEnjoy.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".enjoyHead").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 6
            }s`;
          });
        } else {
          document.querySelectorAll(".enjoyHead").forEach((item, index) => {
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

  useEffect(() => {
    console.log("Fetching data...");
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts`
          // "https://public-api.wordpress.com/wp/v2/sites/exdev0a2e2b7a53.wordpress.com/posts"
        );
        let fetchedPosts = response.data;

        const updatedPosts = await Promise.all(
          fetchedPosts
            .filter((e) => e.class_list.includes("category-enjoy"))
            .map(async (post) => {
              const imageId = post.featured_media;
              try {
                const mediaResponse = await axios.get(
                  `${process.env.NEXT_PUBLIC_WORDPRESS_API}/media/${imageId}`
                );
                post.featured_media = mediaResponse.data.link;
              } catch (error) {
                console.error(`Error fetching media for post ${post.id}:`, error);
              }
              return post;  // Ensure post is returned after modification
            })
        );

        setPosts(fetchedPosts); // Set original posts if no translation is needed
        // }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    getPosts();
  }, []);

  console.log('ppp',posts.map((e)=>e.featured_media));

  return (
    <div className="mt-6">
      <div className="relative overflow-hidden">
        <div className="w-[150%] lg:w-[100%] -translate-x-[15%] lg:translate-x-0">
          <Image
            // className="w-[100%] border-4 border-black"
            src="/MELT_SNOW_ILLUSTRATION_SET.png"
            width={3000}
            height={300}
            alt="nature video"
          />
        </div>

        <div
          ref={fadeInEnjoy}
          className="absolute grid place-items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <Image
            className="enjoyHead opacity-0 w-[2rem] sm:w-[4rem] lg:w-[6rem]"
            src="/LOGO_2_BK.png"
            width={100}
            height={300}
            alt="nature video"
          />
          <div className="text-lg sm:text-3xl lg:text-5xl mt-3">
            <p className="enjoyHead opacity-0 en-vertical-text">E</p>
            <p className="enjoyHead opacity-0 en-vertical-text">N</p>
            <p className="enjoyHead opacity-0 en-vertical-text">J</p>
            <p className="enjoyHead opacity-0 en-vertical-text">O</p>
            <p className="enjoyHead opacity-0 en-vertical-text">Y</p>
          </div>
        </div>
      </div>

      <div className=" relative grid place-items-center">
        <Image
          className="w-[90%] lg:w-[80%]"
          src="/ENJOY_IMG_DUMMY.png"
          width={3000}
          height={300}
          alt="nature video"
        />
        <p className="vertical-text absolute text-white text-lg sm:text-xl lg:text-3xl">
          ものがたり
        </p>
      </div>

      <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16 text-red-600">
        {/* <p className="en-vertical-text mr-4 text-sm lg:text-base">
          ---- Message / History / Region
        </p>
        <p className="en-vertical-text mr-4 text-sm lg:text-base">
          READ MORE
          <Image
            className="inline-block relative left-[10%] mt-5"
            src="/READMORE_DROP.png"
            width={16}
            height={50}
            alt="nature video"
          />
        </p> */}
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


      {enjoyPopup && (
        <section className="fixed inset-0 overflow-y-auto z-[10000] bg-white">
          <div
            onClick={() => {
              setEnjoyPopup(false);
            }}
            className="w-fit ml-auto mr-2 lg:mr-32 text-4xl lg:text-6xl cursor-pointer mt-32 mb-8"
          >
            <MdOutlineCancel/>
          </div>

          <div className="grid place-items-center">
            <div>
              <p className="text-4xl mx-2 lg:text-5xl">{enjoyTitle}</p>
              {/* <p ref={EnjoyDescRef}></p> */}
              <div
                className="text-lg mx-2 lg:text-xl mt-10"
                dangerouslySetInnerHTML={{ __html: enjoyDesc }}
              />

              <Image
                className="w-[20rem] relative left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 lg:w-[30rem] my-6"
                src={enjoyImage}
                width={3000}
                height={300}
                alt="enjoy image"
              />
              
            </div>
          </div>
        </section>
      )}

      <section className="grid place-items-center lg:flex w-[90%] lg:w-[80%] xl:w-[70%] relative left-1/2 -translate-x-1/2 items-center lg:justify-between">
        {posts
          .filter((e) => e.class_list.includes("category-enjoy"))
          .map((post, index) => {
            return (
              <div key={index}>
                <div className="border-0 border-red-600">
                  <div className="textImage relative text-red-600">
                    <Image
                      className="w-[30rem] mt-6"
                      // src='https://admin.gotembaishikawashuzo.com/wp-content/uploads/2024/10/ENJOY_IMG_DUMMY_3.png'
                      // src='http://admin.gotembaishikawashuzo.com/wp-content/uploads/2024/10/ENJOY_IMG_DUMMY_3.png'
                      src={post.featured_media}
                      width={500}
                      height={300}
                      alt="nature video"
                    />
                  </div>

                  <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
                    <div className="en-vertical-text mr-4 text-sm lg:text-base">
                      {
                      post.class_list.find(item => item.startsWith("tag-"))&&(
                        <p>
                          ----{post.class_list.find(item => item.startsWith("tag-")).substring(4)}
                        </p>
                      )
                      } 
                    </div>
                    <p
                    onClick={() => {
                      setEnjoyPopup(true);
                      setEnjoyTitle(post.title.rendered);
                      setEnjoyDesc(post.content.rendered);
                      setEnjoyImage(post.featured_media);
                    }
                    }
                    className="en-vertical-text cursor-pointer h-fit mr-4 text-sm lg:text-base">
                      READ MORE
                      <Image
                        className="inline-block relative left-[10%] mt-3"
                        src="/READMORE_DROP.png"
                        width={15}
                        height={50}
                        alt="nature video"
                      />
                    </p>

                    <p className="vertical-text-enjoy text-red-600 text-base lg:text-2xl" dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>

                    {/* <p className="text-red-600 vertical-text text-base lg:text-2xl mr-0">
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
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              酒造りを
            </p> */}
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div>
          <div className="textImage relative text-red-600">
            <Image
              className="w-[30rem] mt-6"
              src="/ENJOY_IMG_DUMMY_3.png"
              width={500}
              height={300}
              alt="nature video"
            />
          </div>

          <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              ---- Pairing
            </p>
            <p className="en-vertical-text mr-4 text-sm lg:text-base">
              VIEW ALL
              <Image
                className="inline-block relative left-[10%] mt-3"
                src="/READMORE_DROP.png"
                width={15}
                height={50}
                alt="nature video"
              />
            </p>
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
            <p className="vertical-text text-base lg:text-2xl mr-0 text-red-600">
              酒造りを
            </p>
          </div>
        </div> */}
      </section>

        {/* <Footer /> */}
    </div>
  );
};

export default EnjoyPage;
