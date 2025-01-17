"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Variants for the menu panel
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  // Variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex w-full justify-end text-zinc-900 text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <IoMenu className="text-zinc-900 text-black text-3xl" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed h-screen inset-0 bg-black z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsMenuOpen(false)} // Close menu when clicking on the backdrop
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg z-50 flex flex-col items-center pt-20 space-y-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href="/projects" className="text-xl text-zinc-700 hover:text-zinc-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="text-xl text-zinc-700 hover:text-zinc-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact Me
              </Link>
              <button className="text-zinc-500 text-lg" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
