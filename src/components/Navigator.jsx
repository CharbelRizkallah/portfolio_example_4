import React, { useState} from 'react'
import HeaderContent from './HeaderContent'
import HeaderContentMenu from './HeaderContentMenu'
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Navigator = () => {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [workToggle, setWorkToggle] = useState(false);

    const menuBtnClass = 'w-12 h-12 drop-shadow-lg rounded-full hover:cursor-pointer z-40 transform duration-500'
    const menuClass = 'w-full md:w-72 h-screen bg-black drop-shadow-lg fixed z-30 transform duration-500'

    const changeColor = () =>{
        if(window.scrollY >= 90) setScroll(true);
        else setScroll(false);
    }

    window.addEventListener('scroll',changeColor);

    const handleToggle = () => {
        if(workToggle)
        setWorkToggle(!workToggle);
        setToggle(!toggle);
    }
    
    const width = window.innerWidth;


  return (
    <>
    {width > 768 ?
    <div className={scroll ? 'sticky flex justify-end items-center top-0 p-2 bg-black/[.90] z-40' : 'sticky flex justify-end items-center top-0 p-2 bg-black z-40'}>
        <div className='flex justify-end items-center'>
            <a href='#home'><HeaderContent title={'HOME'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#about'><HeaderContent title={'ABOUT'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#education'><HeaderContent title={'EDUCATION'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#experience'><HeaderContent title={'EXPERIENCE'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#projects'><HeaderContent title={'PROJECTS'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#contact'><HeaderContent title={'CONTACT'} desc={''} handleToggle={handleToggle} /></a>
        </div>
    </div>
    : 
    <div className={scroll ? 'sticky flex justify-end items-center top-0 p-2 bg-black/[.90] z-40' : 'sticky flex justify-end items-center top-0 p-2 bg-black z-40'}>
        <div className={ menuBtnClass } onClick={handleToggle}>
            <div className='flex justify-center items-center h-full'>
                { toggle ? <IoClose color='ffffff' size={35} /> : <BiMenu color='ffffff' size={35}/> }
            </div>
        </div>

        <div className={ toggle ? menuClass + ' top-0 right-0' : menuClass + ' top-0 -right-full md:-right-96'}>
            <div className='m-5 mt-20 flex flex-col h-3/4 overflow-scroll scrollbar-hide'>
            <a href='#home'><HeaderContentMenu title={'HOME'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#about'><HeaderContentMenu title={'ABOUT'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#education'><HeaderContentMenu title={'EDUCATION'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#experience'><HeaderContentMenu title={'EXPERIENCE'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#projects'><HeaderContentMenu title={'PROJECTS'} desc={''} handleToggle={handleToggle} /></a>
            <a href='#contact'><HeaderContentMenu title={'CONTACT'} desc={''} handleToggle={handleToggle} /></a>
            </div>
        </div>

    </div>

    }
    </>
  )
}

export default Navigator