import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Error = () => {
  return (
    <>
      <main className='error-page'>
        <div className='error-container'>
          <StaticImage
            className='hero-img'
            src='../assets/images/page_not_found.svg'
            alt='Hero'
            placeholder='blurred'
          />
          <h3>Ohh! Page Not Found</h3>
          <p>We can't seem to find the page you'ro looking for</p>
          <Link to='/' className='btn'>
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
