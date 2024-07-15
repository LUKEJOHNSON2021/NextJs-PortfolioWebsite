"use client";
import { LampContainer } from "@/components/ui/lamp";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Links from "@/components/global/links";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Portfolio One
        </motion.h1>
      </LampContainer>
      <div className="max-w-3xl mx-auto antialiased pt-4 relative ">
        <Links website="https://portfolio-website-ten-tau-88.vercel.app/" github="https://github.com/LUKEJOHNSON2021/PortfolioWebsite" />
        <p className="px-4 md:px-0">
          My first portfolio project, built using React with TypeScript, it leverages the robust UI components from Material-UI to ensure an intuitive
          and engaging user experience. It was built to showcase some skills and projects however lacked the complexity and functionality of my later
          projects.
        </p>
        <Separator className="my-4" />
        <Image src="/Portfolio1img.png" alt="Organize Time Mobile" width={1920} height={1080} />
        <Separator className="my-4" />
        <p className="px-4 md:px-0">
          It was designed with responsiveness in mind, the website adapts seamlessly across all devices, including mobile phones, tablets, and
          desktops. Whether accessed on a small screen or a large monitor, users experience consistent performance and accessibility. The responsive
          design ensures that content is optimally displayed and navigable regardless of the device used, enhancing usability and engagement.
        </p>
        <Separator className="my-4" />
        <Image src="/Portfolio1img2.png" alt="Game Hub Full Light" width={1920} height={1080} />
        <Separator className="my-4" />
        <Image src="/Portfolio1img3.png" alt="Game Hub Full Light" width={1920} height={1080} />

        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default Page;
