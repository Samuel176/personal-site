import React from "react";
import ImageBox from "./ImageBox";
import imageText from "../assets/imageText"



function About(props){
    return <div className="about-section">
        <h2 className="heading-secondary">About</h2>
        <div className="about-section__container">
            {imageText.map((p) => (
            <ImageBox 
                key={p.id}
                img={p.img}
                text={p.text}
                title={p.title}
                imgBack={p.imgBack}
                textBack={p.textBack}
                titleBack={p.titleBack}
            />
        ))}
        </div>
    </div>
}

export default About;