import React from 'react'
import './Mobile.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectContainer text'>
        <a href='https://github.com/vishw060404/Movie-App.git'> <div className='projectItems text'>
          <h2>Movie App</h2>
          {/* <img src='Image/movie.webp' alt='Movie App' className='projectImage' /> */}
          <p>To watch movies using API . Amazing content is waiting for you!</p>
        </div></a>
        <a href='https://github.com/vishw060404/Online-Notes-taking-Application.git'>
          <div className='projectItems1 text'>
          <h2>Notes-Tasking App</h2>
          <p>To watch movies using API . Amazing content is waiting for you!</p>
        </div></a>
        <a><div className='projectItems2 text'>
          <h2>To-do-list App</h2>
          <p>To watch movies using API . Amazing content is waiting for you!</p>
        </div></a>
        <a><div className='projectItems3 text'>
          <h2>Contact Management App</h2>
          <p>To watch movies using API . Amazing content is waiting for you!</p>
        </div></a>

       
         
         
         
      </div>
    </div>
  )
}

export default Projects
