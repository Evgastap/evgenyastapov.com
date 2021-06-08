import { motion } from 'framer-motion';
import React from 'react';

var listOfImages = []

// styles for the photography image
const photoImgStyle = {
    backgroundImage: "url(/photography.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "40%",
    backgroundPositionY: "60%",
}

const imgUrls = [
    "/photography.jpg",
    "/programming.jpg",
    "/work.jpg"
]


class Photography extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./portfolio/', false, /\.(png|jpe?g|svg)$/));
        console.log(listOfImages)
    }
    render() {
        return (
           <div>
               <div className="w-full h-threequarters sm:h-threequarters 
                                flex justify-center items-center text-center 
                                font-extralight text-2xl sm:text-6xl text-white font-handwriting
                                overflow-hidden 
                                bg-gradient-to-bl from-indigo-500">
                    <motion.div layoutId="photographyHero" alt="Photography Evgeny" className="object-cover min-h-full w-full -z-10" style={photoImgStyle} />
                    <h1 className="absolute">I ❤ taking pictures.</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-5 mx-5">
                    {
                        listOfImages.map(
                            // hey, I'm literally taking images from a directory and applying a class name if they have a 'col-span-x' property in their name.
                            // who needs a CMS, right?
                            (image, index) => <div className={`w-full h-full ${image.default.includes('col-span-2') && "sm:col-span-2" || image.default.includes('col-span-3') && "sm:col-span-3"}`}>
                                <img key={index} src={image.default} alt={`Evgeny Astapov Photo Portfolio ${index + 1}`} className="object-cover min-h-full"></img>
                            </div>
                        )
                    }
                </div>
                {/* <div className="fixed h-screen w-screen">
                    <img src={listOfImages[1].default} className="absolute z-10 w-full max-h-1/2" alt="" />
                </div> */}
           </div> 
        )
    }
}

export default Photography
