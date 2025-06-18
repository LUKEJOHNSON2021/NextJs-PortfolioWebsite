"use client";
import BackgroundPage from "@/components/BackgroundPage";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import NavBar from "@/components/Nav/NavBar";
import ScalingSection from "@/components/ScalingSection";
import { Project } from "@/components/ProjectCard";
import Horizontal from "@/components/Horizontal";
import About from "@/components/About";
import Footer from "@/components/footer";
import EmailForm from "@/components/EmailForm";

const projects: Project[] = [
  {
    title: "RCADIA",
    subtitle: "Crypto Retro Arcade",
    description:
      "I was contracted to develop the web platform for Rcadia, a Web3 arcade gaming experience. Using React and Next.js, I built a responsive, user-friendly interface that allows players to explore and launch arcade games with ease. The frontend was designed to be intuitive, modern, and aligned with the platforms immersive gaming focus.",
    longDescription:
      "On the backend, I designed and implemented a scalable API suite using C# on Azure, integrating Cosmos DB for data storage and Blob Storage for asset management. The architecture followed the repository pattern to support unit testing and a test-driven workflow. I also collaborated closely with stakeholders and Unity developers to integrate WebGL games, ensuring a seamless end-to-end experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "C#", "Azure", "NoSQL"],
    siteLink: "https://www.rcadia.xyz/",
    imageUrl: "/ProjectImages/Rcadia/RcadiaLaptop.png",
    year: "2024/25",
    featured: true,
  },
  {
    title: "Flight League",
    subtitle: "Darts X Football Game",
    description:
      "Flight League is a React Native/Expo darts app that simulates matchdays and full league-table progression. Play solo against an AI or go head-to-head with a friend, enter your score on a custom NumberPad, and watch the table update in real time. Powered by Expo-Router, it features screens for fixtures, live score entry, and results (which you can skip to dive straight into the next matchday).",
    longDescription:
      "At season’s end, Flight League automatically relegates the bottom three, promotes three new teams, resets all stats, and generates the next season’s fixtures. You can rename teams inline via a keyboard-aware editor, and all your custom names and settings are saved to persist across restarts.",
    technologies: ["React Native", "TypeScript", "Expo", "Algorithms"],
    imageUrl: "/ProjectImages/FlightLeague/FlightLeaguePhone.png",
    year: "2025",
    featured: true,
  },

  {
    title: "Forrester Park Vets Golf Society",
    subtitle: "Blog and Management System",
    description:
      "I built a blog-style platform for Forrester Park Vets to help management share updates with members easily. The site includes a custom text editor and file upload system supporting images, PDFs, and Excel tables, with content stored in MongoDB and uploads handled via UploadThing.",
    longDescription:
      "To keep admin tools secure, I integrated NextAuth, limiting post creation and editing to authorized users. This project highlights my ability to deliver secure, user-friendly web apps tailored to specific client needs.",
    technologies: ["React", "Next.Js", "MongoDb", "Tailwind CSS", "TypeScript", "Authentication"],
    imageUrl: "/ProjectImages/VetsGolf/VetsGolf.png",
    year: "2025",
  },
  {
    title: "Sync Up",
    subtitle: "Warren Project Event App",
    description:
      "Sync-Up is a mobile application built for the Warren Project, a charity based in Hull. The app provides information about events and activities in the local area tailored to the users' interests.",
    longDescription:
      "I designed an intuitive user interface in Adobe XD, applying core UI/UX principles and iterating based on client feedback to align the app with their vision. I developed the mobile app using React Native, TypeScript, and CSS, integrating and later refactoring C# APIs to better meet evolving client requirements. This project strengthened my skills in collaborative development, user-focused design, and building functional, visually engaging mobile experiences as part of a cross-functional team.",
    technologies: ["React Native", "TypeScript", "Expo", "C#", "Azure", "NoSQL"],
    imageUrl: "/ProjectImages/Sync-Up/SyncUpOnPhone.png",
    year: "2023/24",
  },
  {
    title: "Game Hub",
    subtitle: "Information Hub for Games",
    description:
      "Game Hub is a React and TypeScript project built during my learning process, designed to showcase a responsive and user-friendly game discovery experience. Using Chakra UI for the interface, the app allows users to search and filter games by genre, platform, and sorting criteria, with data fetched from the RAWG.io API and displayed with detailed info and screenshots.",
    longDescription:
      "The application includes a dark mode toggle and is fully responsive across devices, ensuring a smooth and consistent experience on both desktop and mobile. This project helped strengthen my skills in building accessible UIs, working with external APIs, and creating adaptable layouts with modern frontend technologies.",
    technologies: ["React", "TypeScript", "Vite"],
    siteLink: "https://game-hub-tau-eight.vercel.app/",
    imageUrl: "/ProjectImages/GameHub/GameHubLaptop.png",
    year: "2022",
    githubUrl: "https://github.com/LUKEJOHNSON2021/Game-hub",
  },
];

export default function Home() {
  return (
    <div className="relative h-[700dvh] w-full overscroll-none">
      <BackgroundPage />
      <AnimatedBlobs />

      <div className="relative h-full z-10 w-full pt-8 overscroll-none">
        <NavBar />
        <div className="px-[5%] not-only-of-type:flex flex-col justify-center flex flex-1 h-[80dvh] ">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Hello!
            <br />
            I&apos;m <span className="2xl:bg-black 2xl:text-white px-2 py-1 rounded-xl">Luke Johnson</span>,
            <br />
            These are some Ideas <span className="2xl:bg-black 2xl:text-white px-2 py-1 rounded-xl">I&apos;ve Helped Bring to Life</span>
          </h1>
        </div>
        <div className="h-[500dvh] md:h-[700dvh] w-full relative">
          <ScalingSection startScale={0.97}>
            {/* <HorizontalScrollCarousel projects={projects} /> */}
            <Horizontal projects={projects} />
          </ScalingSection>
        </div>
        <div className="h-[120dvh] w-full relative items-center justify-center flex ">
          <About />
        </div>
        <div className=" h-[100dvh] w-full relative">
          <ScalingSection growEnd={1} shrinkStart={1} startScale={0.9}>
            <div id="contact">
              <div className="flex flex-col items-center justify-center gap-10 h-[95vh]  w-full">
                <EmailForm />
              </div>
              <Footer />
            </div>
          </ScalingSection>
        </div>
      </div>
    </div>
  );
}
