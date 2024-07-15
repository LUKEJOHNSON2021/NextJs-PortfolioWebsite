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
          Sync-Up
        </motion.h1>
      </LampContainer>
      <div className="max-w-3xl mx-auto antialiased pt-4 relative ">
        <p className="px-4 md:px-0">
          Sync-Up is a mobile application built and designed by me and a peer from University, for the Warren Project who are a charity based in Hull.
          The app provides information about events in the local area hosted by other organisations linked with the Warren Project, depending on the
          user's interests. I focused on the front-end design and devleopment, first I designed the UI/UX using Adobe Xd while communicating with the
          Warren Project to get feedback and make changes where needed. I then developed the app using React Native with TypeScript implementing the
          API's my peer created.
        </p>
        <Separator className="my-4" />

        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Image src="/SyncUpHomePage.png" alt="Sync up Home page" width={430} height={932} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Image src="/SyncUpEventPage.png" alt="Sync up Event page" width={430} height={932} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Image src="/SyncUpOrgPage.png" alt="Sync up Org page" width={430} height={932} className="w-full h-auto object-cover" />
          </div>
        </div>
        <Separator className="my-4" />
        <p className="px-4 md:px-0">
          Sync-Up is currently in the final stages of development and will be available soon on both the App Store and Google Play Store.
        </p>
        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default Page;
