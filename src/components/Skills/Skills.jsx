import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills componentStyle'>
        <h1 className='secTitle'>My <span id='spanTitle'>Skills</span></h1>
        <div className='skList'>
            <div>
                <h2 className='skillType'>Technical Skills</h2>
                <div className='skBlock'>
                    <div className='skContent'>
                        <h3>HTML</h3>
                        <p>70%</p>
                    </div>
                    <div className='skBlockAbout html'>
                        <div className='layer one'></div>
                    </div>
                   
                    <div className='skContent'>
                        <h3>CSS</h3>
                        <p>60%</p>
                    </div>
                    <div className='skBlockAbout css'>
                        <div className='layer two'></div>
                    </div>

                    <div className='skContent'>
                        <h3>JavaScript</h3>
                        <p>40%</p>
                    </div>
                    <div className='skBlockAbout js'>
                        <div className='layer three'></div>
                    </div>

                    <div className='skContent'>
                        <h3>C++</h3>
                        <p>75%</p>
                    </div>
                    <div className='skBlockAbout cpp'>
                        <div className='layer four'></div>
                    </div>
                </div>

            </div>

            <div>
                <h2 className='skillType'>Professional Skills</h2>
                <div className='skBlock'>
                    <div className='skContent'>
                        <h3>Problem Solving</h3>
                        <p>70%</p>
                    </div>
                    <div className='skBlockAbout ps'>
                        <div className='layer a'></div>
                    </div>

                    <div className='skContent'>
                        <h3>LeaderShip</h3>
                        <p>70%</p>
                    </div>
                    <div className='skBlockAbout lsp'>
                        <div className='layer b'></div>
                    </div>
                    
                    <div className='skContent'>
                        <h3>Empathy</h3>
                        <p>60%</p>
                    </div>
                    <div className='skBlockAbout empt'>
                        <div className='layer c'></div>
                    </div>

                    <div className='skContent'>
                        <h3>Team Player</h3>
                        <p>85%</p>
                    </div>
                    <div className='skBlockAbout tp'>
                        <div className='layer d'></div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Skills