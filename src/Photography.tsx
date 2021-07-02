import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import * as constants from "./constants"

// styles for the photography image
const photoImgStyle = {
  backgroundImage: "url(/photography.jpg)",
  backgroundSize: "cover",
  backgroundPositionX: "40%",
  backgroundPositionY: "60%",
}

// TODO: add some shots from the old webiste

function importAll(r: any) {
  return r.keys().map(r)
}
export default function Photography() {
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    const listOfImages = importAll(require.context("./portfolio/", false, /\.(png|jpe?g|svg)$/))
    setImages(listOfImages)
  }, [])
  return (
    <div>
      <div
        className="w-full h-threequarters sm:h-threequarters 
                                flex justify-center items-center text-center 
                                text-white
                                overflow-hidden 
                                bg-gradient-to-bl from-indigo-800"
      >
        <div className="absolute">
          <h1 className="font-handwriting text-4xl sm:text-6xl">I ❤ taking pictures.</h1>
          <h2 className="pt-5 max-w-3xl sm:text-xl font-extralight mx-8">
            I love shooting pics and making vids. Professionally, I enjoy shooting events, but in my free time I've done
            everything from nature to product photography. Check out some of my event shots below ;)
          </h2>
        </div>
        <motion.div
          layoutId="photographyHero"
          transition={constants.TRANSITION_SETTINGS}
          className="object-cover min-h-full w-full -z-10"
          style={photoImgStyle}
        />
      </div>

      <div className="sm:grid sm:grid-cols-4 gap-4 m-2 sm:m-5">
        {images.map(
          // hey, I'm literally taking images from a directory and applying a class name if they have a 'col-span-x' property in their name.
          // who needs a CMS, right?
          (image, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              className={`w-full h-full my-2 sm:my-0 ${image.default.includes("col-span-2") && "sm:col-span-2"} ${
                image.default.includes("col-span-3") && "sm:col-span-3"
              }`}
            >
              <img
                key={index}
                src={image.default}
                alt={`Evgeny Astapov Portfolio ${index + 1}`}
                className="object-cover min-h-full"
                loading="lazy"
              ></img>
            </motion.div>
          )
          // I really don't understand how a brain so large fits into my skull sometimes
        )}
      </div>
      {/* <div className="fixed h-screen w-screen">
                    <img src={listOfImages[1].default} className="absolute z-10 w-full max-h-1/2" alt="" />
                </div> */}
    </div>
  )
}
