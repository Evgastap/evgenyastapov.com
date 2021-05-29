import { motion } from 'framer-motion';
import React from 'react';
import ProgressiveImage from 'react-progressive-image';

// styles for the photography image
const photoImgStyle = {
    backgroundImage: "url(/photography.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "40%",
    backgroundPositionY: "80%",
}

export default function Photography() {
    return (
        <div className="h-screen">
            <ProgressiveImage src="/photography.jpg" delay={1500} placeholder="/photography_mini.jpg">{src => <motion.img layoutId="photographyHero" src={src} className="h-full w-full" alt="Photography Evgeny" />}</ProgressiveImage>
        </div>
    )
}
