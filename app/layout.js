"use client"
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/page";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Head from "next/head";
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap');
</style> */}
const inter = Zen_Old_Mincho({ subsets: ["latin"],weight:'500' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>石川酒造 - 御殿場市の歴史ある酒蔵で地元を活かしたこだわりの日本酒を堪能</title>
        <meta name="description" content="石川酒造は、東京都で150年以上の伝統を誇る酒蔵です。こだわりの日本酒を製造し、歴史と自然に囲まれた環境で、酒造見学や試飲が楽しめます。"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
        <Nav/>
        {children}
        </Provider>
        </body>
    </html>
  );
}
