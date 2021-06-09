import { motion } from 'framer-motion'
import React from 'react'
import * as constants from './constants'

// styles for the work image
const otherImgStyle = {
    backgroundImage: "url(/other.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%"
}

export default function Other() {
    return (
        <div className="w-full h-screen
                            flex justify-center items-center text-center 
                            font-extralight text-2xl sm:text-4xl text-white font-roboto
                            overflow-hidden 
                            bg-gradient-to-bl from-yellow-500">
            <motion.div layoutId="otherHero" transition={constants.TRANSITION_SETTINGS} alt="Other Evgeny" className="object-cover min-h-full w-full -z-10" style={otherImgStyle} />
            <p className="absolute text-white mx-2">Page under construction 👀</p>
        </div>
    )
}
