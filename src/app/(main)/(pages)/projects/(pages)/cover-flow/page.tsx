import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Cover Flow</h1>
      <br />
      <img src="/Logos/CoverFlowIcon.png" alt="Cover flow" className="w-32 h-32 rounded-3xl object-center	object-contain mb-3" />
      <div className="w-3/4 pt-10 leading-9 text-center">
        Cover flow was a personal project created using React and Electron to build a music player with a unique and visually appealing interface. The
        application allows users to browse and play music files stored on their device, with a cover flow display that showcases album artwork in a
        carousel format, aiming to mimic the design of early versions of ITunes. The project provided valuable experience in UI/UX design, front-end
        development, and desktop application development, enhancing my skills in building engaging and user-friendly interfaces.
        <br />
        <br />
        The project is still in development, with plans to add additional features such as playlist creation, music library management. Along with
        improving loading speeds and performance. One of the main issues currently being solved is the loading of large music libraries, which can
        cause the application to freeze while loading and not display the correct albumm metadata.
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">App Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <img src="/ProjectImages/Coverflow/CoverflowHome.png" alt="Cover flow home" className="w-full md:w-3/4 h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/Coverflow/Coverflow.png" alt="Coverflow mode" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/Coverflow/CoverflowSearch.png" alt="Coverflow Search" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Page;
