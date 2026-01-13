import React from "react";

function ImageBox(props){
    return ( 
    <div className="image-box">
        <div className="image-text-container">
            <div className="image-text-container__image">
                <img className="image-text-container__image-image" src={props.img} alt="" />
            </div>
            <div className="image-text-container__text">
                <h3 className="heading-tertiary image-text-container__text-heading">{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
        <div className="image-box__back">

        </div>
    </div>
    )
   
}

export default ImageBox;