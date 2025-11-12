import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './componants/Hero'
import Projects from './componants/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <Projects />
    </div>
  )
}

export default App
