import { motion } from 'framer-motion'
import React from 'react'

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
            <motion.div style={otherImgStyle} layoutId="otherHero" className="w-screen h-1/2 sm:h-screen"></motion.div>
        </div>
    )
}
