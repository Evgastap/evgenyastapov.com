import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { useClickAway } from "react-use";

const Navbar = () => {
  // use router
  const router = useRouter();
  const [burgerOpened, setBurgerOpened] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Photography", path: "/photography" },
    { name: "Programming", path: "/programming" },
    { name: "Videos", path: "/videos" },
  ];

  const debounceBurgerClose = () => {
    setTimeout(() => {
      setBurgerOpened(false);
    }, 2000);
  };

  // ref to opened burger menu
  const openedBurgerRef = useRef(null);
  useClickAway(openedBurgerRef, () => {
    setTimeout(() => {
      setBurgerOpened(false);
    }, 500);
  });

  return (
    <>
      <AnimatePresence>
        {router.pathname !== "/" && (
          <motion.button
            onClick={router.back}
            className="absolute left-4 top-4 z-20 text-3xl text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
			key="back-button"
          >
            <AiOutlineArrowLeft />
          </motion.button>
        )}
        {!burgerOpened && (
          <motion.button
            onClick={() => setBurgerOpened(true)}
            className="absolute right-4 top-4 z-20 text-3xl text-white"
            layoutId="burgerMenu"
          >
            <GiHamburgerMenu />
          </motion.button>
        )}
        {burgerOpened && (
          <motion.div
            layoutId="burgerMenu"
            className="absolute right-4 top-4 z-20 rounded-lg bg-white p-6 text-right text-xl"
            onHoverEnd={debounceBurgerClose}
            onClick={() => setBurgerOpened(false)}
            ref={openedBurgerRef}
          >
            {routes.map((route) => {
              return (
                <div
                  key={route.path}
                  className={`${
                    router.pathname == route.path && "text-blue-400"
                  }`}
                >
                  <Link href={route.path}>{route.name}</Link>
                </div>
              );
            })}
            <div className="flex w-full items-center justify-between text-3xl">
              <a href="https://www.linkedin.com/in/evgeny-astapov">
                <AiFillLinkedin />
              </a>
              <a href="https://instagram.com/evgastap">
                <AiFillInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UCkIpIRSrYHhTd0gmvJ8523g">
                <AiFillYoutube />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
