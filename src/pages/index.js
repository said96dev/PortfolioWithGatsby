import React from 'react'
import { Experiences, Hero, Projects } from '../components'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation/animation'
export default function Home() {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <Hero showHero={true} />
      <Experiences />
      <Projects showLink={true} />
    </motion.div>
  )
}
