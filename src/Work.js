import { motion } from 'framer-motion'
import React from 'react'
import ProgressiveImage from 'react-progressive-image';

// styles for the work image
const workImgStyle = {
    backgroundImage: "url(/work.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "65%",
    backgroundPositionY: "40%"
}

export default function Work() {
    return (
        <div className="h-screen">
            <ProgressiveImage src="/work.jpg" delay={1500} placeholder="/work_mini.jpg">{src => <motion.img layoutId="workHero" src={src} className="max-w-full" alt="Work Evgeny" />}</ProgressiveImage>
        </div>
    )
}
