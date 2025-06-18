import Link from "next/link";
import React from "react";
import MobileMenu from "./mobile-nav";

export default function NavBar() {
  return (
    <nav className="w-full px-[5%] h-[50px] flex items-center justify-between ">
      <div className="text-xl font-bold text-zinc-950">
        <Link href="/" className="font-source-code-pro">
          <span className="text-zinc-950">{"<"}LJ</span>
          <span className="text-xl font-bold text-zinc-400 ">Dev{"/>"}</span>
        </Link>
      </div>
      <MobileMenu />
      <div
        className="hidden md:flex space-x-8 text-zinc-950 
        font-maven-pro text-lg font-regular
      "
      >
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#about"}>About</Link>

        <Link href={"#contact"}>Contact</Link>
      </div>
    </nav>
  );
}
