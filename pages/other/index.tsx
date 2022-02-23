import { motion } from "framer-motion";
import React from "react";
import * as constants from "../../constants";
import Image from "next/image";

// styles for the work image
const otherImgStyle = {
  backgroundImage: "url(/other.jpg)",
  backgroundSize: "cover",
  backgroundPositionX: "50%",
  backgroundPositionY: "50%",
};

export default function Other() {
  return (
    <div
      className="font-roboto flex
                            h-screen w-full items-center justify-center 
                            overflow-hidden bg-gradient-to-bl from-yellow-500 text-center text-2xl
                            font-extralight 
                            text-white sm:text-4xl"
    >
      <motion.div
        layoutId="otherHero"
        transition={constants.TRANSITION_SETTINGS}
        className="relative -z-10 h-full w-full object-cover"
      >
        <Image src="/other.jpg" layout="fill" objectFit="cover" />
      </motion.div>
      <p className="absolute mx-2 text-white">Page under construction 👀</p>
    </div>
  );
}
