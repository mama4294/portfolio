import { useState } from "react";
import { Button } from "../components/Button";
import example from "../assets/exampleSite.jpeg"
import { projects } from "../data/data";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
    const items = ["Web", "Industrial Automation", "Corporate"];
    const [projectFilter, setProjectFilter] = useState(()=>items[0]);
    const filteredProjects = projects.filter((proj) => proj.type === projectFilter)
  
    const handleClick = (e) => {
      setProjectFilter(e.target.innerText);
    };
  
    return (
      <section id="projects" className="p-2 sm:p-10">
        <h1 className="text-primary text-4xl text-center m-4">Projects<span className="text-default">.</span></h1>
        <ProjectFilterSelector items={items} projectFilter={projectFilter} handleClick={handleClick} />
          <div className="flex flex-wrap justify-center">
            {filteredProjects.map((project) => (
                <div className="w-64 h-64 m-4" key={project.id}>
                    <ProjectCard project={project}/>
                </div>
            ))}
          </div>
      </section>
    );
  };

  const ProjectFilterSelector = ({items, projectFilter,handleClick}) => {
    return (
    <ul className="flex xs:flex-nowrap flex-wrap justify-center items-center	w-full">
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
    const navigate = useNavigate()
    const handleClick = () =>{
      navigate(`../${project.title}`)
    }
    const {pictures, title} = project
    let picture = example
    console.log(title)
    console.log(pictures)

    if (pictures !== undefined && pictures.length){
      picture = pictures[0]
    }
      return (
          <button className="pointer relative group bg-primary p-4 text-white rounded-md" onClick={handleClick}>
              <div className="p-4 ">
                <img className="rounded-md w-44 h-44" src={picture ? process.env.PUBLIC_URL + picture : example} alt="site" />
              </div>
              <div className="group-hover:block hidden absolute top-1/3 left-0 right-0 z-10">
                <p className="bg-muted px-4 py-2 m-2 rounded-md inline-block">Learn More</p>
              </div>
              <p className="text-center">{title}</p>
          </button>
      )
  }

