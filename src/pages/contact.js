import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'gatsby'
import { contactPageAnimation } from '../animation/animation'
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
      className='overflow-hidden contact-page '
      exit='exit'
      variants={contactPageAnimation}
      initial='hidden'
      animate='show'
    >
      <div className='absolute inset-0 z-0 opacity-30'>
        <svg
          className='h-full w-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <line
              key={i}
              x1={i * 2}
              y1='0'
              x2={i * 2}
              y2='100'
              stroke='#4b4b4b'
              strokeWidth='0.1'
            />
          ))}
        </svg>
      </div>
      <div className='container mx-auto px-4 relative z-10 pb-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-2xl mx-auto'
        >
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center pt-8'>
            Get in Touch
          </h2>
          <p className='text-xl mb-8 text-center text-gray-300 p'>
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-300'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your name'
                className='mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-300'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your email'
                className='mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-300'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='5'
                placeholder='Your message'
                className='mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
              ></textarea>
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300'
                disabled={state.submitting}
              >
                {state.submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
