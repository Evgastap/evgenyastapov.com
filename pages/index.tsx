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
  cardWidth: string;
}

const homeCards = [
  {
    link: "photography",
    caption: "Photography Evg",
    img: "https://res.cloudinary.com/evgenyastapov-com/image/upload/v1651763848/home/photography_e2fotc.jpg",
    layoutId: "photographyHero",
    alt: "Photography Evgeny Astapov",
    font: "font-handwriting",
    cardWidth: "md:col-span-3"
  },
  {
    link: "programming",
    caption: "Programming_Evg",
    img: "https://res.cloudinary.com/evgenyastapov-com/image/upload/v1651763847/home/programming_ar1bhs.jpg",
    layoutId: "programmingHero",
    alt: "Programming Evgeny Astapov",
    font: "font-roboto",
    cardWidth: "md:col-span-3"
  },
  {
    link: "videos",
    caption: "Video Evg",
    img: "https://res.cloudinary.com/evgenyastapov-com/image/upload/v1651763847/home/video_h1i6io.jpg",
    layoutId: "videoHero",
    alt: "Video Evgeny Astapov",
    font: "font-koulen",
    cardWidth: "md:col-span-2"
  },
  {
    link: "work",
    caption: "Work Evg",
    img: "https://res.cloudinary.com/evgenyastapov-com/image/upload/v1651763847/home/work_kvadag.jpg",
    layoutId: "workHero",
    alt: "Work Evgeny Astapov",
    font: "font-lilita",
    cardWidth: "md:col-span-2"
  },
  {
    link: "other",
    caption: "Other Evg",
    img: "https://res.cloudinary.com/evgenyastapov-com/image/upload/v1651763847/home/other_k5dpry.jpg",
    layoutId: "otherHero",
    alt: "Other Evgeny Astapov",
    font: "font-righteous",
    cardWidth: "md:col-span-2"
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
        className="grid h-screen grid-rows-5 md:grid-cols-6 md:grid-rows-2"
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
            className={`cursor-pointer ${card.cardWidth}`}
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={card.alt}
                 />
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
