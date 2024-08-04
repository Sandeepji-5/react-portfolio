import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div id='education'>

        {/* added this this div align h1 on center without affecting grid of content. */}
        <div className="componentStyle">
            <h1 className='secTitle'>My <span id='spanTitle'>Education</span></h1>
        </div>

        <div className='eduList card-list'>
                <div className='eduListItem card'>
                    {/* <img src={profile} alt="project image"/> */}
                    <div className='aboutEdu'>
                            <h3>High School</h3> 
                            <h4>Krishna Education Centre</h4>
                            <p>2017-18</p>
                            <p>Scored 79%</p>
                    </div>
                    <div className='hoverLayer'>
                        <a href="#">View</a>
                    </div>
                </div>

                <div className='eduListItem card'>
                    {/* <img src={profile} alt="project image"/> */}
                    <div className='aboutEdu'>
                            <h3>Intermediate </h3>
                            <h4>Krishna Education Centre</h4>
                            <p>2019-20</p>
                            <p>Scored 73%</p>
                    </div>
                    <div className='hoverLayer'>
                        <a href="#">View</a>
                    </div>
                </div>

                <div className='eduListItem card'>
                    {/* <img src={profile} alt="project image"/> */}
                    <div className='aboutEdu'>
                            <h3>B.Tech CSE</h3>
                            <h4>Axis Colleges</h4>
                            <p>2021-Persuing</p>
                            <p>SGPA:7.0</p>
                    </div>
                    <div className='hoverLayer'>
                        <a href="#">View</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Education