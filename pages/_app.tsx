import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";


const pretendard = localFont({
  src: "../styles/font/Pretendard/PretendardVariable.woff2",
  preload: true,
  weight: "300 400 500 600 700"
});

const splineSans = localFont({
  src: "../styles/font/SplineSans/SplineSansMono[wght].ttf",
  preload: true,
  weight: "300 400 500 600 700"
});

export default function App({ Component, pageProps }: AppProps) {
  return <main
  className={splineSans.className}
  >
<Component {...pageProps} />;
  </main> 
}
