import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full pt-14">
      <div className="flex flex-col w-full max-w-[1414px]">{children}</div>
    </div>
  );
};

export default layout;
