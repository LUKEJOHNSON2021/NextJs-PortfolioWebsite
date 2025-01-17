"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
      className="min-h-screen w-3/4 max-w-[1414px] flex flex-col justify-center items-center lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-zinc-900 dark:text-zinc-200 text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className="text-lg text-center text-zinc-800 dark:text-zinc-300 mb-10"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Feel free to connect with me on LinkedIn or reach out directly through the contact page.
      </motion.p>
      <motion.div
        className="flex flex-row sm:space-x-10 space-x-5 mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <motion.a
          href="https://www.linkedin.com/in/luke-johnson-b4967426a/"
          className="bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900 flex flex-row items-center rounded-full p-6 transition-all duration-300 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="/contact"
          className="bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900 flex flex-row items-center rounded-full p-6 transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
