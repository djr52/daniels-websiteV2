import { projects } from "../data/ProjectData";
import { ProjectCard } from "../styles/ViewStyles";


const ProjectCards = () =>{
    return(
        <div className="row">
            {projects.map((project, index) =>{
                return <div className="col-sm-6">
                <ProjectCard className="card bg-dark">
                    <div class="card-body">
                        <h5 class="card-title">{project.projectTitle}</h5>
                        <p class="card-text">{project.projectDesc}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-dark">{project.skills}</li>
                    </ul>
                    </ProjectCard></div>
            })
            }

            
        </div>
    )

}

export default ProjectCards;