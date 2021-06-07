import { motion } from 'framer-motion'
import React from 'react'
import Typical from 'react-typical';
import CardWithText from './elements/CardWithText'

// styles for the programming image
const progImgStyle = {
    backgroundImage: "url(/programming.jpg)",
    backgroundSize: "cover",
    backgroundPositionX: "45%",
    backgroundPositionY: "45%"
}

export default function Programming() {
    return (
        <div>
            <div className="w-full h-threequarters sm:h-threequarters 
                            flex justify-center items-center text-center 
                            font-extralight text-2xl sm:text-4xl text-white font-roboto
                            overflow-hidden 
                            bg-gradient-to-bl from-green-500">
                <motion.div layoutId="programmingHero" alt="Programming Evgeny" className="object-cover min-h-full w-full -z-10" style={progImgStyle} />
                <div className="absolute">
                    <Typical
                        steps={
                            [
                                '', 1500,
                                'Hello!', 1000,
                                "I'm Evgeny 👋", 1500,
                                "I...", 500,
                                "I sometimes write code.", 1500,
                                "I can code in Java", 1500,
                                "I can code in spaghetti 🍝", 500,
                                "I can code in R", 2000,
                                "I can visualize hell using JS", 2000,
                                "I coded this site in React + Tailwind", 1500,
                                "I have impostor syndrome?", 1500,
                                "I can `git push --force`", 1500,
                                "I parse HTML using regex", 1500
                            ]
                        }
                        loop={Infinity}
                        wrapper="p"
                    />
                </div> 
            </div>

            <h1 className="text-4xl w-full text-center mt-10">Sites I've built</h1>           

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 px-5 mb-10 ">
                <CardWithText 
                    tags="WordPress, Design" 
                    title="Erasmus Centre for Data Analytics" 
                    url="https://www.centre4data.nl/"
                    image="centre4data.jpg"
                    description="Website I built fully on WordPress for an organization within Erasmus University. 
                                    The site was designed by an external team, and I built it to those exact design specs. 
                                    Essentially, this was my first 'proper' paid web development gig."
                />
                <CardWithText 
                    tags="WordPress, Design"
                    title="Erasmus Tech Community"
                    image="erasmustech.jpg"
                    url="https://www.erasmustech.io/"
                    description="I used to organize cool tech events at Erasmus University, and I built and designed our site from the ground up.
                                    It does run on WordPress, but it was the first site I ever built. Not bad, if I dare say so myself."
                />

            </div>
            


        </div>
    )
}
