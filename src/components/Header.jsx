import React, { useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai";



const Header = ({ profile }) => {

    
    const [scroll, setScroll] = useState(false);
    const height = window.innerHeight/2;


    
    const changeColor = () =>{
        if(window.scrollY > height) setScroll(true);
        else setScroll(false);
    }

    window.addEventListener('scroll',changeColor);

  return (
    <div id='home' className='bg-black h-screen'>
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='text-white text-8xl text-bold m-3'>{profile.name}</h1>
            <h1 className='text-white text-4xl text-bold m-2'>{profile.profession}</h1>
        </div>


        <div className={ scroll ? 'w-12 h-12 drop-shadow-lg bg-cOne rounded-full fixed z-20 transform duration-500 bottom-4 right-4' : 'w-12 h-12 drop-shadow-lg bg-cOne/0 rounded-full fixed z-20 transform duration-500 bottom-4 right-4'}>
            {scroll ? <a href='#home'> 
                <div className='flex justify-center items-center h-full'>
                    <AiOutlineArrowUp color='ffffff' size={20} />
                </div>
            </a>: ''}
        </div>
        
    </div>
  )
}

export default Header