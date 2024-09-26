"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const News = () => {
  const fadeInNews = useRef(null);
  const [posts, setPosts] = useState([]);
  // const [lang, setLang] = useState("en");
  const lang = useSelector((state) => state.reducer1.lang);

  useEffect(() => {
    const target = fadeInNews.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${
              index / 10
            }s`;
          });

          document
            .querySelectorAll(".fadeInNewsLine")
            .forEach((item, index) => {
              item.style.animation =
                "fadeInNewsLineAni .6s forwards ease-out 1.5s";
            });
        } else {
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = "none";
          });
          document
            .querySelectorAll(".fadeInNewsLine")
            .forEach((item, index) => {
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

  // const changeLang = async (jp_text) => {
  //   const apiKey = ""; // Replace with your API key
  //   const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  //   try {
  //     const data = {
  //       q: jp_text,
  //       target: "en",
  //     };

  //     const response = await axios.post(url, data);
  //     return response.data.data.translations[0].translatedText;
  //   } catch (e) {
  //     return "error";
  //   }
  // };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/wp/v2/sites/exdev0a2e2b7a53.wordpress.com/posts"
        );
        const fetchedPosts = response.data;

        // if (lang === "en") {
        //   const updatedPosts = await Promise.all(
        //     fetchedPosts.map(async (post) => {
        //       const translatedTitle = await changeLang(post.title.rendered);
        //       return {
        //         ...post,
        //         title: {
        //           ...post.title,
        //           rendered: translatedTitle, // Set the translated title
        //         },
        //       };
        //     })
        //   );
        //   setPosts(updatedPosts); // Update the state with the translated posts
        // } else {
        setPosts(fetchedPosts); // Set original posts if no translation is needed
        // }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    getPosts();
  }, [lang]);

  function convertDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  return (
    <div className="mt-10 grid place-items-center">
      <div
        ref={fadeInNews}
        className="flex items-center w-[95%] lg:w-[80%] mb-6"
      >
        <div className="text-xl lg:text-4xl mr-3 flex items-center">
          <p className="fadeInNews opacity-0">N</p>
          <p className="fadeInNews opacity-0">E</p>
          <p className="fadeInNews opacity-0">W</p>
          <p className="fadeInNews opacity-0">S</p>
        </div>
        <div className="text-base lg:text-lg mr-3 flex items-center">
          <p className="fadeInNews opacity-0">U</p>
          <p className="fadeInNews opacity-0">p</p>
          <p className="fadeInNews opacity-0">d</p>
          <p className="fadeInNews opacity-0">a</p>
          <p className="fadeInNews opacity-0">t</p>
          <p className="fadeInNews opacity-0">e</p>
        </div>
        <p className="w-full h-[2px] opacity-0 bg-black fadeInNewsLine"></p>
      </div>

      <div className="w-[95%] lg:w-[80%]">
        {lang === "en"
          ? posts
              .filter((e) => e.class_list.includes("category-english"))
              .map((post, index) => {
                return (
                  <div key={index} className="mb-3 flex items-center">
                    <p className="text-xs lg:text-sm mr-1">
                      {convertDate(post.date)}
                    </p>
                    <p className="text-base lg:text-lg">
                      - {post.title.rendered}
                    </p>
                  </div>
                );
              })
          : posts
              .filter((e) => e.class_list.includes("category-5890"))
              .map((post, index) => {
                return (
                  <div key={index} className="mb-3 flex items-center">
                    <p className="text-xs lg:text-sm mr-1">
                      {convertDate(post.date)}
                    </p>
                    <p className="text-sm lg:text-base">
                      - {post.title.rendered}
                    </p>
                  </div>
                );
              })}

        <button className="border-2 mt-5 border-black px-3 py-1 text-xs">
          <a
            href="https://github.com/explace/IshikawaSake_DesignWeb/tree/main/app"
            target="_blank"
          >
            READ ALL
          </a>
        </button>
      </div>
    </div>
  );
};

export default News;
