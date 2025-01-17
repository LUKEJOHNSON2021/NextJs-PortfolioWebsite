import Links from "@/components/ui/links";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { CiGlobe } from "react-icons/ci";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Portfolio</h1>
      <br />
      <CiGlobe className="w-32 h-32 rounded-3xl object-center	object-contain mb-3 text-neutral-500" />
      <Links website="https://www.lukejohnsondev.com/" github="https://github.com/LUKEJOHNSON2021/NextJs-PortfolioWebsite" />
      <div className="w-3/4 pt-10 leading-9 text-center">
        This portfolio website was designed and developed to showcase my projects, skills, and professional journey in a clean, modern, and engaging
        way. Built using React and Next.js, it emphasizes performance, responsiveness, and accessibility to ensure a seamless user experience across
        all devices.
        <br />
        <br />
        The website features a fully responsive layout that adapts beautifully to different screen sizes, from mobile devices to large monitors. To
        enhance user experience, I incorporated smooth animations using Framer Motion, creating subtle interactive elements that bring the design to
        life. Additionally, I implemented a dark mode toggle using Tailwind CSS, catering to user preferences while maintaining a consistent
        aesthetic.
        <br />
        <br />
        Accessibility and performance were key priorities throughout the development process. I applied best practices for web accessibility, ensuring
        the site is inclusive and user-friendly for individuals with varying needs. By optimizing for SEO and adhering to core web vital standards,
        the site is fast, reliable, and ranks well on search engines.
        <br />
        <br />
        Building this project allowed me to deepen my expertise in front-end development while honing my ability to create modular and reusable
        components. It also reinforced my understanding of user-centric design principles, enabling me to craft an interface that is both visually
        appealing and highly functional.
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Page;
