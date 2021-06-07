import React from 'react'
import { motion, Color } from 'framer-motion'

const imageVariants = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 1.1
    }
}

const cardVariants = {
    hover: {
       
    },
    tap: {  }
}

const textVariants = {
    hover: {
        color: "rgb(16, 185, 129)"
    }
}

const transitionSettings = {
    ease: [0.6, 0.01, -0.05, 0.9]
}

function CardWithText(props) {
    return (
        <div class="mt-10 mx-5">
            <motion.div variants={cardVariants} whileHover="hover" whileTap="tap" class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <a href={props.url} target="_blank">
                    <div className="w-full h-64 overflow-hidden">
                            <motion.img class="object-cover w-full max-h-full h-64" src={props.image} alt={props.title} variants = {imageVariants} inherit="True" transition={transitionSettings} />
                    </div>

                    <div class="p-6">
                        <div>
                            <span class="text-xs font-medium text-green-500 uppercase dark:text-blue-400">{props.tags}</span>
                            <motion.a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white" variants={textVariants}>{props.title}</motion.a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{props.description}</p>
                        </div>

                        {/* <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">Jone Doe</a>
                        </div>
                                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                                </div>
                            </div> */}
                    </div>
                </a>
            </motion.div>
        </div>
    )
}

export default CardWithText;