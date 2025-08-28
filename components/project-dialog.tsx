"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Placeholder } from "./ui/placeholder";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { myProjects, Project } from "@/lib/data";
import Image from "next/image";

export default function ProjectDialog({
  isOpen,
  setOpen,
  projectId,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  projectId: number;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const project: Project = myProjects.filter(
    (project) => project.id == projectId
  )[0];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90%] overflow-auto">
        <DialogHeader className="space-y-4">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="px-4 pt-4"
          >
            <CarouselContent>
              {project?.images.length > 0 ? (
                project?.images.map((image, i) => (
                  <CarouselItem key={image}>
                    <Image
                      src={image}
                      alt={`project-screenshot-${i + 1}`}
                      width={500}
                      height={208}
                    />
                  </CarouselItem>
                ))
              ) : (
                <>
                  <CarouselItem>
                    <Placeholder className="border border-black stroke-black dark:stroke-neutral-100/20 w-full h-52" />
                  </CarouselItem>
                  <CarouselItem>
                    <Placeholder className="border border-black stroke-black dark:stroke-neutral-100/20 w-full h-52" />
                  </CarouselItem>
                  <CarouselItem>
                    <Placeholder className="border border-black stroke-black dark:stroke-neutral-100/20 w-full h-52" />
                  </CarouselItem>
                </>
              )}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center items-center gap-2">
            {[...Array(count)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 ${
                  i + 1 == current ? "bg-primary" : "bg-foreground"
                } rounded-full cursor-pointer`}
                onClick={() => {
                  setCurrent(i + 1);
                  api?.scrollTo(i);
                }}
              />
            ))}
          </div>
          <DialogTitle className="px-4 text-xl">{project?.title}</DialogTitle>
        </DialogHeader>
        <div className="text-foreground space-y-4 px-4">
          <p>{project?.description}</p>
        </div>

        <div className="text-foreground space-y-4 px-4 mt-8">
          <p className="font-bold">My Role : {project?.role}</p>
          <p>{project?.role_description}</p>
        </div>

        <div className="text-foreground space-y-4 px-4 mt-8">
          <p className="font-bold">Tech Stack : </p>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {project?.tech_stacks.map((tech, i) => (
              <Badge key={i} className="px-3 py-1 rounded-full" variant="muted">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <DialogFooter>
          {project?.site_url && project?.isAvailable ? (
            <Button
              className="mt-4"
              onClick={() => {
                window.open(project?.site_url, "_blank");
              }}
            >
              View Site
            </Button>
          ) : (
            <Button variant="secondary" className="mt-4" disabled>
              Site Unavailable
            </Button>
          )}
          {project?.repo_url && (
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                window.open(project?.repo_url, "_blank");
              }}
            >
              View Repo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
