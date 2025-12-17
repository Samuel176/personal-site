import { useState } from 'react'
import viteLogo from '/vite.svg'
import projectInfo from "/src/assets/projects.json";

import './App.css'
import Hero from './componants/Hero'
import Projects from './componants/Projects'
import Footer from './componants/Footer';
import About from './componants/About';
import Contact from './componants/Contact';


function App() {
  const [project, setProject] = useState();

  return (
    <div className='page'>
      <Hero />
      <div className="projects-section">
        <h2 className="heading-secondary margin-l">Projects</h2>
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
  )
}

export default App
