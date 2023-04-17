import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Job = (props) => {
  return (
    <div className='job-desc'>
      <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
      <p>{props.contetn}</p>
    </div>
  )
}

export default Job
