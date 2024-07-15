"use client";
import { LampContainer } from "@/components/ui/lamp";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

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
          Organize Time
        </motion.h1>
      </LampContainer>
      <div className="max-w-3xl mx-auto antialiased pt-4 relative ">
        <p className="px-4 md:px-0">
          My dissertation project, Organize Time, comprised a suite of mobile, desktop, and backend applications designed to assist users in managing
          their time. It allowed users to create tasks, which were then automatically scheduled on their Google Calendar based on their availability
          and task context. The project was developed using React Native for mobile, React with Electron for the desktop application, and NestJS for
          the backend.
        </p>
        <Separator className="my-4" />
        <Image src="/OrganizeTimeMobile.png" alt="Organize Time Mobile" width={1920} height={1080} />
        <Separator className="my-4" />
        <p className="px-4 md:px-0">
          The application fully utilizes the Google Sign In API to authenticate users and access their Google Calendar. The backend server was built
          using NestJS, which provided a RESTful API&apos;s for the frontend applications to interact with. The backend also utilized the Google
          Calendar API to create and manage events on the user&apos;s calendar. The desktop application was built using React with Electron while the
          mobile application uses React Native, allowing for a seamless user experience across all platforms. Unit testing was also setup using Jest
          to validate the functionality of the application after each save.
        </p>
        <Separator className="my-4" />
        <Image src="/OrganizeTimeDesktop1.png" alt="Game Hub Full Light" width={1920} height={1080} />
        <Separator className="my-4" />
        <Image src="/OrganizetimeDesktop2.png" alt="Game Hub Full Light" width={1920} height={1080} />

        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default Page;
