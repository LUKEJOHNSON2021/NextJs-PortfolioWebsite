import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Sync-Up</h1>
      <br />
      <img src="/Logos/Sync-Up-Logo.png" alt="Sync Up" className="w-32 h-32" />
      <div className="w-3/4 pt-10 leading-9 text-center">
        Sync-Up is a mobile application built for the Warren Project, a charity based in Hull. The app provides information about events and
        activities in the local area tailored to the users&apos; interests.
        <br />
        <br />
        My role involved designing an intuitive user interface using Adobe XD, adhering to UI/UX principles, and iteratively refining the designs
        based on client feedback to ensure the final product aligned with their vision.
        <br />
        <br />I developed the app using React Native, TypeScript, and CSS, integrating external APIs created by my colleague to dynamically display
        events tailored to users&apos; interests. This project provided valuable experience in client collaboration, iterative design, and building
        user-focused solutions. It also strengthened my ability to work effectively in a team environment and deliver functional, engaging, and
        visually appealing mobile applications.
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">App Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/Sync-Up/SyncUpHomePage.png" alt="Sync up Home page" className="w-3/4 max-w-xs h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/Sync-Up/SyncUpEventPage.png" alt="Sync up Event page" className="w-3/4 max-w-xs h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/Sync-Up/SyncUpOrgPage.png" alt="Sync up Org page" className="w-3/4 max-w-xs h-auto mx-auto" />
        </div>
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">App Designs</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/Sync-Up/SyncUpEventPageDesign.png" alt="Sync up Home page" className="w-3/4 max-w-xs h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/Sync-Up/SyncUpEventDesign.png" alt="Sync up Event page" className="w-3/4 max-w-xs h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <img src="/ProjectImages/Sync-Up/SyncUpOrgPageDesign.png" alt="Sync up Org page" className="w-3/4 max-w-xs h-auto mx-auto" />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="w-3/4 py-5 leading-9 text-center">
        Sync-Up is currently in the final stages of development and will be available soon on both the App Store and Google Play Store.
      </div>
      <Separator className="" />
    </div>
  );
};

export default Page;
