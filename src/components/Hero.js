import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { titleAnim, fade } from '../animation/animation'
import { motion } from 'framer-motion'

const Hero = ({ showHero }) => {
  return (
    showHero && (
      <header className='hero'>
        <section
          className='hero-center section-center
      '
        >
          <div className='hero-info'>
            <div className='title'>
              <motion.div
                variants={titleAnim}
                className='underline'
              ></motion.div>
              <div className='hide'>
                <motion.h1 variants={titleAnim}>I'm Said</motion.h1>
              </div>
              <div className='hide'>
                <motion.h4 variants={titleAnim}>
                  Freelance
                  <span className='hero-span'> Full Stack </span>
                  Developer
                </motion.h4>
              </div>
              <div className='hide'>
                <motion.p variants={titleAnim}>
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at Upstatement.
                </motion.p>
              </div>
            </div>
            <motion.div variants={fade}>
              <Link to='/contact' className='btn'>
                Contact me
              </Link>
            </motion.div>
          </div>
          <motion.div>
            <StaticImage
              className='hero-img'
              src='../assets/images/hero.svg'
              alt='Hero'
              placeholder='blurred'
            />
          </motion.div>
        </section>
      </header>
    )
  )
}

export default Hero
