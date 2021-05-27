import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'

// styles for the photography image
const photoImgStyle = {
    backgroundImage: "url(/photography.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "40%",
    backgroundPositionY: "80%",
}

export default function Photography() {
    return (
        <motion.div style={photoImgStyle} layoutId="photographyHero" className="w-screen h-screen"></motion.div>
    )
}
