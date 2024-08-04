import React from 'react'
import './project.css'
import portfolio from '../../assets/stars_bg.jpg';
import todoApp from '../../assets/todo_app.png';
import ticTacToe from '../../assets/tic-tac-toe.jpg';

const project = () => {
  return (
    <div id="projects">

        <div className='componentStyle'>
            <h1 className='secTitle'>My <span id='spanTitle'>Projects</span></h1> 
        </div>

        <div class="portfolio">
            <div class="work-list card-list">
                <div class="work card">
                    <img src={portfolio} alt="project image" />
                    <div class="hoverLayer">
                        <h3>Personal Portfolio | HTML | CSS </h3>
                        <p>April 2024</p>
                        <p>Implementes Basic Javascript to add button click responses.</p>
                        <p>Fully Responsive in small screen and large screens both.</p>
                        <a href="https://react-portfolio-im-pranshus-projects.vercel.app/">View</a>
                    </div>
                </div>
                <div class="work card">
                    <img src={todoApp} alt="project image"/>
                    <div className="hoverLayer">
                        <h3>TodoApp | HTML , CSS | React JS</h3>
                        <p>March 2024</p>
                        <p><b>Features : </b> Delete Todo | Add Todo | Update Todo | Complete Todo</p>
                        <p>Used React Hooks and Local Storage.</p>
                        <a href="https://github.com/Im-Pranshu/TodoApp/tree/main">View</a>
                    </div>
                </div>
                <div class="work card">
                    <img src={ticTacToe} alt="project image" />
                    <div class="hoverLayer">
                        <h3>Tic-Tac-Toe Game | HTML , CSS | React JS </h3>
                        <p>February 2024</p>
                        <p>Undo Redo Features using REACT HOOKS</p>
                        <a href="https://github.com/Im-Pranshu/Tic-Tac-Toe">View</a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/Im-Pranshu?tab=repositories" class="btn">See More</a>
        </div>

        <div className='eT2'>
            
                
                
                
            </div>
    </div>
  )
}

export default project