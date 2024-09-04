import React from "react";

const News = () => {
  return (
    <div className="mt-10 place-items-center border-0 border-red-500">
      <div className="flex items-center justify-center mb-6">
        <p className="text-4xl mr-3">NEWS</p>
        <p className="text-lg mr-3">Update</p>
        <p className="w-[65%] h-[2px] bg-black"></p>
      </div>

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
