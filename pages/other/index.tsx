import { motion } from "framer-motion";
import React from "react";
import * as constants from "../../constants";
import CloudflareImage from "../../components/CloudflareImage";
import { NextSeo } from "next-seo";

export default function Other() {
  return (
    <>
    <NextSeo noindex={true} />
      <div
        className="flex h-screen
                            w-full items-center justify-center overflow-hidden 
                            bg-gradient-to-bl from-yellow-500 text-center font-roboto text-2xl
                            font-extralight 
                            text-white sm:text-4xl"
      >
        <motion.div
          layoutId="otherHero"
          transition={constants.TRANSITION_SETTINGS}
          className="relative -z-10 h-full w-full object-cover"
        >
          <CloudflareImage src="/other.jpg" layout="fill" objectFit="cover" />
        </motion.div>
        <p className="absolute mx-2 text-white">Page under construction 👀</p>
      </div>
    </>
  );
}
