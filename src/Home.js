import React from 'react';
import {
    Link, 
    withRouter
} from 'react-router-dom';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

// styles for the programming image
const progImgStyle = {
    backgroundImage: "url(/programming.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "45%",
    backgroundPositionY: "45%"
}

// styles for the photography image
const photoImgStyle = {
    backgroundImage: "url(/photography.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "40%",
    backgroundPositionY: "80%",
}

// styles for the work image
const workImgStyle = {
    backgroundImage: "url(/work.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "65%",
    backgroundPositionY: "40%"
}

// styles for the work image
const otherImgStyle = {
    backgroundImage: "url(/other.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%"
}

export default function Home() {
    return (
        <div className="grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 h-screen">
            <Link to="/photography">
                <motion.div style={photoImgStyle} layoutId="photographyHero" className="w-full h-full flex justify-center items-center text-white text-3xl md:text-6xl font-handwriting">
                    <motion.h1 whileHover={{ scale: 1.2 }}>Photography Evg</motion.h1>
                </motion.div>
            </Link>
            <Link to="/programming">
                <div style={progImgStyle} className="w-full h-full flex justify-center items-center text-white text-3xl md:text-6xl font-thin font-mono ">
                    Programming_Evg
                    </div>
            </Link>
            <Link to="/work">
                <div style={workImgStyle} className="w-full h-full flex justify-center items-center text-white text-3xl md:text-6xl font-lilita">
                    Work Evg
                    </div>
            </Link>
            <Link to="/other">
                <div style={otherImgStyle} className="w-full h-full flex justify-center items-center text-white text-3xl md:text-6xl font-righteous">
                    Other Evg
                    </div>
            </Link>
        </div>
    )
}
