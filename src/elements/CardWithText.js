import React from "react"
import { motion } from "framer-motion"

const imageVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.1,
  },
}

const cardVariants = {
  hover: {},
  tap: {},
}

const textVariants = {
  hover: {
    color: "rgb(16, 185, 129)",
  },
}

const transitionSettings = {
  ease: [0.6, 0.01, -0.05, 0.9],
}

function CardWithText(props) {
  return (
    <div className="mt-10 mx-5">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
        className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <a href={props.url} target="_blank" rel="noreferrer">
          <div className="w-full h-64 overflow-hidden">
            <motion.img
              className="object-cover w-full max-h-full h-64"
              src={props.image}
              alt={props.title}
              variants={imageVariants}
              inherit="True"
              transition={transitionSettings}
            />
          </div>

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-green-500 uppercase dark:text-blue-400">{props.tags}</span>
              <motion.span
                href="#"
                className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white"
                variants={textVariants}
              >
                {props.title}
              </motion.span>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{props.description}</p>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  )
}

export default CardWithText
