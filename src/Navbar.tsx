import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
	  whileHover={{scale: 1.3}}
      exit={{ scale: 0 }}
      className="fixed top-0 mt-3 ml-3"
    >
      <Link to="/">
        <BiArrowBack color="white" size={32} />
      </Link>
    </motion.div>
  );
};

export default Navbar;
