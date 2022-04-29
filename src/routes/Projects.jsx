import { useState } from "react";
import { Button } from "../components/Button";
import example from "../assets/exampleSite.jpeg"

export const Projects = () => {
    const items = ["All", "Web", "Industrial Automation", "Corporate"];
    const [projectFilter, setProjectFilter] = useState(()=>items[0]);
    const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];
  
    const handleClick = (e) => {
      setProjectFilter(e.target.innerText);
    };
  
    return (
      <section id="projects" className="p-10">
        <h1 className="text-primary text-4xl text-center m-4">Projects<span className="text-default">.</span></h1>
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
                <Button type="selector" selected={projectFilter === item} onClick={handleClick}>
                {item}
                </Button>
             </li>
        ))}
        </ul>
    )
  }

  const ProjectCard = ({project}) => {
      return (
          <button className="pointer relative group bg-primary p-4 text-white rounded-md">
              <div className="p-4 ">
              {/* <div className="filter group-hover:grayscale p-4 "> */}
              <img className="rounded-md" src={example} alt="site" />
              </div>
              <div className="group-hover:block hidden absolute top-1/3 left-0 right-0 z-10">
              <p className="bg-muted px-4 py-2 m-2 rounded-md">Learn More</p>
              </div>
              <p className="text-center">{project}</p>
          </button>
      )
  }

