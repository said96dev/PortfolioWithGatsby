import React from 'react'
import { Title } from '../components'
import aboutImg from '../assets/images/about.svg'
import skills from '../constants/skills'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation/animation'
const About = () => {
  return (
    <>
      <motion.section
        exit='exit'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        className='about-page'
      >
        <div className='section-center about-center'>
          <img
            className='about-img-svg'
            src={aboutImg}
            alt='Hero'
            placeholder='blurred'
          />
          <article className='about-text'>
            <Title title='About Me' />
            <h4>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology.
            </h4>
          </article>
        </div>
        <div className='about-info section-center'>
          <div className='about-get'>
            <h4>Get to know me!</h4>
            <div className='underline'></div>

            <p>
              I am a full-stack developer with a passion for innovative and
              creative solutions. For 5 years, I have been working on developing
              digital products that inspire people and make their lives easier.
            </p>
            <p>
              What sets me apart from other developers is my ability to combine
              technical solutions with design and user-friendliness. I believe
              that a great product should not only be functional but also
              provide a great user experience.
            </p>
            <p>
              When I'm not sitting at the computer, I enjoy spending time in
              nature and traveling the world to learn about different cultures
              and languages.
            </p>
            <p>
              I look forward to hearing from you and working on exciting
              projects!
            </p>
          </div>
          <div className='about-skills'>
            <h4>My Skills</h4>
            <div className='underline'></div>
            <div className='about-stack'>
              {skills.map((skill, index) => {
                return (
                  <span key={index} className='about-stack-item'>
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default About
