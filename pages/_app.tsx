import { Inter } from "next/font/google";
import "../styles/globals.css";

import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"], display: "swap" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
