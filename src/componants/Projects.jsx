import React, { useState }  from "react";


function Projects(props){
    const [isGif, setIsGif] = useState(false);
    return <div className="projects__container">
                <img name="project-img" src={isGif ? props.gif : props.img} alt="" className="projects__container-img" 
                onMouseEnter={() => setIsGif(true)}
                onMouseLeave={() => setIsGif(false)}
                />
                <div className="small-container">
                    <h3 className="projects__container-title">{props.title}</h3>
                    <p name="project-text" className="projects__container-text">{props.text}</p>
                </div>
            </div>
      
     
}

export default Projects;