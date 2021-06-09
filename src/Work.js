import { motion } from 'framer-motion'
import React from 'react'
import ProgressiveImage from 'react-progressive-image';
import * as constants from './constants'

// styles for the work image
const workImgStyle = {
    backgroundImage: "url(/work.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "65%",
    backgroundPositionY: "40%"
}

export default function Work() {
    return (
        <div className="w-full h-screen
                            flex justify-center items-center text-center 
                            font-extralight text-2xl sm:text-4xl text-white font-roboto
                            overflow-hidden 
                            bg-gradient-to-bl from-pink-500">
            <motion.div layoutId="workHero" transition={constants.TRANSITION_SETTINGS} alt="Work Evgeny" className="object-cover min-h-full w-full -z-10" style={workImgStyle} />
            <p className="absolute text-white mx-2">Page under construction 👀</p>
        </div>
    )
}
