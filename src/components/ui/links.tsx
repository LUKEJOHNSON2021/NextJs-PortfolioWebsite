import { IoLogoGithub } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

import Link from "next/link";
import React from "react";

type Props = {
  website: string;
  github?: string;
};

const Links = ({ website, github }: Props) => {
  return (
    <div className="flex items-center flex-row justify-evenly w-1/2 ">
      <Link href={website} target="_blank">
        <CiGlobe className="text-4xl" />
      </Link>
      {github && (
        <Link href={github} target="_blank">
          <IoLogoGithub className="text-4xl" />
        </Link>
      )}
    </div>
  );
};

export default Links;
