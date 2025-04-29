import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Organize Time</h1>
      <br />
      <img src="/Logos/organizetime.png" alt="Organize Time" className="w-32 h-32 rounded-3xl object-center	object-contain mb-3" />

      <div className="w-3/4 pt-10 leading-9 text-center">
        My dissertation project, Organize Time, comprised a suite of mobile, desktop, and backend applications designed to assist users in managing
        their time. It allowed users to create tasks, which were then automatically scheduled on their Google Calendar based on their availability and
        task context. The project was developed using React Native for mobile, React with Electron for the desktop application, and NestJS for the
        backend.
        <br />
        <br />
        The application fully utilizes the Google Sign In API to authenticate users and access their Google Calendar. The backend server was built
        using NestJS, which provided a RESTful API&apos;s for the frontend applications to interact with. The backend also utilized the Google
        Calendar API to create and manage events on the user&apos;s calendar. The desktop application was built using React with Electron while the
        mobile application uses React Native, allowing for a seamless user experience across all platforms. Unit testing was also setup using Jest to
        validate the functionality of the application after each save.
        <br />
        <br />
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">App Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <img src="/ProjectImages/OrganizeTime/OrganizeTime.png" alt="Organize Time App" className="w-full md:w-3/4 h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/OrganizeTime/OrganizeTimeMobile.png" alt="Organize Time Mobile" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Page;
