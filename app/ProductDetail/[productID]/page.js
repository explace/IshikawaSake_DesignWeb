"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { changeNavTransition } from "@/redux/actions";

const ProductIDPage = ({ params }) => {
  const dispatch = useDispatch();

  const postFromNewWP = useSelector((state) => state.reducer1.posts);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(changeNavTransition(false));
    setPosts(postFromNewWP);
  }, [postFromNewWP]);

  return (
    <main className="border-0 border-blue-600 grid place-items-center h-[100vh]">
      {posts.map((post, index) => {
        if (post.id == params.productID) {
          return (
            <div className="grid place-items-center sm:place-items-start sm:flex">
              <Image
                className="w-[15rem] md:w-[20rem] mr-6"
                src="/SAKAE_SAKE_IMG_DUMMY.png"
                width={1700}
                height={1000}
                alt="Background Image"
              />

              <div className="mt-6 sm:mt-0">
                <p className="text-2xl md:text-3xl">
                  {post.acf.japanese_name_of_sake}
                </p>
                <p className="text-base md:text-xl">
                  {post.acf.english_name_of_sake}
                </p>

                <div className="border-red-700 border-0 my-6 flex items-center">
                  <Image
                    className="w-[2.5rem] mr-4"
                    src={`/LOGO_BLUE.png`}
                    width={3000}
                    height={1000}
                    alt="Story Image"
                  />
                  <p className="text-base md:text-xl">
                    {post.acf.type_of_sake}
                  </p>
                </div>

                <p
                  className="mt-4 md:mt-6 text-sm md:text-base w-[20rem]"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <p className="text-base md:text-xl mt-4">希望小売価格</p>

                <p className="text-base md:text-xl mt-2">{post.acf.volume}</p>
              </div>
            </div>
          );
        }
      })}
    </main>
  );
};

export default ProductIDPage;
