import "../styles/globals.css";
import { AppProps } from "next/app";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <DefaultSeo
        openGraph={{
          title:
            "Evgeny Astapov - Photographer, tech guy & all-around creative.",
          type: "website",
          locale: "en_IE",
          url: "https://evgenyastapov.com",
          images: [{url: "https://evgenyastapov.com/meta.jpg", alt: "Evgeny Astapov - Photographer, tech guy & all-around creative.", height: 627, width: 1200}],
          description:
            "Hi! I'm Evgeny, a photographer, tech guy and all-around creative. Everything from web design, to coding, to growth marketing and photography - I've done it all.",
          site_name:
            "Evgeny Astapov - Photographer, tech guy & all-around creative.",
          profile: {
            firstName: "Evgeny",
            lastName: "Astapov",
            username: "evgastap",
          },
        }}
        twitter={{
          handle: "@evgastap",
          site: "https://evgenyastapov.com",
          cardType: "summary_large_image",
        }}
        defaultTitle="Evgeny Astapov - Photographer, tech guy & all-around creative."
        description="Hi! I'm Evgeny, a photographer, tech guy and all-around creative. Everything from web design, to coding, to growth marketing and photography - I've done it all."
      />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
