import React from "react";

function ImageBox(props){
    return ( 
    <div className="image-text-container">
        <div className="image-text-container__image">
            <div className="image-text-container__image">
                <img className="" src={props.img} alt="" />
            </div>
        </div>
        <div className="image-text-container__text">
            <h3 className="heading-tertiary">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
    )
   
}

export default ImageBox;