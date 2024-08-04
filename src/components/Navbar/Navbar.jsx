import React, {useEffect, useState } from 'react'
import './Navbar.css'
import {MdDarkMode,MdLightMode} from "react-icons/md";
import logo_dark from '../../assets/logo_white.png';
import logo_light from '../../assets/logo_black.png';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({theme,setTheme}) => {
  
  // this switches the theme when button is toggle theme button is clicked.
  const toggle_theme = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  
  // this is taking care of that in switching the theme icon also switches.
  const toggleThemeIcon = (theme === 'light') ? <MdLightMode size={25}/> : <MdDarkMode size={25}/>;

  // for adding click functionality on hamburger icon.
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className='navBar'>
        <div className='logo'>
          <img src={(theme == 'light') ? logo_light : logo_dark} alt="portfolio logo" />
        </div>
    
        <div className={showMediaIcons ? "menuLinks mobileMenuLinks" : "menuLinks"}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className='navButtons'>
          <ul className='navBtnDesktop'>
            <li>
              <button
                id='navBtn' 
                className={(theme == 'light') ? 'lightModeBtn' : 'darkModeBtn'}
                onClick={()=>{toggle_theme()}} >
                {toggleThemeIcon}
              </button>
            </li>
            <li>
              <div className="mobileContactBtn">
                <a href="#contact" >
                  <button className='contactBtn'>Contact</button>
                </a>
              </div>
            </li>
          </ul>
          
          {/* Hamburger Menu */}
          <div className="hamburgerMenu">
            <a 
              href="#" 
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu className='hamburg'/>
            </a>
          </div>
          
        </div>
      </nav>

    </>  
  )
}

export default Navbar