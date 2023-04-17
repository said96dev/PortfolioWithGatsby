import React from 'react'
import socialLinks from '../constants/social_links'
const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className='footer-links social-links'>
          {socialLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='social-link'
              >
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Said AL-Hendi</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
