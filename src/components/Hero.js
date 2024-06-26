import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { titleAnim, fade } from '../animation/animation'
import { motion } from 'framer-motion'
import Particle from './Particle'

const Hero = ({ showHero }) => {
  return (
    showHero && (
      <header className="hero">
        <Particle />
        <section
          className="hero-center section-center 
      "
        >
          <div className="hero-info">
            <div className="title">
              <motion.div
                variants={titleAnim}
                className="underline"
                initial="hidden"
                animate="show"
              ></motion.div>
              <div className="hide">
                <motion.h1 variants={titleAnim} initial="hidden" animate="show">
                  I'm Said
                </motion.h1>
              </div>
              <div className="hide">
                <motion.h4 variants={titleAnim} initial="hidden" animate="show">
                  Freelance
                  <span className="hero-span"> Full Stack </span>
                  Developer
                </motion.h4>
              </div>
              <div className="hide">
                <motion.p variants={titleAnim} initial="hidden" animate="show">
                  Hi, I'm a Fullstack Developer specializing in building modern,
                  scalable web applications with React, Node.js, and TypeScript.
                  Let's create something amazing together.
                </motion.p>
              </div>
            </div>
            <motion.div variants={fade} initial="hidden" animate="show">
              <Link to="/contact" className="btn hero-btn">
                Contact me
              </Link>
            </motion.div>
          </div>
          <motion.div initial="hidden" animate="show">
            <StaticImage
              className="hero-img"
              src="../assets/images/hero.svg"
              alt="Hero"
              placeholder="blurred"
            />
          </motion.div>
        </section>
      </header>
    )
  )
}

export default Hero
