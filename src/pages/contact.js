import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'gatsby'
import { contactPageAnimation, photoAnim } from '../animation/animation'
const Contact = () => {
  const [state, handleSubmit] = useForm('mayzdkpl')
  if (state.succeeded) {
    return (
      <main className='succeeded-page'>
        <div className='succeeded-container'>
          <h3>Thanks for taking the time to reach out</h3>
          <Link to='/' className='btn'>
            back home
          </Link>
        </div>
      </main>
    )
  }
  return (
    <motion.section
      className='contact-page'
      exit='exit'
      variants={contactPageAnimation}
      initial='hidden'
      animate='show'
    >
      <motion.article
        className='contact-form'
        exit='exit'
        variants={photoAnim}
        initial='hidden'
        animate='show'
      >
        <div className='contact-header'>
          <h3>
            {' '}
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </h3>
          <br />
          <h4>How can I help you?</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='name'
              className='form-control'
            />
            <input
              type='email'
              name='email'
              placeholder='email'
              className='form-control'
            />
            <textarea
              name='message'
              rows='5'
              placeholder='message'
              className='form-control'
            ></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <div className='sub-div'>
            <button type='submit' className='submit-btn btn center-btn'>
              submit here
            </button>
          </div>
        </form>
      </motion.article>
    </motion.section>
  )
}

export default Contact
