import { motion } from "framer-motion";
import * as constants from "../constants";
import Link from "next/link";
import Script from "next/script";
import structured_data from "../public/structured_data.json";
import Image from "next/image";

const parentDivVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hover: {},
};

const cardVariants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  hover: {},
};

const imageHover = {
  hover: {
    scale: 1.1,
  },
};

const textHover = {
  hover: {
    scale: 0.9,
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
    layoutId: "photographyHero",
    alt: "Photography Evgeny Astapov",
    font: "font-handwriting",
  },
  {
    link: "programming",
    caption: "Programming_Evg",
    img: "/programming.jpg",
    layoutId: "programmingHero",
    alt: "Programming Evgeny Astapov",
    font: "font-roboto",
  },
  {
    link: "work",
    caption: "Work Evg",
    img: "/work.jpg",
    layoutId: "workHero",
    alt: "Work Evgeny Astapov",
    font: "font-lilita",
  },
  {
    link: "other",
    caption: "Other Evg",
    img: "/other.jpg",
    layoutId: "otherHero",
    alt: "Other Evgeny Astapov",
    font: "font-righteous",
  },
];

// to size the home element to the true size of a mobile screen

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        onLoad={() => console.log("ld+json loaded")}
        onError={() => console.error("ld+json load failed")}
        id="ld_json_script"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured_data) }}
      />
      <motion.div
        className="grid h-screen grid-rows-4 md:grid-cols-2 md:grid-rows-2"
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={parentDivVariants}
        // transition={{staggerChildren}}
        key="parentDiv"
      >
        {homeCards.map((card: Card) => (
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            exit={{ opacity: 0 }}
            key={card.link}
            className="cursor-pointer"
          >
            <Link href={card.link}>
              <div className="flex h-full w-full items-center justify-center overflow-hidden">
                <motion.div
                  layoutId={card.layoutId}
                  variants={imageHover}
                  inherit={true}
                  className="relative h-full w-full"
                  transition={[
                    constants.TRANSITION_SETTINGS,
                    constants.EASING_SETTINGS,
                  ]}
                >
                  <Image
                    src={card.img}
                    priority
                    layout="fill"
                    objectFit="cover"
                    alt={card.alt}
                  ></Image>
                </motion.div>
                <motion.h1
                  className={`absolute text-4xl font-thin text-white md:text-5xl ${card.font}`}
                  variants={textHover}
                  inherit={true}
                  transition={[
                    constants.TRANSITION_SETTINGS,
                    constants.EASING_SETTINGS,
                  ]}
                >
                  {card.caption}
                </motion.h1>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
