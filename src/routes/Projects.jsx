import { useState } from "react";
import { Button } from "../components/Button";

export const Projects = () => {
    const items = ["All", "Web", "Industrial Automation", "PowerApps"];
    const [projectFilter, setProjectFilter] = useState(()=>items[0]);
  
    const handleClick = (e) => {
      setProjectFilter(e.target.innerText);
    };
  
    return (
      <section id="projects" className="">
        <h1 className="text-primary text-4xl text-center m-4">Projects</h1>
        <ProjectFilterSelector items={items} projectFilter={projectFilter} handleClick={handleClick} />
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