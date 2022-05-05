import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CloudflareImage from "../../components/CloudflareImage";
import * as constants from "../../constants";
import { LocalBusinessJsonLd, NextSeo } from "next-seo";
import Vimeo from "@u-wave/react-vimeo";

const vidArray = [
  "https://vimeo.com/705330486",
  "https://vimeo.com/705326990",
  "https://vimeo.com/702361162",
  "https://vimeo.com/702712996",
  "https://vimeo.com/702713942",
  "https://vimeo.com/702712880",
];

const index = () => {
  return (
    <>
      <div
        className="flex h-threequarters w-full 
                                items-center justify-center overflow-hidden bg-gradient-to-bl 
                                from-orange-700
                                text-center 
                                text-white sm:h-threequarters"
      >
        <div className="absolute">
          <h1 className="font-koulen text-4xl sm:text-6xl">I film vids, too</h1>
          <h2 className="mx-8 max-w-3xl py-5 font-extralight sm:text-xl">
            From aftermovies, to promotional videos, and even funny vids, I've
            filmed it all. Check out some of my portfolio below.
          </h2>
          <h3 className="font-light">
            <a href="mailto:video@evgenyastapov.com" className="underline">
              video@evgenyastapov.com
            </a>{" "}
            |{" "}
            <a href="https://instagram.com/evgastap" className="underline">
              @evgastap
            </a>
          </h3>
        </div>
        <motion.div
          layoutId="videoHero"
          transition={constants.TRANSITION_SETTINGS}
          className="relative -z-10 h-full w-full object-cover"
        >
          <CloudflareImage src="/video.jpg" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
      <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 md:mx-10 my-5">
        {vidArray.map((vid) => (
          <div className="flex h-full w-full items-center justify-center">
            <Vimeo video={vid} />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
