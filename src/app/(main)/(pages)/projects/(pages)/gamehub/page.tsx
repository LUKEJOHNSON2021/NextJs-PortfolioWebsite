import Links from "@/components/ui/links";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Game Hub</h1>
      <br />
      <img src="/Logos/gamehub.png" alt="Game Hub" className="w-32 h-32" />
      <Links website="https://game-hub-tau-eight.vercel.app/" github="https://github.com/LUKEJOHNSON2021/Game-hub" />

      <div className="w-3/4 pt-10 leading-9 text-center">
        Game Hub is a project developed while learning React and TypeScript, utilizing Chakra-UI to create intuitive and responsive UI elements. This
        simple web application enables users to search or filter for games and view detailed information and screenshots. It fetches game data from
        the RAWG.io API and presents it in a user-friendly manner. Offering filtering by genre, platform and order by a range of criteria.
        <br />
        <br />
        Game Hub also features a darkmode toggle, allowing users to switch between light and dark themes for optimal viewing comfort and resizes to
        fit on all devices. The responsive design ensures that content is optimally displayed and navigable regardless of the device used, enhancing
        usability and engagement.
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">Website Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <img src="/ProjectImages/GameHub/GameHubFullLight.png" alt="Game Hub Home page Light" className="w-full md:w-3/4 h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/GameHub/GameHubFullDark.png" alt="Game Hub Home page Dark" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/GameHub/GameHubGameLight.png" alt="Game Hub Game page Light" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">Mobile Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/GameHub/GameHubMobile.png" alt="Game Hub mobile" className="w-1/2 h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/GameHub/GameHubMobileGame.png" alt="Game Hub mobile game" className="w-1/2 h-auto mx-auto" />
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Page;
