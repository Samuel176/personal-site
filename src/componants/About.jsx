import React from "react";
import ImageBox from "./ImageBox";
import imageText from "../assets/imageText"


function About(props){
    return <div className="about-section">
                <div className="about-content">
                    <h1 className="heading-primary padding-m">About Me</h1>
                    <div className="about-content__container">
                            {imageText.map((p) => (
                                <ImageBox 
                                    key= {p.id}
                                    title= {p.title}
                                    text= {p.text}
                                    img= {p.img}
                                />
                            ))}
                    </div>
                </div>
                <div className="bg-video">
                    <video autoPlay muted loop className="bg-video__content" src="video\background-vid.mp4"></video>
                
                </div>
                
    </div>
}

export default About;