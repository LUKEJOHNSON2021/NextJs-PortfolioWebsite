import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div className="min-h-[calc(100vh-5rem)] mt-20 flex max-w-[1414px] w-full">{children}</div>;
};

export default layout;
