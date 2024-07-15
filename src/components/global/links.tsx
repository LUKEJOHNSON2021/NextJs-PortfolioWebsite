import { Github, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  website: string;
  github: string;
};

const Links = ({ website, github }: Props) => {
  return (
    <div className="flex flex-row justify-evenly pb-5">
      <Link href={website}>
        <Globe size={24} />
      </Link>
      <Link href={github}>
        <Github size={24} />
      </Link>
    </div>
  );
};

export default Links;
