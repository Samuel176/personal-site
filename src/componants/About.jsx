import React from "react";

function About(props){
    return <div className="about-section">
                <div className="about-content">
                    <h1 className="heading-primary padding-m">About Me</h1>
                    <div className="about-content__container">
                        <div className="about-content__container-box">
                            <div className="image-text-container">
                                <img className="image-text-container__image" src="img/meOnTrain.jpeg" alt="" />
                                <div className="image-text-container__text">
                                    <h3 className="heading-tertiary">Pillar Of the Community</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut rem. Rerum eligendi</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-content__container-box">
                            
                        </div>
                    </div>
                </div>
                <div className="bg-video">
                    <video autoPlay muted loop className="bg-video__content" src="video\background-vid.mp4"></video>
                
                </div>
                
    </div>
}

export default About;