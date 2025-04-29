import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Forrester Park Vets Blog</h1>
      <br />
      <img src="/Logos/ForresterPark.png" alt="Forrester Park Golf" className="w-32 h-32" />

      <div className="w-3/4 pt-10 leading-9 text-center">
        I developed a blog-style platform for Forrester Park Vets to enable easy communication and updates for their members. The site provides a
        simple and user-friendly interface where selected management members can post and edit news, updates, and other important information. <br />
        <br />
        The platform features a custom text editor and a file upload system that supports images, PDFs, and formatted Excel tables. File handling is
        managed through UploadThing, while all site data is stored in a MongoDB database for efficient and scalable management.
        <br />
        <br />
        To secure administrative functionality, I implemented NextAuth for authentication, ensuring that only authorized management members can access
        the post creation and editing tools. Regular members are limited to viewing published updates, keeping the admin area protected and private.
        <br />
        <br />
        This project showcases my ability to build secure, practical, and user-focused web applications, integrating authentication, file management,
        and custom content systems tailored to specific client needs.
      </div>
      <Separator className="my-4" />
      <h1 className="text-2xl font-bold pb-5">Website Images</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <img src="/ProjectImages/ForresterParkVets/HomePage.png" alt="Game Hub Home page Light" className="w-full md:w-3/4 h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/ForresterParkVets/AdminDashboard.png" alt="Game Hub Home page Dark" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
        <div className="w-full p-2">
          <img src="/ProjectImages/ForresterParkVets/EditPost.png" alt="Game Hub Game page Light" className="w-full md:w-3/4  h-auto mx-auto" />
        </div>
      </div>

      <Separator className="my-4" />
    </div>
  );
};

export default page;
