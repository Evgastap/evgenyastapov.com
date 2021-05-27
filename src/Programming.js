import { motion } from 'framer-motion'
import React from 'react'

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
            <motion.div style={progImgStyle} layoutId="programmingHero" className="w-screen h-1/2 sm:h-screen"></motion.div>
        </div>
    )
}
