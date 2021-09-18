import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import Head from 'next/head'
import { Category } from "../types";
const Projets = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category) => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />

        <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial='initial' animate='animate'>
          {projects.map((project) => (
            <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeUp}>
              <ProjectCard project={project} key={project.id} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projets;
