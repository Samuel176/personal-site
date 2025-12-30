import React, { useState }  from "react";

function Header(){
    return <div className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">Home</li>
                <li className="nav__list-item">Projects</li>
                <li className="nav__list-item">About</li>
                <li className="nav__list-item">Contact</li>
            </ul>
    </div>
}

export default Header;