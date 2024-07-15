import Navbar from "@/components/global/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden max-[1040px]:pb-20 overflow-x-hidden">
      <Navbar />
      <div className="flex flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default layout;
