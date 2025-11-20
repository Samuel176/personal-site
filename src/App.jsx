import { useState } from 'react'
import viteLogo from '/vite.svg'
import projectInfo from "/src/assets/projects.json";
import './App.css'
import Hero from './componants/Hero'
import Projects from './componants/Projects'
import Footer from './componants/Footer';
import About from './componants/About';


function App() {
  const [count, setCount] = useState(0)
  const [project, setProject] = useState();

  return (
    <div>
      <Hero />
      <div className="projects-section">
        <div className="projects">
          {projectInfo.map((p) => (
          <Projects
            key={p.id}
            img={p.img}
            text={p.text}
            title={p.title}
          />
        ))}
        
        </div>
      </div>
      <About />
      <Footer />
      
      
    </div>
  )
}

export default App
