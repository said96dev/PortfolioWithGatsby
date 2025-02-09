import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Job from './Job'
import { motion, AnimatePresence } from 'framer-motion'

import Title from './Title'
const query = graphql`
  {
    allContentfulJobs(sort: { data: DESC }) {
      nodes {
        company
        id
        position
        content {
          experience
        }
        duration
        data(formatString: "MMM Do, YYYY")
      }
    }
  }
`

const Experiences = () => {
  const [value, setValue] = React.useState(0)
  const data = useStaticQuery(query)
  const {
    allContentfulJobs: { nodes: jobs },
  } = data
  const { company, position, duration, content } = jobs[value]

  return (
    <section className='section jobs'>
      <Title title='experience' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => (
            <motion.button
              key={index}
              className={index === value ? 'job-btn active-btn' : 'job-btn'}
              onClick={() => setValue(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {job.company}
            </motion.button>
          ))}
        </div>
        <div
          className='perspective-container'
          style={{ perspective: '1000px' }}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={value}
              className='job-card'
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 0, opacity: 0, x: 1000 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.5,
              }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <article className='job-info'>
                <h3>{position}</h3>
                <h4 className=''>{company}</h4>
                <p className='job-date'>{duration}</p>
                {content.experience.map((content, index) => {
                  return <Job key={index} contetn={content} />
                })}
              </article>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experiences
