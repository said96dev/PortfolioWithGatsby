import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import { scrollReveal } from '../animation/animation'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'

const Project = ({ url, description, image, github, stack, title, index }) => {
  const [element, controls] = useScroll()

  return (
    <motion.article
      className='project'
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className='project-img'
      />
      <div className='project-info'>
        <div className='project-header'>
          <span className='project-number'>0{index + 1}</span>
          <div className='project-slug'>
            <h3>{title}</h3>
          </div>
        </div>

        <p className='project-desc'>{description.description}</p>
        <div className='project-stack'>
          {stack.stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className='project-links'>
          <a href={github}>
            <FaGithubSquare className='project-icon' />
          </a>
          <a href={url}>
            <FaShareSquare className='project-icon' />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default Project
