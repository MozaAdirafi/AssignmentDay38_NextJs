import "@/styles/globals.css";

import {
  Inter,
  Roboto_Condensed,
  Skranji,
  Ubuntu_Mono,
} from "next/font/google";
import Head from "next/head";

const skranji = Skranji({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto_c = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ubuntu_m = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Default Title Home</title>
      </Head>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-roboto_c: ${roboto_c.style.fontFamily};
            --font-mono: ${ubuntu_m.style.fontFamily};
            --font-skran: ${skranji.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
