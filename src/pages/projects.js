import React from 'react'
import { graphql } from 'gatsby'
import { Project, Title } from '../components'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation/animation'
const projects = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  return (
    <>
      <motion.section
        exit='exit'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        className='projects-page'
      >
        <section className='section projects'>
          <Title title='All Projects' />
          <div className='section-center projects-center'>
            {projects.map((project, index) => {
              return <Project key={index} {...project} index={index} />
            })}
          </div>
        </section>
      </motion.section>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        github
        title
        url
        stack {
          stack
        }
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      totalCount
    }
  }
`
export default projects
