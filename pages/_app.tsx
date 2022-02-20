import "../styles/globals.css";
import type { value AppProps } from "next/app";
import { value AnimateSharedLayout, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
