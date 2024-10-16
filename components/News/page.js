"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";

const News = () => {
  const fadeInNews = useRef(null);
  const newsSection = useRef(null);
  const [posts, setPosts] = useState([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDesc, setNewsDesc] = useState("");
  const [newsPopup, setNewsPopup] = useState(false);
  const lang = useSelector((state) => state.reducer1.lang);

  useEffect(() => {
    const target = fadeInNews.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = `fadeInAnimation .6s forwards ease-out ${index / 10}s`;
          });

          document.querySelectorAll(".fadeInNewsLine").forEach((item) => {
            item.style.animation = "fadeInNewsLineAni .6s forwards ease-out 1.5s";
          });
        } else {
          document.querySelectorAll(".fadeInNews").forEach((item) => {
            item.style.animation = "none";
          });
          document.querySelectorAll(".fadeInNewsLine").forEach((item) => {
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
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "https://admin.gotembaishikawashuzo.com/wp-json/wp/v2/posts"
          // "https://public-api.wordpress.com/wp/v2/sites/exdev0a2e2b7a53.wordpress.com/posts"

        );
        setPosts(response.data);
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
    <div className="mt-10 grid place-items-center relative">
      {newsPopup && (
        <section
          ref={newsSection}
          className="fixed inset-0 overflow-y-auto z-[10000] bg-white p-4 lg:p-8"
        >
          <div
            onClick={() => {
              setNewsPopup(false);
            }}
            className="w-fit ml-auto text-4xl lg:text-6xl cursor-pointer mt-[30%] lg:mt-32 mb-2 lg:mb-8 lg:mr-[20%] -mr-4"
          >
            <MdOutlineCancel />
          </div>

          <div className="grid place-items-center">
            <div className="w-full lg:w-[60%] px-4">
              <p className="text-3xl lg:text-5xl text-center">{newsTitle}</p>
              <div
                className="text-xl lg:text-2xl mt-4 lg:mt-10 text-center"
                dangerouslySetInnerHTML={{ __html: newsDesc }}
              />
            </div>
          </div>
        </section>
      )}

      <div ref={fadeInNews} className="flex items-center w-[95%] lg:w-[80%] mb-6">
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
              .map((post, index) => (
                <div
                  onClick={() => {
                    setNewsPopup(true);
                    setNewsTitle(post.title.rendered);
                    setNewsDesc(post.content.rendered);
                  }}
                  key={index}
                  className="mb-3 flex items-center cursor-pointer"
                >
                  <p className="text-xs lg:text-sm mr-1">{convertDate(post.date)}</p>
                  <p className="text-base lg:text-lg">- {post.title.rendered}</p>
                </div>
              ))
          : posts
              .filter((e) => e.class_list.includes("category-6"))
              .map((post, index) => (
                <div
                  onClick={() => {
                    setNewsPopup(true);
                    setNewsTitle(post.title.rendered);
                    setNewsDesc(post.content.rendered);
                  }}
                  key={index}
                  className="mb-3 flex items-center cursor-pointer"
                >
                  <p className="text-xs lg:text-sm mr-1">{convertDate(post.date)}</p>
                  <p className="text-sm lg:text-base">- {post.title.rendered}</p>
                </div>
              ))}

        <button className="border-2 mt-5 border-black px-3 py-1 text-xs">
          READ ALL
        </button>
      </div>
    </div>
  );
};

export default News;
