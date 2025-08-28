"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Placeholder } from "./ui/placeholder";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ProjectDialog from "./project-dialog";
import { useEffect, useState } from "react";
import { myProjects } from "@/lib/data";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export default function Projects() {
  const [tab, setTab] = useState("company");
  const [projectId, setProjectId] = useState<number>(0);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(9);

  const [windowWidth] = useWindowSize();

  useEffect(() => {
    if (windowWidth < 768) {
      setItemsToShow(3);
    } else if (windowWidth < 1024) {
      setItemsToShow(6);
    } else {
      setItemsToShow(9);
    }
  }, [windowWidth]);

  const handleProjectOpen = (projectId: number) => {
    setProjectId(projectId);
    setProjectOpen(true);
  };

  const handleShowMore = () => {
    if (windowWidth < 768) {
      setItemsToShow((prev) => prev + 3);
    } else if (windowWidth < 1024) {
      setItemsToShow((prev) => prev + 6);
    } else {
      setItemsToShow((prev) => prev + 9);
    }
  };

  const projectCards = (type: string) => {
    return myProjects
      .filter((project) => project.type == type)
      .slice(0, itemsToShow)
      .map((project) => (
        <motion.div
          key={project.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex"
        >
          <Card
            className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-[#004a4b] hover:scale-110 cursor-pointer"
            onClick={() => handleProjectOpen(project.id)}
          >
            <CardContent className="flex flex-col flex-grow h-full">
              {project.images[0] ? (
                <Image
                  src={project.images[0]}
                  alt="project-thumbnail"
                  width={500}
                  height={208}
                />
              ) : (
                <Placeholder className="border border-black stroke-black dark:stroke-neutral-100/20 w-full h-52" />
              )}
              <div className="flex-grow">
                <p className="my-2 font-bold">{project.title}</p>
                <small className="text-muted-foreground">
                  {project.short_description}
                </small>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {project.tech_stacks.map((tech, i) => (
                  <Badge
                    key={i}
                    className="px-3 py-1 rounded-full"
                    variant="muted"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div
                className={`grid ${
                  project.repo_url && "grid-cols-2"
                } gap-4 mt-5`}
              >
                {project.site_url && project.isAvailable ? (
                  <Button
                    onClick={() => {
                      window.open(project.site_url, "_blank");
                    }}
                  >
                    View Site
                  </Button>
                ) : (
                  <Button variant="secondary" disabled>
                    Site Unavailable
                  </Button>
                )}
                {project.repo_url && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      window.open(project.repo_url, "_blank");
                    }}
                  >
                    View Repo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ));
  };

  return (
    <section id="projects-section" className="flex justify-center w-full">
      <div className="max-w-7xl w-full px-9 py-5 mt-20 mb-32">
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold"
          >
            Featured Projects
          </motion.h2>
        </div>
        <Tabs
          defaultValue="company-projects"
          className="flex justify-center items-center mt-20 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <TabsList className="py-4">
              <TabsTrigger
                value="company-projects"
                className="py-4 px-2"
                onClick={() => setTab("company")}
              >
                Company Projects
              </TabsTrigger>
              <TabsTrigger
                value="personal-projects"
                className="py-4 px-2"
                onClick={() => setTab("personal")}
              >
                Personal Projects
              </TabsTrigger>
            </TabsList>
          </motion.div>
          <TabsContent value="company-projects">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full"
            >
              {projectCards("company")}
            </motion.div>
          </TabsContent>
          <TabsContent value="personal-projects">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full"
            >
              {projectCards("personal")}
            </motion.div>
          </TabsContent>
        </Tabs>

        {myProjects.filter((project) => project.type == tab).length >
          itemsToShow && (
          <div className="flex justify-center items-center mt-10">
            <Button variant="outline" className="p-6" onClick={handleShowMore}>
              Show More
            </Button>
          </div>
        )}
      </div>

      <ProjectDialog
        isOpen={isProjectOpen}
        setOpen={setProjectOpen}
        projectId={projectId}
      />
    </section>
  );
}
