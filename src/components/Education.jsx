import React from 'react';
import EducationElement from './EducationElement';

const Education = ({education}) => {
  // 0078FF


  return (
    <div id='education' className='p-2 mt-16'>
      <div className='flex justify-center mb-16'>
        <h1 className='text-4xl md:text-6xl text-bold underline underline-offset-8 decoration-cOne'>Education</h1>
      </div>
      <div className='md:grid grid-cols-3 md:mx-24'>
        {education?.map((exp, index) => 
          <EducationElement exp={exp} key={index} />
        )}
      </div>
    </div>
  )
}

export default Education