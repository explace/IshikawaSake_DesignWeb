import React from "react";
import Image from "next/image";
const ProductCard = (props) => {
  return (
    <div className="border-0 border-blue-600 w-[16rem] mb-8">
      <Image
      className="w-full mb-8"
        src="/SAKAE_SAKE_IMG_DUMMY.png"
        width={1700}
        height={1000}
        alt="Background Image"
      />

      <div className="border-0 border-red-500 flex items-center">
        <p className="text-2xl font-semibold">{props.jpmsg}</p>
        <p className="ml-auto text-2xl">{props.volume}</p>
      </div>
      <p className="text-lg">{props.enmsg}</p>

      <div className="border-red-700 border-0 my-6 flex items-center">
        <Image
        className="w-[2.5rem] mr-4"
            src={`/LOGO_${props.color}.png`}
            width={3000}
            height={1000}
            alt="Story Image"
            />
            <p className="text-xl">{props.name}
            </p>
      </div>

      {
        props.points.map((point, index) => {
          return (
              <p key={index} className="text-xl mb-2">{point}</p>
          );
        })
      }

      {/* <p className="text-base mt-6">
      {props.desc}
      </p> */}
      <p
                    className="border-0 border-red-600 mt-4 md:mt-6 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: props.desc }}
                  />
    </div>
  );
};

export default ProductCard;
