import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Project from './components/Project/project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  
  // fetching the theme from local storage
  const currentTheme = localStorage.getItem('currentTheme');

// **********changing bg color of the root element**********
  const rootTheme = document.querySelector('#root');
  // if stored theme is dark then display black root.
  if(currentTheme == 'dark'){
    rootTheme.style.backgroundColor = "black";
  }
  
// **********Responsible for theme of entire app**********
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'dark');
  
  // if after toggling theme is dark then make root black else make root white.
  theme == 'light' ? rootTheme.style.backgroundColor = "white" : rootTheme.style.backgroundColor = "black";

  // storing value in local storage
  useEffect(()=>{
    localStorage.setItem('currentTheme',theme);
  },[theme]);
  
  return (
    <>
      <div className={`nav ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>          
      </div>
      <div className={`home container ${theme}`}>
        <Home/>
      </div>
      <div className={`container ${theme}`}>
        <div className="components">
          <About/>
        </div>
        <div className="components">
          <Education/>
        </div>
        <div className="components">
          <Project/>
        </div>
        <div className="components">
          <Skills/>
        </div>
        <div className="components">
          <Contact/>
        </div>
      </div>
      <div className={`container ${theme}`}>
        <Footer/>
      </div>
    </>
  )
}

export default App
