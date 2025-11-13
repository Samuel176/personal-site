import React from "react";

function Projects(props){
    return <div className="projects__container">
                <img name="project-img" src={props.img} alt="" className="projects__container-img" />
                <div className="small-container">
                    <h3 className="projects__container-title">{props.title}</h3>
                    <p name="project-text" className="projects__container-text">{props.text}</p>
                </div>
            </div>
      
     
}

export default Projects;