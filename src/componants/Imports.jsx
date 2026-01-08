import React from "react";
import projectInfo from "/src/assets/projects.json";

import Header from "./Header";
import Hero from './Hero'
import Projects from './Projects'
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

function Import(props){
    
    return (
    <div className='page'>
      <Header />
        <div className="page__container">
        <Hero />
        <div className="projects-section">
            <h2 className="heading-secondary">Projects</h2>
            <div className="projects ">
                {projectInfo.map((p) => (
                <Projects
                    key= {p.id}
                    img= {p.img}
                    gif= {p.gif}
                    text= {p.text}
                    title= {p.title}
                />
                ))}
            </div>
      </div>
        <About />
        <Contact />
        <Footer />
        </div>
    </div>
  )
}

export default Import;