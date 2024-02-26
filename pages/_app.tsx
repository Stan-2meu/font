import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import {Noto_Sans} from "next/font/google";


const pretendard = localFont({
  src: "../styles/font/Pretendard/PretendardVariable.woff2",
  preload: true,
  weight: "300 400 500 600 700"
});

const splineSans = localFont({
  src: "../styles/font/SplineSans/SplineSansMono[wght].ttf",
  preload: true,
});

const notoSans = localFont({
  src: "../styles/font/NotoSans/NotoSans-VariableFont_wdth,wght.ttf",
  preload: true,
});

const n = Noto_Sans({subsets:["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return <main
  className={n.className}
  >
<Component {...pageProps} />;
  </main> 
}
