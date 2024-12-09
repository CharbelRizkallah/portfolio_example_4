import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div id='experience' className='p-2 mt-16'>
      <div className='flex justify-center mb-16'>
        <h1 className='text-4xl md:text-6xl text-bold underline underline-offset-8 decoration-cOne'>Work Experience</h1>
      </div>
      <div className='md:grid grid-cols-3 md:mx-24'>
        {experience?.map((exp, index) => 
        <div key={index} className=' m-4 p-2 min-h-[200px]'>
          <div className='flex flex-col items-center justify-center bg-cOne rounded-t-lg drop-shadow-2xl min-h-[150px] '>
            <h1 className='text-lg md:text-xl text-white text-semibold'>{exp.start_date} - {exp.end_date}</h1>
            <h1 className='text-2xl md:text-3xl text-bold text-white'>{exp.company}</h1>
          </div>
          <div className='flex flex-col items-start bg-white rounded-b-lg drop-shadow-2xl min-h-[300px] '>
            <h1 className='text-3xl md:text-3xl text-bold text-cSix m-2'>{exp.position}</h1>
            <h1 className='text-lg md:text-xl text-cFour m-2'>{exp.shortdesc}</h1>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Experience