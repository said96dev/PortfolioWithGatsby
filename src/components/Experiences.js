import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Job from './Job'
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
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                className={index === value ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{duration}</p>
          {content.experience.map((content, index) => {
            return <Job key={index} contetn={content} />
          })}
        </article>
      </div>
    </section>
  )
}

export default Experiences
