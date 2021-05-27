import { motion } from 'framer-motion'
import React from 'react'

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
            <motion.div style={workImgStyle} layoutId="workHero" className="w-screen h-1/2 sm:h-screen"></motion.div>
        </div>
    )
}
