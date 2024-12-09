import React, { useState } from 'react'
import { urlFor } from "../client.js";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";


const Project = ({ index, title, desc, images, featured }) => {
    const mainClass = 'bg-white border-cOne rounded-lg drop-shadow-2xl m-2'
    const [toggle, setToggle] = useState(false)

    
    const handleToggle = () => {
        setToggle(!toggle);
    } 

  return (
    <div className={toggle ? mainClass + ' p-4 col-span-3' : mainClass + ' m-4'}>
        <div className={toggle ? 'md:flex' : ''}>
            <div className={toggle ? 'md:w-1/2 drop-shadow-xl mb-4' : 'drop-shadow-xl'}>
                <img src={urlFor(featured)} alt={title} className={toggle ? 'rounded-none' : 'rounded-t-lg'} />
            </div>
            <div className={toggle ? 'md:w-1/2 m-2' : 'm-2'}>
                <div className={toggle ? 'flex justify-between items-start pb-4' : 'flex justify-between items-center py-4'}>
                    <div className='flex justify-center text-4xl md:text-5xl text-cSix title'>
                        <h1> { title } </h1>
                    </div>
                    <div className='w-fit hover:cursor-pointer' onClick={handleToggle}>
                        {toggle ? <AiOutlineCloseCircle color='0078FF' size={50} /> : <AiOutlinePlusCircle color='0078FF' size={50} /> }
                    </div>
                </div>
                <div className={toggle ? 'flex justify-left text-lg md:text-xl text-cFive' : 'hidden'}>
                    <h1> { desc } </h1>
                </div>
            </div>
        </div>
        
        <div className={toggle ? 'md:columns-3 md:gap-3 md:w-full md:mx-auto space-y-3' : 'hidden'}>
            {images.map((image) => 
                <div className='break-inside-avoid'>
                    <img src={urlFor(image)} alt={image} className='drop-shadow-lg' />
                </div>
            )}
        </div>
    </div>
  )
}

export default Project