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
          Game Hub
        </motion.h1>
      </LampContainer>
      <div className="max-w-3xl mx-auto antialiased pt-4 relative ">
        <Links website="https://game-hub-tau-eight.vercel.app/" github="https://github.com/LUKEJOHNSON2021/Game-hub" />
        <p className="px-4 md:px-0">
          Game Hub is a project developed while learning React and TypeScript, utilizing Chakra-UI to create intuitive and responsive UI elements.
          This simple web application enables users to search or filter for games and view detailed information and screenshots. It fetches game data
          from the RAWG.io API and presents it in a user-friendly manner. Offering filtering by genre, platform and order by a range of criteria.
        </p>
        <Separator className="my-4" />
        <Image src="/GameHubFullDark.png" alt="Game Hub" width={1920} height={1080} />
        <Separator className="my-4" />
        <p className="px-4 md:px-0">
          Game Hub also features a darkmode toggle, allowing users to switch between light and dark themes for optimal viewing comfort and resizes to
          fit on all devices. The responsive design ensures that content is optimally displayed and navigable regardless of the device used, enhancing
          usability and engagement.
        </p>
        <Separator className="my-4" />
        <div className="flex flex-row justify-center gap-4 ">
          {/* Larger image */}
          <div className="max-w-2xl">
            <Image src="/GameHubFullLight.png" alt="Game Hub Full Light" width={1920} height={1080} />
          </div>
          {/* Smaller image */}
          <div className="w-65 md:w-auto">
            <Image src="/GameHubMobile.png" alt="Game Hub Mobile" width={399} height={869} />
          </div>
        </div>
        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default Page;
