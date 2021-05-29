import { motion } from 'framer-motion'
import React from 'react'
import ProgressiveImage from 'react-progressive-image';

// styles for the work image
const otherImgStyle = {
    backgroundImage: "url(/other.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%"
}

export default function Other() {
    return (
        <div className="h-screen">
            <ProgressiveImage src="/other.jpg" delay={1500} placeholder="/other_mini.jpg">{src => <motion.img layoutId="otherHero" src={src} className="h-full w-full" alt="Other Evgeny" />}</ProgressiveImage>
        </div>
    )
}
