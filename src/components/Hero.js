import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import Particle from './Particle'
import CodeSection from './CodeSection'

const Hero = ({ showHero }) => {
  return (
    showHero && (
      <header className='hero relative h-screen flex items-center justify-center  bg-gradient-to-br from-[#1b1b1b] via-[#1b1b1b] to-[#2b2b2b] '>
        <Particle />
        <div className='container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex flex-col items-start justify-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='font-bold text-4xl md:text-6xl tracking-tight mb-4 text-white'
            >
              I'm Said
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-2xl md:text-4xl leading-tight mb-6 text-white'
            >
              Freelance <span className='text-[#189769]'>Full Stack</span>{' '}
              Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-lg md:text-xl mb-8 text-[#e6fff3]'
            >
              Hi, I'm a Fullstack Developer specializing in building modern,
              scalable web applications with React, Node.js, and TypeScript.
              Let's create something amazing together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href='/contact'
                className=' bg-[#3b3b3b] text-[#189769] px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#189769] hover:text-white hover:shadow-lg'
              >
                Contact me
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='md:w-1/2 flex justify-center items-center mt-8 md:mt-0'
          >
            <CodeSection />
          </motion.div>
        </div>
      </header>
    )
  )
}

export default Hero
