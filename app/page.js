"use client";
// import Video from 'next-video';
import { useEffect, useRef, useState } from "react";
import Story from "../components/Story/page";
import News from "../components/News/page";
// import Nav from "../components/Navbar/page";
import LandingPage from "../components/LandingPage/page";
import Location from "@/components/Location/page";
import Enjoy from "@/components/Enjoy/page";
import Products from "@/components/Products/page";
import Footer from "@/components/Footer/page";
import TopPage from "./TopPage/page";

export default function Home() {

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      {/* Comment out this component for the Grand Opening page */}
      <LandingPage />

      {/* Uncomment out this component for the Main Opening page */}
      {/* <TopPage/> */}

      <p id="newsProp"></p>
      
      {/* Comment out this component for the Grand Opening page */}
      <div>
      <News />
      </div>
      
      {/* Uncomment out this component for the Grand Opening page */}
      {/* <Story/>

      {/* Uncomment out this component for the Grand Opening page */}
      {/* <Location/> */}

       {/* Uncomment out this component for the Grand Opening page */}
      {/* <Products/> */}
      
      {/* Uncomment out this component for the Grand Opening page */}
      {/* <Enjoy/>  */}

      {/* Common part for both pages */}
      <Footer/>

      {/* <p className="mt-[90vh] text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum
        aut, unde voluptates repudiandae nemo esse labore expedita, consequuntur
        rerum quaerat, porro obcaecati distinctio deserunt maiores facere
        exercitationem repellat suscipit consequatur! Explicabo dolor porro illo
        tempora quia deserunt, molestias voluptatibus rem. Culpa aliquam tempora
        iste reprehenderit sapiente fugit illum minima eius. At modi fugit
        veniam! Corrupti beatae molestias distinctio, at labore earum, cumque
        aut reprehenderit repudiandae iusto nihil. Voluptate consequuntur
        maiores vel assumenda sunt eum! Cum aperiam fuga maiores natus unde?
        Saepe illum harum ab maiores repudiandae non ipsa, cupiditate expedita
        veniam aperiam perspiciatis deserunt sapiente similique blanditiis vitae
        fugit!
      </p> */}
    </>
  );
}
