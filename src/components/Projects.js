import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Project from './Project'
import { Link } from 'gatsby'
import Title from './Title'
const query = graphql`
  {
    allContentfulProjects(filter: { featured: { eq: true } }) {
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
const Projects = ({ showLink }) => {
  const data = useStaticQuery(query)
  const {
    allContentfulProjects: { nodes: projects },
  } = data
  return (
    <section className='section projects'>
      <Title title='Some Things I’ve Built' />
      <div className='section-center projects-center'>
        {projects.map((project, index) => {
          return <Project key={index} {...project} index={index} />
        })}
      </div>
      {showLink && (
        <Link to='/projects' className='btn center-btn'>
          View All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
