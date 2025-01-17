import { Separator } from "@/components/ui/separator";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <h1 className="text-4xl font-bold ">Ai Medical Voice Assisted website</h1>
      <br />
      <div className="w-3/4 pt-10 leading-9 text-center">
        A React based webapp providing an Ai voice assistant designed to assist medical professionals in following guidelines and best practices. It
        leverages the browsers built in speechsdk passed through the Azure Ai speech service to improve the voice recognition.
        <br />
        <br />
        A C# backend providing Rest Api&apos;s and integration with OpenAi. The recognised voice is then passed to an Ai agent along with an object of
        active buttons rendered on the page to help determine the task the user is trying to complete. Providing a hands free method to navigate the
        site for the medical professional.
        <br />
        <br />
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Page;
