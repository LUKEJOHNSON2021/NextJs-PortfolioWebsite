import Links from "@/components/ui/links";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">RCADIA</h1>
      <br />
      <img src="/Logos/RCADIA_WHITE_ON_BLACK_1.png" alt="Rcadia" className="w-32 h-32 rounded-3xl object-center	object-contain mb-3" />
      <Links website="http://rcadia.xyz/" />

      <div className="w-3/4 pt-10 leading-9 text-center">
        I was contracted to develop the web platform for Rcadia, a cutting-edge web3 arcade gaming experience. This project involved designing and
        building a modern, user-friendly frontend using React and Next.js to deliver an engaging interface for users. The platform allows players to
        explore and participate in arcade games seamlessly, blending innovative technology with intuitive design.
        <br />
        <br />
        In addition to the frontend development, I design and planned an upcoming backend, which will include a C# backend hosted on Azure. This
        backend integrates a Cosmos NoSQL database for scalable data storage and Azure Blob Storage for efficient image management. The architecture
        employs the repository pattern to facilitate unit testing and enable a test-driven development workflow, ensuring a robust and maintainable
        system.
        <br />
        <br />
        This role required close collaboration with the client to align the platform with their vision and technical requirements. Additionally, I
        worked directly with their game developers to integrate Unity-based WebGL games into the platform, ensuring a seamless user experience. The
        project enhanced my skills in full-stack development, client communication, and working with cross-disciplinary teams to deliver high-quality
        results.
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">Website Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <img src="/ProjectImages/Rcadia/RcadiaHomePage.png" alt="Rcadia Home page" className="w-full md:w-3/4 h-auto mx-auto" />
        </div>
        {/* <div className="w-full p-2">
          <img src="/ProjectImages/Rcadia/RcadiaMarketplace.png" alt="Rcadia Marketplace" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/Rcadia/RcadiaProfile.png" alt="Rcadia Profile" className="w-full md:w-3/4  h-auto mx-auto" />
        </div> */}
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Page;
