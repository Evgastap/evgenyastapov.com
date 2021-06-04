import { motion } from 'framer-motion'
import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import Typical from 'react-typical';

// styles for the programming image
const progImgStyle = {
    backgroundImage: "url(/programming.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "45%",
    backgroundPositionY: "45%"
}

export default function Programming() {
    return (
        <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 w-full flex justify-center items-center text-center text-2xl text-mono">
            <ProgressiveImage src="/programming.jpg" delay={1500} placeholder="/programming_mini.jpg">
                {src => <motion.img layoutId="programmingHero" src={src} className="w-full" alt="Programming Evgeny" />}
            </ProgressiveImage>
            <Typical
                steps={
                    [
                        'Hello!', 1000, 
                        "I'm Evgeny 👋", 1500,
                        "I...", 500,
                        "I sometimes write code.", 1500,
                        "I can code in Java", 1500,
                        "I can code in spaghetti 🍝", 500,
                        "I can code in R", 2000,
                        "I can visualize hell using JS", 2000,
                        "I coded this site in React + Tailwind", 1500,
                        "I have impostor syndrome?", 1500, 
                        "I can `git push --force`", 1500,
                        "I parse HTML using regex", 1500
                    ]
                }
                loop={Infinity}
                wrapper="p"
            />
        </div>
    )
}
