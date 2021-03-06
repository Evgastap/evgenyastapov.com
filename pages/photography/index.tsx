import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CloudflareImage from "../../components/CloudflareImage";
import Image from "next/image";
import * as constants from "../../constants";
import { LocalBusinessJsonLd, NextSeo } from "next-seo";
var cloudinary = require("cloudinary");

// TODO: add some shots from the old webiste

export async function getStaticProps() {
  // set up cloudinary config
  cloudinary.config({
    cloud_name: "evgenyastapov-com", // add your cloud_name
    api_key: process.env.CLD_API_KEY, // add your api_key
    api_secret: process.env.CLD_API_SECRET, // add your api_secret
    secure: true,
  });
  // access all resources in folder
  const imagesFetch = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: "photography", 
    max_results: 100
  });
  console.log(imagesFetch);
  return {
    props: { images: imagesFetch.resources.map((res) => res.public_id) },
  };
}

export default function Photography({ images }) {
  return (
    <>
      <NextSeo title="Evgeny Astapov - Photographer in Rotterdam" />
      <LocalBusinessJsonLd
        type="Photographer"
        id="https://evgenyastapov.com/#photograper"
        address="Rotterdam, Netherlands"
        name="Evgeny Astapov Photograpy"
        description="Evgeny Astapov is a photographer based in Rotterdam. His work mainly consists of event photography, portraits, and travel photography."
        url="https://evgenyastapov.com/photography"
        sameAs={["https://instagram.com/evgastap"]}
      />
      <div
        className="flex h-threequarters w-full 
                                items-center justify-center overflow-hidden bg-gradient-to-bl 
                                from-indigo-800
                                text-center 
                                text-white sm:h-threequarters"
      >
        <div className="absolute">
          <h1 className="font-handwriting text-4xl sm:text-6xl">
            I ❤ taking pictures.
          </h1>
          <h2 className="mx-8 max-w-3xl py-5 font-extralight sm:text-xl">
            I love shooting pics and making vids. Professionally, I enjoy
            shooting events, but in my free time I&apos;ve done everything from
            nature to product photography. Check out some of my event shots
            below ;)
          </h2>
          <h3 className="font-light">
            <a href="mailto:photo@evgenyastapov.com" className="underline">
              photo@evgenyastapov.com
            </a>{" "}
            |{" "}
            <a href="https://instagram.com/evgastap" className="underline">
              @evgastap
            </a>
          </h3>
        </div>
        <motion.div
          layoutId="photographyHero"
          transition={constants.TRANSITION_SETTINGS}
          className="relative -z-10 h-full w-full object-cover"
        >
          <Image
            src="v1651763848/home/photography_e2fotc.jpg"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>

      <div className="w-full max-w-7xl gap-6 sm:mx-auto sm:my-10 sm:grid sm:grid-cols-4">
        {images.map(
          // hey, I'm literally taking images from a directory and applying a class name if they have a 'col-span-x' property in their name.
          // who needs a CMS, right?
          (image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative m-4 h-96 overflow-hidden sm:m-0 ${
                image.includes("col-span-2") && "sm:col-span-2"
              } ${image.includes("col-span-3") && "sm:col-span-3"}`}
            >
              <Image
                key={index}
                src={image}
                layout="fill"
                objectFit="cover"
                alt={`Evgeny Astapov Photography Portfolio ${index + 1}`}
                loading="lazy"
              />
            </motion.div>
          )
          // I really don't understand how a brain so large fits into my skull sometimes
        )}
      </div>
      {/* <div className="fixed h-screen w-screen">
                    <img src={listOfImages[1].default} className="absolute z-10 w-full max-h-1/2" alt="" />
                </div> */}
    </>
  );
}
