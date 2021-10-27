import { projects } from "../data/ProjectData";
import { Icon, ProjectCard } from "../styles/ViewStyles";

import github from '../assets/github-logo-60.png';



const ProjectCards = () =>{
    return(
        <div className="row">
            {projects.map((project, index) =>{
                return <div className="col-sm-6">
                <ProjectCard className="card bg-dark">
                    <div class="card-body">
                        <h5 class="card-title">{project.projectTitle} | <a href={project.links}><Icon src={github}/></a></h5>
                        <p class="card-text">{project.projectDesc}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-dark">{project.skills}</li>
                    </ul>
                </ProjectCard>
            </div>
            })
            }

            
        </div>
    )

}

export default ProjectCards;