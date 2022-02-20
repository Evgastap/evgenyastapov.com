import "../styles/globals.css";
import { AppProps } from "next/app";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

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
