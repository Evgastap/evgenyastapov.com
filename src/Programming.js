import { motion } from 'framer-motion'
import React from 'react'
import ProgressiveImage from 'react-progressive-image'

// styles for the programming image
const progImgStyle = {
    backgroundImage: "url(/programming.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "45%",
    backgroundPositionY: "45%"
}

export default function Programming() {
    return (
        <div className="h-screen">
            <ProgressiveImage src="/programming.jpg" delay={1500} placeholder="/programming_mini.jpg">{src => <motion.img layoutId="programmingHero" src={src} className="h-full w-full" alt="Programming Evgeny" />}</ProgressiveImage>
        </div>
    )
}
