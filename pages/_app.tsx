import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import {Noto_Sans} from "next/font/google";


// const pretendard = localFont({
//   src: "../styles/font/Pretendard/PretendardVariable.woff2",
//   preload: true,
//   weight: "300 400 500 600 700"
// });

const splineSans = localFont({
  src: "../styles/font/SplineSans/SplineSansMono[wght].ttf",
  preload: true,
});

const notoSans = localFont({
  src: "../styles/font/NotoSans/NotoSans-VariableFont_wdth,wght.ttf",
  preload: true,
});

const pretendard = localFont({
  preload:true,
  src: [
    {
      path: '../styles/font/Pretendard/Pretendard-Thin.subset.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-Light.subset.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-Bold.subset.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../styles/font/Pretendard/Pretendard-Black.subset.woff2',
      weight: '900',
      style: 'normal',
    },
  ]})

const n = Noto_Sans({subsets:["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return <main
  className={pretendard.className}
  >
<Component {...pageProps} />;
  </main> 
}
