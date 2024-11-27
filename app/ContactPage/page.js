"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle, IoIosMail } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const lang = useSelector((state) => state.reducer1.lang);

  //   const [policy, setPolicy] = useState(false);

  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, {
        message: "名前は少なくとも 2 文字の長さにする必要があります。",
      }),
    email: z
      .string()
      .email({ message: "有効なメールアドレスを入力してください" })
      .trim(),
    inquiryItem: z.string().trim(),
    inquiryContent: z
      .string()
      .trim()
      .min(10, {
        message: "コンテンツの長さは少なくとも 10 文字である必要があります。",
      }),
  });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryItem: "卸に関するお問い合わせ",
    inquiryContent: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      //   if (!policy) {
      //     toast.error("続行するにはポリシー ボックスをチェックしてください。");
      //     return;
      //   }

      const result = formSchema.safeParse(formData);

      if (!result.success) {
        result.error.issues.forEach((i) => {
          toast.error(i.message);
        });
        return;
      }

      //   if (formData.email !== formData.emailConfirm) {
      //     toast.error("メールアドレスが一致しません。");
      //     return;
      //   }

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
        body: JSON.stringify(result.data),
      });
      const data = await response.json();
      if (data.success == true) {
        toast.success(data.msg);
        setFormData({
          name: "",
          email: "",
          inquiryItem: "卸に関するお問い合わせ",
          inquiryContent: "",
        });
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("フォームの送信中にエラーが発生しました。");
      setFormData({
        name: "",
        email: "",
        inquiryItem: "卸に関するお問い合わせ",
        inquiryContent: "",
      });
    }
  };

  return (
    <div className="bg-gray-200 text-base md:text-xl py-28 px-6 md:px-10 lg:px-32 xl:px-52 grid place-items-center">
      {/* <p className="text-5xl my-20 font-semibold text-center">お問い合わせ</p> */}

      {/* <div className="bg-gray-200 text-base md:text-xl py-28 px-6 md:px-10 lg:px-32 xl:px-52 grid place-items-center"> */}
          {/* <p className="font-semibold text-4xl mb-5">お問い合わせフォーム</p> */}

          {/* <p className="w-[3rem] h-[.55rem] bg-[#94d4e4] mb-6 rounded-2xl"></p> */}
          <p className="mb-8 mr-auto">
            <span className="text-[#ff0000] relative -top-1">*</span>
            {lang === "en" ? "is a required field" : "は必須項目"}
          </p>

          <form
            action=""
            onSubmit={submit}
            className="w-[100%] grid place-items-center"
          >
            <div className="w-[100%] block md:flex md:items-center md:justify-between mb-8 md:mb-4">
              <label htmlFor="name" className="">
                {lang === "en" ? "Name" : "お名前"}{" "}
                <span className="text-[#ff0000] relative -top-1">*</span>
              </label>
              <br />
              <input
                name="name"
                type="text"
                value={formData.name}
                required
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                  })
                }
                // placeholder="例）田中 太郎"
                className="border-[1px] border-gray-400 w-[100%] md:w-[70%] p-2 md:px-6 md:py-3 "
              />
            </div>

            <div className="w-[100%] block md:flex md:items-center md:justify-between mb-8 md:mb-4">
              <label htmlFor="email" className="">
                {lang === "en" ? "Email address" : "メールアドレス"}
                <span className="text-[#ff0000] relative -top-1">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                required
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                  })
                }
                // placeholder="例）xxxx@explace.co.jp"
                className="border-[1px] border-gray-400 w-[100%] md:w-[70%] p-2 md:px-6 md:py-3 "
              />
            </div>

            {/* <div className="w-[100%] block md:flex md:items-center md:justify-between mb-8 md:mb-4">
              <label htmlFor="inquiryItem" className="">
                {lang === "en" ? "Inquiry Item" : "お問い合わせ項目"}
                <span className="text-[#ff0000] relative -top-1 left-1">*</span>
              </label>
              <select
                // ref={selectRef}
                value={formData.inquiryItem}
                className="select cursor-pointer border-[1px] border-gray-400 w-[100%] md:w-[70%] p-2 md:px-6 md:py-3 "
                name="inquiryItem"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                  })
                }
              >
                <option value="卸に関するお問い合わせ">卸に関するお問い合わせ</option>
                <option value="酒造見学に関するお問い合わせ">酒造見学に関するお問い合わせ</option>
                <option value="取材に関するお問い合わせ">取材に関するお問い合わせ</option>
                <option value="その他のお問い合わせ">その他のお問い合わせ</option>
              </select>
            </div> */}

            <div className="w-[100%] block md:flex md:items-center md:justify-between mb-8 md:mb-4">
              <label htmlFor="inquiryContent" className="">
                {lang === "en" ? "Inquiry Content" : "お問い合わせ内容"}
                <span className="text-[#ff0000] relative -top-1 left-1">*</span>
              </label>
              <textarea
                required
                className="border-[1px] border-gray-400 w-[100%] md:w-[70%] p-2 md:px-6 md:py-3"
                name="inquiryContent"
                value={formData.inquiryContent}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                  })
                }
                // placeholder="例）リスティング広告の出稿について相談したいです。"
                rows={8}
              ></textarea>
            </div>

            {/* <div className="flex items-center mt-2 mb-14">
              <input
                onClick={() => {
                  setPolicy(!policy);
                }}
                type="checkbox"
                className="cursor-pointer"
              />
              <p>
                <Link className="text-[#94d4e4] ml-2 underline" href={"/policy"}>
                  プライバシーポリシー
                </Link>
                に同意する
              </p>
              </div> */}
            <div className="text-center mt-12">
  <p>
    {
      lang === "en" ? "After checking the contents of your inquiry, our staff will reply to you." : "いただきました内容を確認のうえ、担当者よりご返事させていただきます。"
    }
  </p>
  <p>
    {
      lang === "en" ? "Please note that we may not be able to reply depending on the content of your inquiry." : "また、内容によっては、お返事しかねる場合がございますので予めご了承ください。"
    }
  </p>

  {/* Insert here */}
  <div className="border border-gray-300 text-left py-3 px-4 bg-gray-50 text-black leading-relaxed mt-6 mb-6 w-[750px]">
    <p className="mb-4">
    個人情報の取り扱いについて<br/>
    ご提供いただいた個人情報は、個人情報保護・プライバシー尊重の観点から、保護すべき重要な情報であると認識し、厳重に管理いたしま
    す。<br/>
    お問い合わせ・サービス提供・利用者に有益と思われる情報の提供に関する対応に限り個人情報を利用させていただきます。
    また、法律に基づく場合や、利用者・当店・第三者の財産、権利を保護するために必要な場合を除き、本人の同意を得ないで、個人情報を
    第三者に開示・提供することはいたしません。
    </p>
  </div>

  <p>
    {
      lang === "en" ? "We will comply with the" : "個人情報の取り扱いについては、"
    }
    <Link className="text-black underline mx-2" href={"#"}>
      {
        lang === "en" ? "Privacy Policy" : "プライバシーポリシー"
      }
    </Link>
    {
      lang === "en" ? "regarding the handling of personal information." : "を遵守します。"
    }
  </p>
  <p>
    {
      lang === "en" ? "Please read the contents and press the 'Proceed to confirmation screen' button." : "内容をご一読の上、「確認画面へ」ボタンを押してください。"
    }
  </p>
</div>

            <button
              type="submit"
              className="flex items-center py-3 md:py-5 mt-10 md:mt-20 bg-white text-black border-2 border-black contactCard hover:text-white hover:bg-black transition-all duration-300 rounded-full"
            >
              <p className="font-semibold ml-16">
                {
                    lang === "en" ? "To the confirmation screen" : "確認画面へ"
                }
              </p>
                <IoIosArrowDroprightCircle className="text-4xl ml-4 mr-8" />
            </button>

            {/* <input
              className="w-full mt-3 cursor-pointer text-red-500 py-2 px-6 focus:outline-none bg-ascent rounded text-lg"
              type="submit"
              value="Submit"
            /> */}
          </form>
        {/* </div> */}
    </div>
  );
};

export default ContactPage;
