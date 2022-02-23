import { motion } from "framer-motion";
import { EASING_SETTINGS } from "../constants";

const imageVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.1,
  },
};

const cardVariants = {
  hover: {},
  tap: {},
};

const textVariants = {
  hover: {
    color: "rgb(16, 185, 129)",
  },
};

interface Props {
  tags: string;
  title: string;
  url: string;
  image: string;
  description: string;
}

function CardWithText(props: Props) {
  return (
    <motion.a
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className="h-full w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="h-64 w-full overflow-hidden">
        <motion.img
          className="min-h-full object-cover"
          src={props.image}
          alt={props.title}
          variants={imageVariants}
          inherit={true}
          transition={EASING_SETTINGS}
        />
      </div>

      <div className="flex flex-col p-6">
        <span className="text-xs font-medium uppercase text-green-500 dark:text-blue-400">
          {props.tags}
        </span>
        <motion.p
          // href="#"
          className="mt-2 block text-2xl font-semibold text-gray-900 dark:text-white"
          variants={textVariants}
        >
          {props.title}
        </motion.p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-50">
          {props.description}
        </p>
      </div>
    </motion.a>
  );
}

export default CardWithText;
