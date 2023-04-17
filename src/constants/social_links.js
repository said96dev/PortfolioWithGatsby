import React from 'react'
import { FaGithubSquare, FaLinkedin, FaDev } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: 'https://github.com/said96dev',
  },
  {
    id: 2,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/said-al-hendi-410810208/',
  },
  {
    id: 3,
    icon: <FaDev className='social-icon'></FaDev>,
    url: 'https://dev.to/said96dev',
  },
]

export default data
