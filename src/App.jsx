

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Project from './components/ProjectPage/Project'
import  { Toaster } from "react-hot-toast";
function App() {
  

  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Toaster/>
    </div>
  )
}

export default App
