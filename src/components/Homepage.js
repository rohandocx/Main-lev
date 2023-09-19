import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='container'>
        <h1 id='heading'>Welcome</h1>
      <div id='container-child1' className='container-chid'>
       <a href='https://todo-leverag-lcuz26yr9-rohandocx.vercel.app/'>TASKBOARD</a>
      </div>
      <div id='container-child2' className='container-chid'>
      <a href='https://calculator-leverag-jgms.vercel.app/'>CALCULATOR</a>
      </div>
      <div id='container-child3' className='container-chid'>
      <a href='https://weather-leverg-jvweohbfk-rohandocx.vercel.app/'>WEATHER</a>
      </div>
    </div>
  )
}

export default Homepage
