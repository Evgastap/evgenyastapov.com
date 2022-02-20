import React from "react";
import { motion } from "framer-motion";

const photoImgStyle = {
  backgroundImage: "url(/photography.jpg)",
  backgroundSize: "cover",
  backgroundPositionX: "40%",
  backgroundPositionY: "60%",
};

const PhotographyNew = () => {
  return (
    <div className="fixed  w-screen h-screen bg-gray-900">
      <div className="fixed w-screen h-screen flex flex-col items-center justify-center mix-blend-difference text-white">
        <motion.div
          className="font-londrina-outline text-6xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Hi.
        </motion.div>
        <div className="font-londrina text-8xl my-5">I'm Evgeny</div>
        <div className="font-londrina-outline text-4xl">
          And I &lt;3 taking pics.
        </div>
      </div>
      <motion.img
        src="photography.jpg"
        initial={{ x: 0 }}
        animate={{ x: -1920 }}
        transition={{ duration: 10, repeat: Infinity }}
        className="w-1/3 absolute -right-1/2 top-1/2 -z-10"
      />
      <motion.img
        src="01 col-span-3.jpg"
        initial={{ x: 0 }}
        animate={{ x: -960 }}
        transition={{ duration: 15, repeat: Infinity }}
        className="w-1/2 absolute right-1/2 top-1/4 -z-10"
      />
    </div>
  );
};

export default PhotographyNew;
