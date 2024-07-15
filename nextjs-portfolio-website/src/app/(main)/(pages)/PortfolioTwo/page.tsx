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
          Portfolio Two
        </motion.h1>
      </LampContainer>
      <div className="max-w-3xl mx-auto antialiased pt-4 relative ">
        {/* TODO: Change links */}
        <Links website="https://www.lukejohnsondev.com/" github="https://github.com/LUKEJOHNSON2021/PortfolioWebsite" />
        <p className="px-4 md:px-0">
          My second portfolio project, built using Next.js with TypeScript and Tailwind CSS, it uses components from aceternity ui for the animations
          and shadcn for ui for components. These two UI commponent providers were chosen as they provide a range of components however only require
          to install the components I require.
        </p>
        <Separator className="my-4" />
        {/* TODO: Change images */}
        <Image src="/Portfolio2Img.png" alt="Organize Time Mobile" width={1920} height={1080} />
        <Separator className="my-4" />
        <p className="px-4 md:px-0">
          Initially, I built this portfolio using React and Vite, but I decided to migrate it to Next.js to leverage its powerful features and improve
          the overall performance and user experience. Another major benefit is Next.js’s file-based routing system, which simplified the navigation
          structure of my portfolio. However, adapting to this new routing system presented a notable learning curve. In Vite, routing was manually
          configured, often involving the use of third-party libraries like React Router. In contrast, Next.js uses a file-based routing approach
          where the file structure directly determines the routes. The file-based routing system eventually proved to be intuitive and efficient,
          allowing me to add new pages effortlessly without needing extensive configuration
        </p>
        <Separator className="my-4" />
        <div className="flex flex-row justify-center gap-4 ">
          {/* Larger image */}
          <div className="max-w-2xl">
            <Image src="/Portfolio2Img3.png" alt="Game Hub Full Light" width={1500} height={1080} />
          </div>
          {/* Smaller image */}
          <div className="w-65 md:w-auto">
            <Image src="/Portfolio2Img2.png" alt="Game Hub Full Light" width={1000} height={868} />
          </div>
        </div>

        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default Page;
