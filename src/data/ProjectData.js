import React from "react";

const projects = [
    {
        id: 0,
        projectTitle: "test 1",
        projectDesc: "Lorem Ipsum",
        skills: "Lorem Ipsum",
        projectImg: "LoremIpsum.png"
    }

];
//Send and use the data to  a Project Cards component, then use the component for the Project View file (function below might be moot)
const ProjectData = (projects) =>{
    return(
        <div>
            {projects.map((project, index) =>{
                return <div>project.projectTitle</div>
            })
            }

            
        </div>
)

}

