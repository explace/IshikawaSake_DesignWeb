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
        <title>Title</title>
        {/* <meta name="description" content="desc" /> */}
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
