"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AnimatedLinks = ({ children }: Props) => {
  return (
    <motion.div
      className="flex flex-row sm:space-x-10 space-x-5 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLinks;
