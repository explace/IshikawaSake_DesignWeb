"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Head from "next/head";
import { useDispatch,useSelector } from "react-redux";
import { changeNavTransition } from "@/redux/actions";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeNavTransition(false));
  },[])
  const containerStyle = {
    width: "100%",
    height: "35rem",
  };
  const center = {
    // lat: 35.29487128008948,
    // lng: 138.86749319008837,
   lat: 35.29405793498474,
   lng: 138.86793540759604,
  };

  const lang = useSelector((state) => state.reducer1.lang);
  const mapLanguage = lang === "jp" ? "ja" : "en";

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>御殿場石川酒造株式会社｜御厨榮蔵</title>
      </Head>
      <div className="pt-32 px-2 md:px-14 lg:px-32 xl:px-52">
        {/* <section className="grid md:flex justify-evenly items-center"> */}
        {lang === "jp" ? (
          <div className="text-base lg:text-lg">
            <p className="font-bold mb-2">会社概要</p>
            <p className="mb-2">会社名：御殿場石川酒蔵株式会社</p>
            <p className="mb-2">御厨榮蔵（みくりやさかえぐら）</p>
            <p className="mb-2">
              住　所：〒412-0008　静岡県御殿場市印野1388-37
            </p>
            <p className="mb-2">TEL：0550-75-7788</p>
            <p>MAIL：info@gotembaishikawashuzo.com</p>
          </div>
        ) : (
          <div className="text-base lg:text-lg">
            <p className="font-bold mb-2">Company Profile</p>
            <p className="mb-2">
              Company Name：Gotemba Ishikawa Sake Brewery Co., Ltd.
            </p>
            <p className="mb-2">Brewery Name：Mikuriya Sakae Sake Brewery</p>
            <p className="mb-2">
              Address：1388-37 Inno, Gotemba City, Shizuoka Prefecture, 412-0008
            </p>
            <p className="mb-2">TEL/FAX</p>
            <p>MAIL：info@gotembaishikawashuzo.com</p>
          </div>
        )}

        {/* </section> */}

        <div className="grid place-items-center mt-20 mb-20">
          <LoadScript
            googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}
            language={mapLanguage}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            ></GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
};

export default Profile;
