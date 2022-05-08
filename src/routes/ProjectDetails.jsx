
import { useNavigate, useParams } from 'react-router-dom'
import {projects} from "../data/data"
import {SkillItem} from "../components/SkillItem" 
import {SkillList} from "../components/SkillList" 
import { Carousel } from '../components/Carousel'

export const ProjectDetails = () => {
    let navigate = useNavigate();
    const { projectTitle } = useParams()
    const project = projects.find(proj => proj.title === projectTitle)
    const {title, description, pictures, details, features, contrubutors, technologies, gitHubUrl, liveUrl} = project
    const handleExit = () =>{
        navigate(-1)
    }

  return (
    <section className="bg-light p-4 pb-10 min-h-screen">
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
    <div className="py-10 max-w-2xl mx-auto">
        <h1 className="text-primary text-2xl sm:text-4xl text-center">{title}<span className="text-default">.</span></h1>
        <p className="text-default text-l text-center">{description}</p>
        <div className="flex justify-center m-4">
        {liveUrl && <LinkButton url={liveUrl} title="Launch Site"/>}
        {gitHubUrl && <LinkButton url={gitHubUrl} title="View Code"/>}
        </div>
        <main className='m-5'>
          {details && 
          <div className="mb-4">
            <h1 className='text-lg text-primary'>Description</h1>
            <p className="">{details}</p>
          </div>}
          {technologies && 
            <SkillList>
            <h1 className='text-lg text-primary'>Technologies</h1>
            {technologies.map((tech,index) => <SkillItem key={index}>{tech}</SkillItem>)}
            </SkillList>}
            {contrubutors && 
          <div className="mb-4">
            <h1 className='text-lg text-primary'>My Role</h1>
            <p className="">{contrubutors}</p>
          </div>}
          {features && 
          <SkillList>
          <h1 className='text-lg text-primary'>Features</h1>
          {features.map((feature,index) => <SkillItem key={index}>{feature}</SkillItem>)}
          </SkillList>} 
          <Carousel images={pictures}/>
        </main>
   
    </div>
</section>
  )
}


const LinkButton = ({title, url}) =>{
  return(
    <a
    className='pointer px-4 py-2 rounded-md bg-white text-primary border-2 border-primary mx-2 hover:text-white hover:bg-primary hover:border-white'
    target="__blank"
    aria-label={title}
    title={title}
    href={url}
  >{title}</a>
  )
}
