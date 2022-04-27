import { useState } from "react";
import { Button } from "../components/Button";

export const Projects = () => {
    const items = ["All", "Web", "Industrial Automation", "PowerApps"];
    const [projectFilter, setProjectFilter] = useState(()=>items[0]);
    const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];
  
    const handleClick = (e) => {
      setProjectFilter(e.target.innerText);
    };
  
    return (
      <section id="projects" className="">
        <h1 className="text-primary text-4xl text-center m-4">Projects</h1>
        <ProjectFilterSelector items={items} projectFilter={projectFilter} handleClick={handleClick} />
        <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
                <div className="w-full md:w-1/2 lg:w-1/3 m-4" key={project}>
                    <ProjectCard project={project}/>
                </div>
            ))}
        </div>
      </section>
    );
  };

  const ProjectFilterSelector = ({items, projectFilter,handleClick}) => {
    return (
    <ul className="flex justify-center w-full">
        {items.map((item) => (
            <li key={item}>
                <Button selected={projectFilter === item} onClick={handleClick}>
                {item}
                </Button>
             </li>
        ))}
        </ul>
    )
  }

  const ProjectCard = ({project}) => {
      return (
          <div className="pointer bg-primary p-4 text-white rounded-md">
                {project}
          </div>
      )
  }

