import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";

const Navbar = () => {
  function Navigation() {
    return (
      <ul className="nav-ul">
        <motion.li
          className="nv-li transition-colors text-neutral-400 hover:text-white"
          whileHover={{ scale: 1.2 }}
        >
          <a href="#home" nav-link={"true"}>
            Home
          </a>
        </motion.li>
        <motion.li
          className="nv-li transition-colors text-neutral-400 hover:text-white"
          whileHover={{ scale: 1.2 }}
        >
          <a href="#about" nav-link={"true"}>
            About
          </a>
        </motion.li>
        <motion.li
          className="nv-li transition-colors text-neutral-400 hover:text-white"
          whileHover={{ scale: 1.2 }}
        >
          <a href="#projects" nav-link={"true"}>
            Projects
          </a>
        </motion.li>
        <motion.li
          className="nv-li transition-colors text-neutral-400 hover:text-white"
          whileHover={{ scale: 1.2 }}
        >
          <a href="#contact" nav-link={"true"}>
            Contact
          </a>
        </motion.li>
        <motion.li
          className="nv-li transition-colors text-neutral-400 hover:text-white"
          whileHover={{ scale: 1.2 }}
        >
          <a href="/assets/Rohit-Resume.pdf" download nav-link={"true"}>
            Resume
          </a>
        </motion.li>
      </ul>
    );
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-3xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Rohit
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
