"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Enjoy = () => {
  const fadeInEnjoy = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const target = fadeInEnjoy.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".enjoyHead").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${index / 6}s`;
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
          "https://admin.gotembaishikawashuzo.com/wp-json/wp/v2/posts"
        );
        const fetchedPosts = response.data;

        for (const post of fetchedPosts) {
          const imageId = post.featured_media;
          console.log("imageId", imageId);
          try {
            const res = await axios.get(
              `https://admin.gotembaishikawashuzo.com/wp-json/wp/v2/media/${imageId}`
            );
            if (res && res.data && res.data.guid && res.data.guid.rendered) {
              post.featured_media = res.data.guid.rendered;
            } else {
              console.warn("Media response does not contain 'guid.rendered'", res);
              post.featured_media = "/default_image.png"; // Default image in case of missing data
            }
          } catch (error) {
            console.error("Error fetching media:", error);
            post.featured_media = "/default_image.png"; // Default image in case of error
          }
        }

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="mt-6">
      <div className="relative overflow-hidden">
        <div className="w-[150%] lg:w-[100%] -translate-x-[15%] lg:translate-x-0">
          <Image
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

      <div className="relative grid place-items-center">
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
      </div>

      <section className="grid place-items-center lg:flex w-[90%] lg:w-[80%] xl:w-[70%] relative left-1/2 -translate-x-1/2 items-center lg:justify-between">
        {posts
          .filter((e) => e.class_list.includes("category-enjoy"))
          .map((post, index) => (
            <div key={index}>
              <div className="border-0 border-red-600">
                <div className="textImage relative text-red-600">
                  <Image
                    className="w-[30rem] mt-6"
                    src={post.featured_media}
                    width={500}
                    height={300}
                    alt="nature video"
                  />
                </div>

                <div className="flex justify-center relative w-[100%] mt-6 lg:mt-16">
                  <div className="en-vertical-text mr-4 text-sm lg:text-base">
                    {post.class_list.find((item) => item.startsWith("tag-")) && (
                      <p>
                        ----
                        {post.class_list
                          .find((item) => item.startsWith("tag-"))
                          .substring(4)}
                      </p>
                    )}
                  </div>
                  <p className="en-vertical-text cursor-pointer h-fit mr-4 text-sm lg:text-base">
                    READ MORE
                    <Image
                      className="inline-block relative left-[10%] mt-3"
                      src="/READMORE_DROP.png"
                      width={15}
                      height={50}
                      alt="nature video"
                    />
                  </p>

                  <p
                    className="vertical-text-enjoy text-red-600 text-base lg:text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Enjoy;
