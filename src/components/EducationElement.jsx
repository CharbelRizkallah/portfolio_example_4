import React, { useState }  from 'react';
import { FaGraduationCap } from "react-icons/fa";

const EducationElement = ({ exp }) => {
    
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className=' m-4 p-2 min-h-[200px]' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className='flex items-center justify-center bg-white rounded-t-lg drop-shadow-2xl px-4 pt-4 pb-2'>
            <div className={isHovering ? 'border-[5px] border-cThree bg-cOne ease-in-out duration-500  p-4 rounded-full' : 'border-[5px] border-cOne bg-white ease-in-out duration-500  p-4 rounded-full'}>
              <FaGraduationCap color={isHovering ? 'ffffff' : '0078FF'} size={60} />
            </div>
        </div>
        <div className='flex flex-col items-center bg-white rounded-b-lg drop-shadow-2xl px-4 pb-4 pt-2'>
            <h1 className='text-3xl md:text-3xl text-bold text-cSix m-2'>{exp.degree}</h1>
            <h1 className='text-2xl md:text-3xl text-bold text-cOne m-2'>{exp.establishment}</h1>
            <h1 className='text-lg md:text-xl text-cFour text-semibold m-2'>{exp.start_date} - {exp.end_date}</h1>
        </div>
    </div>
  )
}

export default EducationElement