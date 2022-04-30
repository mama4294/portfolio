
import { useNavigate, useParams } from 'react-router-dom'
import {projects} from "../data/data"

export const ProjectDetails = () => {
    let navigate = useNavigate();
    const { projectTitle } = useParams()
    const project = projects.find(proj => proj.title === projectTitle)
    const {title, description} = project

    const handleExit = () =>{
        navigate(-1)
    }

  return (
    <section className="bg-light p-4 pb-10 h-screen">
        <button onClick={handleExit} className="ml-auto">
            <svg
            className="h-8 w-8 text-default"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              </button>
    <div className="py-10">
        <h1 className="text-primary text-2xl sm:text-4xl text-center">{title}<span className="text-default">.</span></h1>
        <p className="text-default text-l text-center">{description}</p>

    </div>
</section>
  )
}
