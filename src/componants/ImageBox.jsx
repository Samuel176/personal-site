import React from "react";
import { useState } from 'react';



function ImageBox(props){
    const [isFlipped, setIsFlipped] = React.useState(false)
    return ( 
    <div className={`image-box ${isFlipped ? "image-box--flipped" : ""} `}
        onClick={() => setIsFlipped(f => !f)}
    >
        <div className="image-box__front">
            <div className="image-text-container">
                <div className="image-text-container__image">
                    <img className="image-text-container__image-image" src={props.img} alt="" />
                </div>
                <div className="image-text-container__text">
                    <h3 className="heading-tertiary image-text-container__text-heading">{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
        
        <div className="image-box__back">
            <div className="image-text-container">
                <div className="image-text-container__image">
                    <img className="image-text-container__image-image" src={props.imgBack} alt="" />
                </div>
                <div className="image-text-container__text">
                    <h3 className="heading-tertiary image-text-container__text-heading">{props.titleBack}</h3>
                    <p>{props.textBack}</p>
                </div>
            </div>
        </div>
    </div>
    )
   
}

export default ImageBox;