import React from "react";
import Captions from "./Captions";
import CaptionSplit from "./CaptionSplit";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { projects } from "@/lib/misc";
import { SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div
      data-index={3}
      id="projects"
      className="page relative z-10 flex min-h-screen flex-col py-12 pb-4"
    >
      {/* Heading */}
      <div className="layout-x-padding border-b border-muted pb-3">
        <Captions txt={"collection of "} classname={"lg:text-6xl"} />
        <CaptionSplit txt1={"recent"} txt2={"Project"} />
      </div>

      {/* Carousel */}
      <Carousel
        className="flex flex-1"
        opts={{
          align: "start",
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="mx-2 flex h-full gap-5 p-2 py-4 xl:gap-10 2xl:px-24">
          {projects.map((project) => (
            <CarouselItem
              key={project.title}
              className="basis-[92%] md:basis-[95%] lg:basis-[60%] relative flex min-h-[450px] flex-col overflow-hidden rounded-2xl border border-muted-foreground/20 bg-black p-1 transition-transform hover:scale-[1.01] md:min-h-[550px] lg:h-full lg:rounded-3xl xl:p-2"
            >
              {/* Image */}
              <div className="relative h-[450px] w-full md:h-full after:absolute after:inset-0 after:block after:rounded-2xl after:bg-gradient-to-t after:from-black/95 after:via-black/40 after:to-transparent">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="pointer-events-none relative h-full w-full select-none rounded-xl border border-muted-foreground/20 object-cover"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-2 p-4 md:p-8">
                <h3 className="bg-gradient-to-tr from-white/90 to-gray-500 bg-clip-text text-2xl font-semibold text-transparent md:text-4xl xl:text-6xl">
                  {project.title}
                </h3>

                <span className="max-w-[90%] text-sm text-gray-300 md:text-base">
                  {project.description}
                </span>

                {/* Tech Stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 rounded-md border border-muted-foreground/30 px-2 py-1 text-xs backdrop-blur-2xl md:px-3 md:py-2 md:text-sm"
                    >
                      <img
                        src={tech.img}
                        alt={tech.title}
                        className="size-4 rounded-full object-contain md:size-5"
                      />
                      <span>{tech.title}</span>
                    </div>
                  ))}

                  {/* Live Link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-md border border-muted-foreground/30 px-2 py-1 text-xs backdrop-blur-2xl transition hover:scale-[1.03] md:px-3 md:py-2 md:text-sm"
                  >
                    <SquareArrowOutUpRight className="size-4 md:size-5" />
                    <span className="text-green-400">
                      Live Link
                    </span>
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom Stats */}
      <div className="layout-x-padding flex justify-around gap-3 border-muted px-2 pt-4 md:justify-end md:gap-16">
        <div className="flex flex-col items-center">
          <Captions txt={"11+"} classname={"font-semibold"} />
          <span className="text-center text-xs md:text-sm">
            Github Repo
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Captions txt={"11+"} classname={"font-semibold"} />
          <span className="text-center text-xs md:text-sm">
            Deployments
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Captions txt={"30+"} classname={"font-semibold"} />
          <span className="text-center text-xs md:text-sm">
            API Integration
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;