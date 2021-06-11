import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image'
import * as constants from './constants'

const imageHover = {
    hover: {
        scale: 1.1
    },
}

const textHover = {
    hover: {
        opacity: 0.3
    }
}

const homeCards = [
    {
        link: "photography",
        caption: "Photography Evg",
        img: "/photography.jpg",
        placeholder: "/photography_mini.jpg",
        layoutId: "photographyHero",
        alt: "Photography Evgeny Astapov",
        font: "font-handwriting"
    },
    {
        link: "programming",
        caption: "Programming_Evg",
        img: "/programming.jpg",
        placeholder: "/programming_mini.jpg",
        layoutId: "programmingHero",
        alt: "Programming Evgeny Astapov",
        font: "font-roboto"
    },
    {
        link: "work",
        caption: "Work Evg",
        img: "/work.jpg",
        placeholder: "/work_mini.jpg",
        layoutId: "workHero",
        alt: "Work Evgeny Astapov",
        font: "font-lilita"
    },
    {
        link: "other",
        caption: "Other Evg",
        img: "/other.jpg",
        placeholder: "/other_mini.jpg",
        layoutId: "otherHero",
        alt: "Other Evgeny Astapov",
        font: "font-righteous"
    },
]

// to size the home element to the true size of a mobile screen
const fullScreen = {
    height: "calc(var(--vh, 1vh) * 100)"
}
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

export default function Home() {
    return (
        <div className="grid grid-rows-4 md:grid-cols-2 md:grid-rows-2" style={fullScreen}>
            <AnimatePresence exitBeforeEnter>
                {homeCards.map((card) => 
                    <Link key={card.link} to={card.link}>
                    <motion.div className="w-full h-full flex justify-center items-center overflow-hidden" whileHover="hover">
                        <ProgressiveImage src={card.img} delay={3000} placeholder={card.placeholder}>{src => <motion.img layoutId={card.layoutId} variants={imageHover} inherit="True" transition={constants.TRANSITION_SETTINGS} src={src} className="object-cover min-h-full" alt={card.alt} />}</ProgressiveImage>
                        <motion.h1 className={`absolute text-white text-4xl md:text-5xl font-thin ${card.font}`} variants={textHover} inherit="True" transition={constants.TRANSITION_SETTINGS}>{card.caption}</motion.h1>
                    </motion.div>
                    </Link> 
                )}
            </AnimatePresence>
        </div>
    )
}
