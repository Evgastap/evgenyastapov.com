import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image'
import * as constants from './constants'
import MetaTags from 'react-meta-tags'

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
            <MetaTags>
                <meta prefix="og: http://evgenyastapov.com" property="og:type" content="website" />
                <meta prefix="og: http://evgenyastapov.com" property="og:url" content="http://evgenyastapov.com/" />
                <meta prefix="og: http://evgenyastapov.com" property="og:title" content="Evgeny Astapov | Photographer, tech guy & all-around creative" />
                <meta prefix="og: http://evgenyastapov.com" property="og:description" content="Hi! I'm Evgeny, a photographer, tech guy and all-around creative. Everything from web design, to coding, to growth marketing and photography - I've done it all." />
                <meta name="image" prefix="og: http://evgenyastapov.com" property="og:image" content="%PUBLIC_URL%/meta.jpg" />
                <meta prefix="og: http://evgenyastapov.com" property="og:image:url" content="${require(`%PUBLIC_URL%/meta.jpg`)}" />
                <meta prefix="og: http://evgenyastapov.com" property="og:image:type" content="image/jpeg" />
                <meta prefix="og: http://evgenyastapov.com" property="og:image:width" content="1200" />
                <meta prefix="og: http://evgenyastapov.com" property="og:image:height" content="629" />
            </MetaTags>
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
