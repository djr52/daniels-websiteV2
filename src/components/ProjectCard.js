import { projects } from "../data/ProjectData";


const ProjectCard = () =>{
    return(
        <div>
            {projects.map((project, index) =>{
                return <div>
                    <h1>{project.projectTitle}</h1>
                    <p>{project.projectDesc}</p>
                    <li>{project.skills}</li>
                    </div>
            })
            }

            
        </div>
    )

}

export default ProjectCard;