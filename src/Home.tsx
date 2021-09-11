import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import * as constants from "./constants";

const imageHover = {
  hover: {
    scale: 1.1,
  },
};

const textHover = {
  hover: {
    opacity: 0.3,
  },
};

interface Card {
  link: string;
  caption: string;
  img: string;
  placeholder: string;
  layoutId: string;
  alt: string;
  font: string;
}

const homeCards = [
  {
    link: "photography",
    caption: "Photography Evg",
    img: "/photography.jpg",
    placeholder: "/photography_mini.jpg",
    layoutId: "photographyHero",
    alt: "Photography Evgeny Astapov",
    font: "font-handwriting",
  },
  {
    link: "programming",
    caption: "Programming_Evg",
    img: "/programming.jpg",
    placeholder: "/programming_mini.jpg",
    layoutId: "programmingHero",
    alt: "Programming Evgeny Astapov",
    font: "font-roboto",
  },
  {
    link: "work",
    caption: "Work Evg",
    img: "/work.jpg",
    placeholder: "/work_mini.jpg",
    layoutId: "workHero",
    alt: "Work Evgeny Astapov",
    font: "font-lilita",
  },
  {
    link: "other",
    caption: "Other Evg",
    img: "/other.jpg",
    placeholder: "/other_mini.jpg",
    layoutId: "otherHero",
    alt: "Other Evgeny Astapov",
    font: "font-righteous",
  },
];

// to size the home element to the true size of a mobile screen
const fullScreen = {
  height: "calc(var(--vh, 1vh) * 100)",
};
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

export default function Home() {
  return (
    <motion.div
      className="grid grid-rows-4 md:grid-cols-2 md:grid-rows-2"
      style={fullScreen}
      transition={{ staggerChildren: 3 }}
    >
      <AnimatePresence>
        {homeCards.map((card: Card) => (
          <motion.div
            whileHover="hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={card.link}
          >
            <Link to={card.link}>
                <div className="w-full h-full flex justify-center items-center overflow-hidden">
              <ProgressiveImage
                src={card.img}
                delay={3000}
                placeholder={card.placeholder}
              >
                {(src: string | undefined) => (
                  <motion.img
                    layoutId={card.layoutId}
                    variants={imageHover}
                    inherit={true}
                    transition={constants.TRANSITION_SETTINGS}
                    src={src}
                    className="object-cover min-h-full"
                    alt={card.alt}
                  />
                )}
              </ProgressiveImage>
              <motion.h1
                className={`absolute text-white text-4xl md:text-5xl font-thin ${card.font}`}
                variants={textHover}
                inherit={true}
                transition={constants.TRANSITION_SETTINGS}
              >
                {card.caption}
              </motion.h1>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
