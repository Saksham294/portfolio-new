import { Typography } from '@mui/material'
import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import { projects } from './projects.json'
import ProjectCard from '../ProjectCard/ProjectCard';
import CircularAnimation from '../CircularAnimation/CircularAnimation'

const About = () => {
  return (
    <div id='about' className="about-container">
      <div className="about">

        <div className="name-intro">
          <Typography variant='h2'>
            <motion.div
              animate={{
                rotate: [0, 20, -20, 20, -20, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{ display: 'inline-block', marginRight: '12px', zIndex: -1 }}
            > 👋 </motion.div>Hi! I'm Saksham
          </Typography>
        </div>
        <div className="about-me">
          <Typography variant='h5'>
            I am a full-stack developer. I have worked with many web technologies and built multiple web apps.
            <br></br>
            <br></br>
            Apart from coding, I like to read and write.<br></br><br></br> I write both technical and non-technical blogs. You can find some of my
            writings <a target='blank' href='https://medium.com/@sakshamsingh5001'>here</a>.
            I also like to play badminton 🏸<br></br>
            <br></br>
            Below you will find some of my projects

          </Typography>
        </div>

      </div>

      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.name}
              desc={project.description}
              url={project.link}
              logoUrl={project.img}
              tools={project.tools}
            />
          )
        })}
      </div>
    </div>
  )
}

export default About