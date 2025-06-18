"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsMobileByWidth } from "@/hooks/useIsMobile";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  year: string;
  liveUrl?: string;
  siteLink?: string;
  imageUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isPortrait, setIsPortrait] = useState(false);
  const isMobile = useIsMobileByWidth();

  const [mounted, setMounted] = useState(false);

  // mark “we’re on the client” after first render
  useEffect(() => {
    setMounted(true);
  }, []);

  // don’t render server vs. client mismatch

  useEffect(() => {
    if (project.imageUrl) {
      const img = new window.Image();
      img.src = project.imageUrl;
      img.onload = () => {
        setIsPortrait(img.naturalHeight > img.naturalWidth);
      };
    }
  }, [project.imageUrl]);

  if (!mounted) return null;

  return (
    <div className={`h-[100dvh] w-[100dvw] `}>
      {/* Main Content */}
      <main className="min-h-[100dvh] flex items-center lg:items-center justify-center p-6 md:pt-24">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-xs">
                  {project.year}
                </Badge>
                {project.featured && (
                  <Badge variant="secondary" className="text-xs">
                    Featured Project
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">{project.title}</h2>
                <p className="text-xl text-zinc-300">{project.subtitle}</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm md:text-lg leading-relaxed text-zinc-300">{project.description}</p>

              <p className="text-sm md:text-lg leading-relaxed text-zinc-400">{project.longDescription}</p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {project.siteLink && (
                <Link href={project.siteLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group">
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </Link>
              )}

              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "black",
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Project Visual */}
          {!isMobile ? (
            <div className="relative">
              <div
                className={`relative ${
                  isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
                } rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900 border`}
              >
                {/* Iframe height 600 width 400 showing liveUrl */}
                {project.liveUrl ? (
                  <iframe src={project.liveUrl} className="absolute inset-0 w-full h-full border-0" title="Project Live Preview" />
                ) : (
                  <Image src={project.imageUrl!} alt={`${project.title} Project Image`} fill className="object-contain" priority />
                )}

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Floating elements for visual interest */}
                {project.liveUrl && (
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium">
                    Live Preview
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20 blur-xl" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}
