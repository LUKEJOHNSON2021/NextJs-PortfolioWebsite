"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gray-900/50">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left-aligned logo link */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/LJdev.svg" alt="Logo" width={40} height={40} className="hover:opacity-80 transition duration-300" />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="min-[1040px]:hidden z-[100] ">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Centered navigation links on larger screens */}
        <ul
          className={`hidden min-[1040px]:flex items-center gap-8 list-none text-white text-lg flex-1 justify-center ${isOpen ? "hidden" : "block"}`}
        >
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/Gamehub" onClick={closeMenu}>
              Game Hub
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/OrganizeTime" onClick={closeMenu}>
              Organize Time
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/PortfolioOne" onClick={closeMenu}>
              Portfolio One
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/PortfolioTwo" onClick={closeMenu}>
              Portfolio Two
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/Syncup" onClick={closeMenu}>
              Sync-Up
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/Contact" onClick={closeMenu}>
              Contant Me
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="#" onClick={closeMenu}>
              Coming Soon
            </Link>
          </li>
        </ul>

        {/* Menu for smaller screens */}
        <motion.ul
          className={`py-10 min-[1040px]:hidden absolute top-0 right-0 w-3/4 flex flex-col bg-gray-900 w-full h-[100vh] pr-5 items-end ${
            isOpen ? "flex" : "hidden"
          }`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <li className="hover:text-gray-300 transition duration-300 py-4 ">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4 ">
            <Link href="/Gamehub" onClick={closeMenu}>
              Game Hub
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4">
            <Link href="/OrganizeTime" onClick={closeMenu}>
              Organize Time
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4">
            <Link href="/PortfolioOne" onClick={closeMenu}>
              Portfolio One
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4">
            <Link href="/PortfolioTwo" onClick={closeMenu}>
              Portfolio Two
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4">
            <Link href="/Syncup" onClick={closeMenu}>
              Sync-Up
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4">
            <Link href="/Contact" onClick={closeMenu}>
              Contant Me
            </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 py-4">
            <Link href="#" onClick={closeMenu}>
              Coming Soon
            </Link>
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Navbar;
