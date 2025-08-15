"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Placeholder } from "./ui/placeholder";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ProjectDialog from "./project-dialog";
import { useState } from "react";
import { myProjects } from "@/lib/data";

export default function Projects() {
  const [projectId, setProjectId] = useState<number>(0);
  const [isProjectOpen, setProjectOpen] = useState(false);

  const handleProjectOpen = (projectId: number) => {
    setProjectId(projectId);
    setProjectOpen(true);
  };

  const projectCards = (type: string) => {
    return myProjects
      .filter((project) => project.type == type)
      .map((project) => (
        <Card
          key={project.id}
          className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-[#004a4b] hover:scale-110 cursor-pointer"
          onClick={() => handleProjectOpen(project.id)}
        >
          <CardContent className="flex flex-col h-full">
            <Placeholder className="border border-black stroke-black dark:stroke-neutral-100/20 w-full h-52" />
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
              className={`grid ${project.repo_url && "grid-cols-2"} gap-4 mt-5`}
            >
              {project.site_url && !project.isMaintenance ? (
                <Button
                  onClick={() => {
                    window.open(project.site_url, "_blank");
                  }}
                >
                  View Site
                </Button>
              ) : project.site_url ? (
                <Button variant="secondary" disabled>
                  Under Maintenance
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold"
          >
            Featured Projects
          </motion.h2>
        </div>
        <Tabs
          defaultValue="company-projects"
          className="flex justify-center items-center mt-20 w-full"
        >
          <TabsList className="py-4">
            <TabsTrigger value="company-projects" className="py-4 px-2">
              Company Projects
            </TabsTrigger>
            <TabsTrigger value="personal-projects" className="py-4 px-2">
              Personal Projects
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="company-projects"
            className="grid grid-cols-3 gap-8 mt-10 w-full"
          >
            {projectCards("company")}
          </TabsContent>
          <TabsContent
            value="personal-projects"
            className="grid grid-cols-3 gap-8 mt-10 w-full"
          >
            {projectCards("personal")}
          </TabsContent>
        </Tabs>
      </div>

      <ProjectDialog
        isOpen={isProjectOpen}
        setOpen={setProjectOpen}
        projectId={projectId}
      />
    </section>
  );
}
