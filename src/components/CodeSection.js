import { useTypingEffect } from '../hooks/useTypingEffect'
import React from 'react'

const CodeSection = () => {
  const codeString = `const said = {
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'Building amazing web apps',
  goal: 'Exceed client expectations'
};

// Let's collaborate!
said.createAwesomeProject();`

  const displayedText = useTypingEffect(codeString, 30)

  return (
    <div className='w-full max-w-md bg-[#2b2b2b] rounded-lg shadow-2xl overflow-hidden sr-only md:not-sr-only'>
      <div className='h-2 bg-[#23d997]'></div>
      <div className='p-8'>
        <div className='flex items-center mb-4'>
          <div className='w-2 h-2 rounded-full bg-[#189769] mr-2'></div>
          <div className='w-2 h-2 rounded-full bg-[#1fc388] mr-2'></div>
          <div className='w-2 h-2 rounded-full bg-[#37dfa2]'></div>
        </div>
        <pre className='text-sm text-[#189769] relative'>
          <code>{displayedText}</code>
          <span className='absolute inline-block h-5 ml-1 w-[1px] bg-[#189769] animate-blink'></span>
        </pre>
      </div>
    </div>
  )
}

export default CodeSection
