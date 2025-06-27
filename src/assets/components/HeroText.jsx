import React from "react";
import FlipWords from "/src/assets/components/FlipWords.jsx";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variance = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 m-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variance}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hello! I'm Rohit
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variance}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3, ease: "easeInOut" }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variance}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5, ease: "easeInOut" }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300 "
            variants={variance}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8, ease: "easeInOut" }}
          >
            IT solutions
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variance}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, ease: "easeInOut" }}
        >
          Hello! I'm Rohit
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variance}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3, ease: "easeInOut" }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variance}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6, ease: "easeInOut" }}
          >
            <FlipWords
              words={words}
              className="text-bold text-7xl text-white"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variance}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.9, ease: "easeInOut" }}
          >
            Web Application
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
