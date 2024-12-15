"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowDroprightCircle, IoIosMail } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";
import { useDispatch,useSelector } from "react-redux";
import { changeNavTransition } from "@/redux/actions";

const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeNavTransition(false));
  },[])
  const lang = useSelector((state) => state.reducer1.lang);

  const [step, setStep] = useState(1);

  //   const [policy, setPolicy] = useState(false);

  const formSchema = z.object({
    name: z.string().trim().min(2, {
      message: "名前は少なくとも 2 文字の長さにする必要があります。",
    }),
    email: z
      .string()
      .email({ message: "有効なメールアドレスを入力してください" })
      .trim(),
    inquiryItem: z.string().trim(),
    inquiryContent: z.string().trim().min(10, {
      message: "コンテンツの長さは少なくとも 10 文字である必要があります。",
    }),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryItem: "卸に関するお問い合わせ",
    inquiryContent: "",
  });

  const step1Submit = async (e) => {
    e.preventDefault();
    try {
      const result = formSchema.safeParse(formData);

      if (!result.success) {
        result.error.issues.forEach((i) => {
          toast.error(i.message);
        });
        return;
      }

      setStep(2);
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

  const submit = async (e) => {
    e.preventDefault();
    try {
      //   if (!policy) {
      //     toast.error("続行するにはポリシー ボックスをチェックしてください。");
      //     return;
      //   }

      // const result = formSchema.safeParse(formData);

      // if (!result.success) {
      //   result.error.issues.forEach((i) => {
      //     toast.error(i.message);
      //   });
      //   return;
      // }

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
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success == true) {
        setStep(3);
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

  const main = useRef(null);

  useEffect(() => {
    // document.body.className = "bg-yellow-400";
    if (step == 2 || step == 3) {
      main.current.style.height = "100vh";
    }
    else{
      main.current.style.height = "auto";
    }
  }, [step]);

  return (
    <main
      ref={main}
      className="bg-gray-200 text-base h-[100%] md:text-xl py-28 px-6 md:px-10 lg:px-32 xl:px-52 grid place-items-center"
    >
      {step === 1 && (
        <>
          <p className="mb-8 mr-auto">
            <span className="text-[#ff0000] relative -top-1">*</span>
            {lang === "en" ? "is a required field" : "は必須項目"}
          </p>

          <form
            // ref={form1}
            action=""
            onSubmit={step1Submit}
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
            <div className="grid w-[100%] lg:w-[50rem] place-items-center mt-12">
              <p className="text-center">
                {lang === "en"
                  ? "After checking the contents of your inquiry, our staff will reply to you."
                  : "いただきました内容を確認のうえ、担当者よりご返事させていただきます。"}
              </p>
              <p className="text-center">
                {lang === "en"
                  ? "Please note that we may not be able to reply depending on the content of your inquiry."
                  : "また、内容によっては、お返事しかねる場合がございますので予めご了承ください。"}
              </p>

              {/* Insert here */}
              <p className="text-left py-3 px-4 bg-gray-50 leading-relaxed my-8 mx-0 md:mx-6">
                {lang === "en"
                  ? "Handling of Personal Information"
                  : "個人情報の取り扱いについて"}

                <br />
                {lang === "en"
                  ? "We recognize that the personal information you provide is important information that must be protected from the perspective of protecting personal information and respecting privacy, and we will manage it strictly."
                  : "ご提供いただいた個人情報は、個人情報保護・プライバシー尊重の観点から、保護すべき重要な情報であると認識し、厳重に管理いたします。"}

                <br />
                {lang == "en"
                  ? "We will only use personal information to respond to inquiries, provide services, and provide information that we believe will be beneficial to users. Furthermore, we will not disclose or provide personal information to third parties without the individual's consent, except when required by law or when necessary to protect the property or rights of users, our company, or third parties."
                  : "お問い合わせ・サービス提供・利用者に有益と思われる情報の提供に関する対応に限り個人情報を利用させていただきます。また、法律に基づく場合や、利用者・当店・第三者の財産、権利を保護するために必要な場合を除き、本人の同意を得ないで、個人情報を第三者に開示・提供することはいたしません。"}
              </p>

              <p className="text-center">
                {lang === "en"
                  ? "We will comply with the"
                  : "個人情報の取り扱いについては、"}
                <Link className="text-black underline mx-2" href={"#"}>
                  {lang === "en" ? "Privacy Policy" : "プライバシーポリシー"}
                </Link>
                {lang === "en"
                  ? "regarding the handling of personal information."
                  : "を遵守します。"}
              </p>
              <p className="text-center">
                {lang === "en"
                  ? "Please read the contents and press the 'Proceed to confirmation screen' button."
                  : "内容をご一読の上、「確認画面へ」ボタンを押してください。"}
              </p>
            </div>

            <button
              type="submit"
              className="flex items-center py-3 md:py-5 mt-10 md:mt-20 bg-white text-black border-2 border-black contactCard hover:text-white hover:bg-black transition-all duration-300 rounded-full"
            >
              <p className="font-semibold ml-16">
                {lang === "en" ? "To the confirmation screen" : "確認画面へ"}
              </p>
              <IoIosArrowDroprightCircle className="text-4xl ml-4 mr-8" />
            </button>

            {/* <input
              className="w-full mt-3 cursor-pointer text-red-500 py-2 px-6 focus:outline-none bg-ascent rounded text-lg"
              type="submit"
              value="Submit"
            /> */}
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <form
            action=""
            onSubmit={submit}
            className="w-[100%] grid place-items-center bg-white py-5 px-5 md:py-10 md:px-28"
          >
            <div className="w-[100%] block md:flex md:items-center">
              <label htmlFor="name" className="mr-8 font-semibold">
                {lang === "en" ? "Name" : "お名前"}{" "}
                {/* <span className="text-[#ff0000] relative -top-1">*</span> */}
              </label>
              <p className="mt-2 md:mt-0">{formData.name}</p>
            </div>
            <p className="w-[100%] h-[.05rem] bg-gray-300 my-8 md:my-12"></p>

            <div className="w-[100%] block md:flex md:items-center">
              <label htmlFor="email" className="mr-8 font-semibold">
                {lang === "en" ? "Email address" : "メールアドレス"}
              </label>
              <p className="mt-2 md:mt-0">{formData.email}</p>
            </div>
            <p className="w-[100%] h-[.05rem] bg-gray-300 my-8 md:my-12"></p>

            <div className="w-[100%] block md:flex md:items-center">
              <label htmlFor="inquiryContent" className="mr-8 font-semibold">
                {lang === "en" ? "Inquiry Content" : "お問い合わせ内容"}
              </label>
              <p className="mt-2 md:mt-0">{formData.inquiryContent}</p>
            </div>
            <p className="w-[100%] h-[.05rem] bg-gray-300 my-8 md:my-12"></p>

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

            <div className="grid place-items-center md:flex md:items-center md:justify-evenly mt-10 md:mt-20 w-full">
              <button
                // type="submit"
                onClick={() => {
                  setStep(1);
                }}
                className="font-semibold relative w-11/12 md:w-5/12 lg:w-1/3 text-center py-3 md:py-5 bg-white text-black border-2 border-black contactCard hover:text-white hover:bg-black transition-all duration-300 rounded-full"
              >
                {lang === "en" ? "Return" : "戻る"}
                <p className="absolute top-1/2 -translate-y-1/2 text-2xl ml-8 mr-4">
                  &larr;
                </p>
                {/* <IoIosArrowDroprightCircle className="text-4xl ml-4 mr-8" /> */}
              </button>
              <br className="md:hidden" />
              <button
                type="submit"
                // onClick={()=>{
                //   setStep(2);
                // }}
                className="font-semibold relative w-11/12 md:w-5/12 lg:w-1/3 py-3 md:py-5 bg-black text-white border-2 border-black contactCard hover:text-black hover:bg-white transition-all duration-300 rounded-full"
              >
                {lang === "en" ? "Send" : "送信する"}
                <p className="absolute top-1/2 -translate-y-1/2 right-0 text-2xl ml-4 mr-8">
                  &rarr;
                </p>
              </button>
            </div>
          </form>
        </>
      )}

      {step === 3 && (
        <div className="w-[100%] grid place-items-center bg-white py-5 px-5 md:py-10 md:px-28">
          <p className="text-2xl lg:text-4xl font-semibold mb-8 text-center">
            {lang === "en"
              ? "Thank you for contacting us!"
              : "お問い合わせいただき、ありがとうございます。"}
          </p>

          <p className="text-center text-base lg:text-2xl">
            {lang === "en"
              ? "After checking the contents, we will get back to you shortly."
              : "内容を確認後、近⽇中にご返信いたします。"}
            <br />
            {lang === "en"
              ? "Please note that we may take some time to respond to inquiries received on Saturdays, Sundays, and holidays."
              : "⼟⽇祝⽇にいただいたお問い合わせについては、お時間をいただく場合がございます。"}
            <br />
            {lang === "en"
              ? "We appreciate your understanding in advance."
              : "あらかじめご了承いただきますようお願い申しあげます。"}
          </p>

          <Link
            href={"/TopPage"}
            // type="submit"
            // onClick={()=>{
            //   setStep(2);
            // }}
            className="font-semibold text-center mt-10 relative w-[90%] lg:w-[20rem] py-3 md:py-5 bg-white text-black border-2 border-black contactCard hover:text-white hover:bg-black transition-all duration-300 rounded-full"
          >
            {lang === "en" ? "Back to TOP" : "TOPへ戻る"}
            <p className="absolute top-1/2 -translate-y-1/2 right-0 text-2xl ml-4 mr-8">
              &rarr;
            </p>
          </Link>
        </div>
      )}
    </main>
  );
};

export default ContactPage;
