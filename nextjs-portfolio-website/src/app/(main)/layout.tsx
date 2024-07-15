import Navbar from "@/components/global/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default layout;
