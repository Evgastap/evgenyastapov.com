import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image'

// styles for the programming image
const progImgStyle = {
    backgroundImage: "url(/programming.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "45%",
    backgroundPositionY: "45%"
}

// styles for the photography image
const photoImgStyle = {
    backgroundImage: "url(/photography.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "40%",
    backgroundPositionY: "80%",
}

// styles for the work image
const workImgStyle = {
    backgroundImage: "url(/work.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "65%",
    backgroundPositionY: "40%"
}

// styles for the work image
const otherImgStyle = {
    backgroundImage: "url(/other.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%"
}

export default function Home() {
    return (
        <div className="grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 h-screen">
            <AnimatePresence exitBeforeEnter>
                <Link to="/photography">
                    <motion.div className="w-full h-full flex justify-center items-center overflow-hidden">
                        <ProgressiveImage src="/photography.jpg" delay={3000} placeholder="/photography_mini.jpg">{src => <motion.img layoutId="photographyHero" src={src} className="object-cover min-h-full" alt="Photography Evgeny" />}</ProgressiveImage>
                        <motion.h1 className="absolute text-white text-3xl md:text-6xl font-thin font-handwriting">Photography Evg</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/programming">
                    <motion.div className="w-full h-full flex justify-center items-center overflow-hidden">
                        <ProgressiveImage src="/programming.jpg" delay={3000} placeholder="/programming_mini.jpg">{src => <motion.img layoutId="programmingHero" src={src} className="object-cover min-h-full" alt="Programming Evgeny" />}</ProgressiveImage>
                        <motion.h1 className="absolute text-white text-3xl md:text-6xl font-thin font-mono">Programming_Evg</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/work">
                    <motion.div className="w-full h-full flex justify-center items-center overflow-hidden">
                        <ProgressiveImage src="/work.jpg" delay={3000} placeholder="work_mini.jpg">{src => <motion.img layoutId="workHero" src={src} className="object-cover min-h-full" alt="Work Evgeny" />}</ProgressiveImage>
                        <motion.h1 className="absolute text-white text-3xl md:text-6xl font-thin font-lilita">Work Evg</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/other">
                    <motion.div className="w-full h-full flex justify-center items-center overflow-hidden">
                        <ProgressiveImage src="/other.jpg" delay={3000} placeholder="other_mini.jpg">{src => <motion.img layoutId="otherHero" src={src} className="object-cover min-h-full" alt="Other Evgeny" />}</ProgressiveImage>
                        <motion.h1 className="absolute text-white text-3xl md:text-6xl font-thin font-righteous">Other Evg</motion.h1>
                    </motion.div>
                </Link>
            </AnimatePresence>
        </div>
    )
}
