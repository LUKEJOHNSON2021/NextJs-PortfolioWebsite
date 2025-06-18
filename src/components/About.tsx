import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <div id="about" className="flex h-[120svh] w-full flex-col items-center justify-center gap-8 ">
      {/* Text Content */}
      <div className="flex w-full flex-col space-y-6 text-center max-w-4xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-xl text-muted-foreground">Junior Fullstack Developer</p>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            I&apos;m Luke Johnson, a Junior Full-Stack Developer and recent software engineering graduate from the University of Hull, with a
            First-Class degree in Computer Science (Software Engineering). <br />
            <br /> Experienced in architecting, building, and deploying full-stack web and mobile applications with TypeScript (React & React Native)
            and C#, backed by cloud-hosted APIs
          </p>
          <br />
          <p className="leading-relaxed">
            Since graduating University, I&apos;ve been working as a freelance developer, helping clients turn their ideas into apps and websites. I
            thrive on challenges and am passionate about creating user-friendly, efficient applications that solve problems and provide real value to
            users.
          </p>
        </div>
        <section className=" p-6 my-8">
          <h2 className="text-2xl font-semibold mb-2">Recent GitHub Activity</h2>
          <p className="text-sm text-gray-500 mb-4">Here&apos;s a peek at my commit history so far this year.</p>
          <GitHubCalendar username="lukejohnson2021" colorScheme="light" />
        </section>

        <div className="space-y-3">
          <h2 className="text-xl font-medium">Core Skills</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {["React", "React Native", "TypeScript", "C#", "Azure", "UI/UX Design", "Figma", "NoSQL", "SQL"].map((skill) => (
              <div
                key={skill}
                className="
          rounded-full border border-border bg-background 
          px-4 py-1 text-sm

          transform                   /* enable transforms */
          transition-transform        /* animate transforms */
          duration-200                /* 200ms animation */
          ease-out                    /* easing */
          hover:scale-110             /* scale up to 110% on hover */
        "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex items-center gap-4 pt-2 justify-center">
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
