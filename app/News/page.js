import React, { useEffect, useRef } from "react";

const News = () => {

  const fadeIn = useRef(null);

  useEffect(() => {
    const target = fadeIn.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // target.classList.add("fadeIn");
          // target.classList.style.animation="fadeInNewsAni 3s forwards ease-out"
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = `fadeInNewsAni .6s forwards ease-out ${index/10}s`;
          });
          document.querySelector(".fadeInNewsLine").style.animation = `fadeInNewsLineAni .6s forwards ease-out 1.5s`
        }
        else {
          // Optionally, remove the class when it leaves the viewport
          // target.classList.remove("fadeIn");
          document.querySelectorAll(".fadeInNews").forEach((item, index) => {
            item.style.animation = "none"
          });
          document.querySelector(".fadeInNewsLine").style.animation = "none";
        
        }
      });
    });

    if (target) {
      observer.observe(target);
    }
    // Cleanup observer when the component unmounts
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="mt-10 place-items-center border-0 border-red-500">
     <div ref={fadeIn} className="flex items-center justify-center mb-6">
        <div className="text-4xl mr-3 flex items-center">
          <p className="fadeInNews">N</p>
          <p className="fadeInNews">E</p>
          <p className="fadeInNews">W</p>
          <p className="fadeInNews">S</p>
        </div>
        <div className="text-lg mr-3 flex items-center">
          <p className="fadeInNews">U</p>
          <p className="fadeInNews">p</p>
          <p className="fadeInNews">d</p>
          <p className="fadeInNews">a</p>
          <p className="fadeInNews">t</p>
          <p className="fadeInNews">e</p>
        </div>
        <p className="w-[65%] h-[2px] bg-black fadeInNewsLine"></p></div>

      <div className="w-[100%] grid place-items-center">
      <div className="w-[77%]">
      <p className="mb-2"><span className="text-xs">2025.12.10</span> – 年末年始の営業について</p>
      <p className="mb-2">
        <span className="text-xs">2025.8.20</span> – 「美しい味」の原点となる人 / MAISON［PARIS］オーナー・シェフ
        渥美 創太さん
      </p>
      <p className="mb-2">
        <span className="text-xs">2025.5.10</span> – 環境のために私たちができること /
        山中産業［ティーバッグ製造・販売］白石 俊正さん
      </p>
      <p className="mb-2">
        <span className="text-xs">2025.5.10</span> – 環境のために私たちができること /
        山中産業［ティーバッグ製造・販売］白石 俊正さん
      </p>
      <p className="mb-2">
        <span className="text-xs">2025.5.10</span> – 環境のために私たちができること /
        山中産業［ティーバッグ製造・販売］白石 俊正さん
      </p>
      <button className="border-2 mt-5 border-black px-3 py-1 text-xs">READ ALL</button>
      </div>

    
      </div>
      
      </div>
  );
};

export default News;
