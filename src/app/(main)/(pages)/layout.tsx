import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div className="flex flex-col w-full min-h-[calc(100vh-3.5rem)] pt-14">{children}</div>;
};

export default layout;
