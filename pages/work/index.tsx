import { motion } from "framer-motion";
import React from "react";
import * as constants from "../../constants";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Work() {
  return (
    <>
      <NextSeo noindex={true} />
      <div
        className="flex h-screen
                            w-full items-center justify-center overflow-hidden 
                            bg-gradient-to-bl from-pink-500 text-center font-roboto text-2xl
                            font-extralight 
                            text-white sm:text-4xl"
      >
        <motion.div
          layoutId="workHero"
          transition={constants.TRANSITION_SETTINGS}
          className="relative -z-10 h-full w-full object-cover"
        >
          <Image src="https://res.cloudinary.com/evgenyastapov-com/image/upload/v1651763847/home/work_kvadag.jpg" layout="fill" objectFit="cover" />
        </motion.div>
        <p className="absolute mx-2 text-white">Page under construction 👀</p>
      </div>
    </>
  );
}
