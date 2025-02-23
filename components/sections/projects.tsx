"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "crud-application",
    description:
      "This is a full-stack CRUD application where users can Create, Read, Update, and Delete text-based entries along with voice messages. Each entry allows users to record, save, play, and delete voice notes as an additional attachment.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    tech: ["Next.js", "React", "Tailwind CSS", "TanStack Query"],
    demoUrl: "https://todo-application-3cfd8.web.app",
    githubUrl: "https://github.com/Faizan482/crud-application",
  },
  {
    title: "Netflix Clone",
    description:
      "A full-featured Netflix clone with user authentication and real-time streaming capabilities.",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=400&fit=crop",
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demoUrl: "#",
    githubUrl: "https://github.com/Faizan482/Netflix",
  },
  {
    title: "Quiz Application",
    description:
      "Interactive quiz platform with real-time scoring and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Faizan482/Quiz-Application",
  },
  {
    title: "E-commerce App",
    description:
      "Modern e-commerce platform with cart management and payment integration.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/Faizan482/-E-commerce",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my technical
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {expanded[project.title]
                      ? project.description
                      : `${project.description.substring(0, 100)}...`}
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => toggleDescription(project.title)}
                    >
                      {expanded[project.title] ? "Show Less" : "See More"}
                    </Button>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
