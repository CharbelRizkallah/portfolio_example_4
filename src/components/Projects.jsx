import React from 'react'
import Project from './Project'

const Projects = ({work}) => {
  return (
    <div id='projects' className='p-2 mt-16'>
        <div className='flex justify-center mb-16'>
            <h1 className='text-4xl md:text-6xl text-bold underline underline-offset-8 decoration-cOne'>Projects</h1>
        </div>
        <div className='md:grid grid-cols-3 md:mx-24'>
            {work?.map((work, index) => 
            <Project index={index} key={work.id} title={work.title} desc={work.desc} images={work.pictures} featured={work.featured_image} />
            )}
        </div>
        
    </div>
  )
}

export default Projects