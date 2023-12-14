import { Inter } from "next/font/google";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Navigation } from "@/components/index";

const inter = Inter({ subsets: ["latin"], display: "swap" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} antialiased bg-[#0D1216]`}>
      <Navigation />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
