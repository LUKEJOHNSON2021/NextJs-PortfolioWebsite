"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingText = () => {
  return (
    <motion.div
      className="leading-tight fluid-text text-zinc-900 dark:text-zinc-200 font-bold mt-4"
      initial={{ opacity: 0, y: 50 }} // Start off invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and slide to its natural position
      transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
    >
      <motion.h1
        className="small-fluid-text font-medium text-zinc-950 dark:text-zinc-200 pl-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }} // Slight delay for the "Hello! I'm Luke."
      >
        Hello! I&apos;m Luke.
      </motion.h1>
      <motion.h2
        className="text-zinc-900 dark:text-zinc-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }} // Further delay for the second line
      >
        Crafting seamless user experiences with elegant,{" "}
        <motion.span
          className="text-zinc-500 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }} // Additional delay for the span animation
        >
          modern technology.
        </motion.span>
      </motion.h2>
    </motion.div>
  );
};

export default LandingText;
