import React from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Horizontal({ projects }: { projects: Project[] }) {
  const targetRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 0.06, 0.94, 1], ["0%", "0%", "-80%", "-80%"]);

  return (
    <div className=" h-[500svh] md:h-[700svh]" ref={targetRef}>
      <div className="h-[100svh] sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div
          id="projects"
          style={{
            x,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr",
            rowGap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="projectCard">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
