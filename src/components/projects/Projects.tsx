import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center max-w-[1414px] w-3/4">
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );

const GameHub = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-between">
    <img src="/Headers/GameHub.png" className="w-full h-full object-contain" />
    <img src="/Headers/GameHubMobile.png" className="w-full h-full hidden md:block object-contain" />
    <img src="/Headers/GameHubGame.png" className="w-full h-full hidden md:block object-contain" />
  </div>
);

const CoverFlow = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-between">
    <img src="/Headers/Cover Flow.png" className="w-full h-full object-contain" />
    <img src="/Headers/Cover Flow2.png" className="w-full h-full hidden md:block object-contain" />
  </div>
);

const items = [
  {
    title: "RCADIA",
    description: "React, Next.Js, C# ASP.NET, CosmosDB, Azure Blob Storage",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-[url('/Headers/Rcadia.png')] bg-cover bg-center" />,
    icon: <img src="/Logos/RCADIA_WHITE_ON_BLACK_1.png" alt="Rcadia Logo" className="h-4 w-4 text-neutral-500" />,
    url: "/projects/rcadia",
  },
  {
    title: "Sync-Up",
    description: "React Native, UI-UX Design ",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-[url('/Headers/Sync-Up-Header.png')] bg-cover bg-center" />
    ),
    icon: <img src="/Logos/Sync-Up-Logo.png" alt="Sync up Logo" className="h-4 w-4 text-neutral-500" />,
    url: "/projects/sync-up",
  },
  // {
  //   title: "Portfolio",
  //   description: "React, Next.js",
  //   header: (
  //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-[url('/Headers/Portfolio.png')] bg-cover bg-center" />
  //   ),
  //   icon: <CiGlobe className="h-4 w-4 text-neutral-500" />,
  //   url: "/projects/portfolio",
  // },
  {
    title: "Forrester Park Vets",
    description: "React, Next.js",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-[url('/Headers/ForresterParkVets.png')] bg-cover bg-center" />
    ),
    icon: <img src="/Logos/ForresterPark.png" alt="Sync up Logo" className="h-4 w-4 text-neutral-500" />,
    url: "/projects/forrester-park-vets",
  },
  {
    title: "Cover Flow, Music Player",
    description: "React, Electron",
    header: <CoverFlow />,
    icon: <img src="/Logos/CoverFlowIcon.png" alt="Cover Flow, Music Player Logo" className="h-4 w-4 text-neutral-500" />,
    url: "/projects/cover-flow",
  },
  {
    title: "Ai Medical Voice Assisted website",
    description: "React, OpenAi, Voice Recognition",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-[url('/Headers/VoiceAssistant.png')] bg-contain bg-no-repeat bg-center" />
    ),
    icon: <MdKeyboardVoice className="h-4 w-4 text-neutral-500" />,
    url: "/projects/voice-assistant",
  },
  {
    title: "Organize Time",
    description: "React, Express, Google Calendar API",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl justify-center bg-[url('/Headers/OrganizeTimeMobile.png')] bg-cover bg-center" />
    ),
    icon: <img src="/Logos/organizetime.png" alt="Organize Time Logo" className="h-4 w-4 text-neutral-500" />,
    url: "/projects/organize-time",
  },
  {
    title: "Game Hub",
    description: "React",
    header: <GameHub />,
    icon: <img src="/Logos/gamehub.png" alt="GameHub Logo" className="h-4 w-4 text-neutral-500" />,
    url: "/projects/gamehub",
  },
];
