"use client";
import React, { useState, useEffect } from "react";
import MobileMenu from "./mobile-nav";
import StaticNavBar from "./static-nav-bar";
import Link from "next/link";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // If scrolling down and scrolled past 50px, hide the navbar
        setIsVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 z-50 max-w-[1414px] w-full h-auto flex px-5 py-2 items-center bg-white dark:bg-zinc-900 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="text-xl font-bold text-zinc-950">
        <Link href="/" className="font-sourceCodePro">
          <span className="text-zinc-950 dark:text-white">{"<"}LJ</span>
          <span className="text-xl font-bold text-zinc-400 dark:text-zinc-500">Dev{"/>"}</span>
        </Link>
      </div>

      {/* Static and Mobile Menus */}
      <StaticNavBar />
      <MobileMenu />
    </div>
  );
};

export default NavBar;
