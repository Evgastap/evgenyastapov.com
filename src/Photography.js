import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import * as constants from './constants'

// styles for the photography image
const photoImgStyle = {
    backgroundImage: "url(/photography.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "40%",
    backgroundPositionY: "60%",
}

function importAll(r) {
    return r.keys().map(r);
}
export default function Photography() {
    const [images, setImages] = useState([])

    useEffect(() => {
        const listOfImages = importAll(require.context('./portfolio/', false, /\.(png|jpe?g|svg)$/));
        setImages(listOfImages)
    }, [])
        return (
           <div>
               <div className="w-full h-threequarters sm:h-threequarters 
                                flex justify-center items-center text-center 
                                font-extralight text-2xl sm:text-6xl text-white font-handwriting
                                overflow-hidden 
                                bg-gradient-to-bl from-indigo-500">
                    <motion.div layoutId="photographyHero" transition={constants.TRANSITION_SETTINGS} alt="Photography Evgeny" className="object-cover min-h-full w-full -z-10" style={photoImgStyle} />
                    <h1 className="absolute">I ❤ taking pictures.</h1>
                </div>

                <div className="sm:grid sm:grid-cols-4 gap-4 m-2 sm:m-5">
                    {
                        images.map(
                            // hey, I'm literally taking images from a directory and applying a class name if they have a 'col-span-x' property in their name.
                            // who needs a CMS, right?
                            (image, index) => <div key={index} className={`w-full h-full my-2 sm:my-0 ${image.default.includes('col-span-2') && "sm:col-span-2" || image.default.includes('col-span-3') && "sm:col-span-3"}`}>
                                <img key={index} src={image.default} alt={`Evgeny Astapov Photo Portfolio ${index + 1}`} className="object-cover min-h-full" loading="lazy"></img>
                            </div>
                            // I really don't understand how a brain so large fits into my skull sometimes
                        )
                    }
                </div>
                {/* <div className="fixed h-screen w-screen">
                    <img src={listOfImages[1].default} className="absolute z-10 w-full max-h-1/2" alt="" />
                </div> */}
           </div> 
        )
}
