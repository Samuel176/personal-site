import React from "react";

function About(props){
    return <div className="about-section">
                <div className="about-content">
                    <h1 className="heading-primary margin-l">About Me</h1>
                    <div className="about-content__container">
                        <div className="about-content__container-box"></div>
                        <div className="about-content__container-box"></div>
                    </div>
                </div>
                <div className="bg-video">
                    <video autoPlay muted loop className="bg-video__content" src="video\background-vid.mp4"></video>
                
                </div>
                
    </div>
}

export default About;