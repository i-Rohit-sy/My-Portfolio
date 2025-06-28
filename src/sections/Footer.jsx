import React from "react";
import { mySocials } from "../constants";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4 h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <motion.a href={social.href} key={index} whileHover={{ scale: 1.5 }}>
            <img src={social.icon} className="w-10 h-10" alt={social.name} />
          </motion.a>
        ))}
      </div>
      <p>© 2025 Rohit. All rights reserved</p>
    </section>
  );
};

export default Footer;
