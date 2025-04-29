import React from "react";
import LandingText from "./landing-text";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import AnimatedLinks from "./animated-links";

const LandingScreen = () => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] w-3/4 max-w-[1414px] flex flex-col lg:px-16 justify-center">
      <div>
        <LandingText />
      </div>
      <AnimatedLinks>
        <Link
          href="https://www.linkedin.com/in/luke-johnson-b4967426a/"
          className="bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900 flex flex-row items-center rounded-xl p-4 transition-all duration-300 hover:scale-105"
          target="_blank"
        >
          LinkedIn <IoLogoLinkedin className="text-2xl ml-3" />
        </Link>
        <Link
          href="https://github.com/LUKEJOHNSON2021"
          className="border-zinc-900 dark:border-zinc-200 border-2 text-zinc-900 dark:text-zinc-200 flex flex-row items-center rounded-xl p-4 transition-all duration-300 hover:border-zinc-700 hover:dark:border-zinc-300 hover:scale-105"
          target="_blank"
        >
          GitHub <IoLogoGithub className="text-2xl ml-3" />
        </Link>
      </AnimatedLinks>
    </div>
  );
};

export default LandingScreen;
