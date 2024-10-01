import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/page";
// import { Provider } from "react-redux";
// import store from "@/redux/store";
import Head from "next/head";
{
  /* <style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap');
</style> */
}
const inter = Zen_Old_Mincho({ subsets: ["latin"], weight: "500" });
import ProviderWrapper from "@/components/ProviderWrapper";
export const metadata = {
  title:
    "石川酒造 - 御殿場市の歴史ある酒蔵で地元を活かしたこだわりの日本酒を堪能",
  description:
    "石川酒造は、東京都で150年以上の伝統を誇る酒蔵です。こだわりの日本酒を製造し、歴史と自然に囲まれた環境で、酒造見学や試飲が楽しめます。",
  keywords:
    "石川酒造 , 御厨榮蔵 , 御殿場市 , 御殿場石川酒造株式会社 , 石川酒蔵 , 日本酒 , 御殿場 , 静岡県 , 酒蔵 , 酒造 , 御殿場市印野1388-37",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    title:
      "石川酒造 - 御殿場市の歴史ある酒蔵で地元を活かしたこだわりの日本酒を堪能",
    description:
      "石川酒造は、東京都で150年以上の伝統を誇る酒蔵です。こだわりの日本酒を製造し、歴史と自然に囲まれた環境で、酒造見学や試飲が楽しめます。",
    images: ["https://m.media-amazon.com/images/I/71ijyeOZEUL._SX679_.jpg"],
    url: "https://www.gotembaishikawashuzo.com",
  },
  twitter: {
    title:
      "石川酒造 - 御殿場市の歴史ある酒蔵で地元を活かしたこだわりの日本酒を堪能",
    description:
      "石川酒造は、東京都で150年以上の伝統を誇る酒蔵です。こだわりの日本酒を製造し、歴史と自然に囲まれた環境で、酒造見学や試飲が楽しめます。",
    images: ["https://m.media-amazon.com/images/I/71ijyeOZEUL._SX679_.jpg"],
    card: "summary_large_image",
    creator: "@gotembaishikawashuzo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <title>石川酒造 - 御殿場市の歴史ある酒蔵で地元を活かしたこだわりの日本酒を堪能</title>
        <meta name="description" content="石川酒造は、東京都で150年以上の伝統を誇る酒蔵です。こだわりの日本酒を製造し、歴史と自然に囲まれた環境で、酒造見学や試飲が楽しめます。"/>
        <meta name="keywords" content="石川酒造, 御厨榮蔵, 御殿場市, 御殿場石川酒造株式会社, 石川酒蔵, 日本酒, 御殿場, 静岡県, 酒蔵, 酒造, 御殿場市印野1388-37"/>
        <link rel="icon" href="main1.png" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" />
      </head> */}
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <ProviderWrapper>
          <Nav />
          {children}
        </ProviderWrapper>

        {/* </Provider> */}
      </body>
    </html>
  );
}
