import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionLink } from "@/shared/TransitionLink";
import { useLocation } from "react-router-dom";

export const MobileHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const handleClick = () => setIsVisible(!isVisible);
  const handleLinkClick = () => setIsVisible(false);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        when: "beforeChildren",
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        when: "afterChildren",
      },
    },
  };

  const crossVariants = {
    open: { rotate: 0, scale: 1 },
    closed: { rotate: -180, scale: 0 },
  };

  const listVariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -50 },
  };

  return (
    <header className="relative md:p-6 md:hidden z-50">
      {/* Burger Button */}
      <motion.button
        onClick={handleClick}
        className="md:hidden p-2 pt-[51px] pl-[40px] mx-[25px] my-[19px] cursor-pointer focus:outline-none relative"
        aria-label="Toggle menu"
        animate={isVisible ? "open" : "closed"} // Добавлено управление состоянием
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 23 23"
          fill="none"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.path
            d="M2 5H21"
            stroke="#5B3569"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            d="M2 11H21"
            stroke="#5B3569"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            d="M2 17H21"
            stroke="#5B3569"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            style={{
              background: "linear-gradient(0deg, #5B3569 0%, #8C5D91 100.01%)",
              borderTopRightRadius: "70px",
              borderBottomRightRadius: "70px",
            }}
            className="w-dvw h-dvh fixed top-0 left-0 flex flex-col"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 left-6 p-2 cursor-pointer focus:outline-none"
              onClick={handleClick}
              aria-label="Close menu"
              variants={crossVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M2 2L21 21M21 2L2 21"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>

            <motion.ul
              className="mt-[99px] ml-7 flex flex-col gap-5 p-2 font-bold font-body text-xl sm:gap-10 sm:text-3xl"
              variants={listVariants}
            >
              {["/", "/hiragana", "/katakana", "/resources"].map((path) => (
                <motion.li key={path} variants={itemVariants}>
                  {location.pathname === path ? (
                    <span
                      className="bg-[#5B3569] px-6 py-2 rounded-full font-bold text-white w-min transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300"
                      onClick={handleLinkClick}
                    >
                      {getLabel(path)}
                    </span>
                  ) : (
                    <TransitionLink
                      className="font-bold text-white w-min transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300"
                      to={path}
                    >
                      {getLabel(path)}
                    </TransitionLink>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Helper function for link labels
function getLabel(path) {
  switch (path) {
    case "/":
      return "Главная";
    case "/hiragana":
      return "Хирагана";
    case "/katakana":
      return "Катакана";
    case "/resources":
      return "Полезные ресурсы";
    default:
      return "";
  }
}
