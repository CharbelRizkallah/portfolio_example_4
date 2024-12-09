import React from 'react';
import { urlFor } from '../client';

const About = ({ profile }) => {
  return (
    <div id='about' className='md:flex bg-white drop-shadow-2xl rounded-lg mx-4 mt-16 p-2 md:p-8 md:mx-24'>

        <div className='m-2 md:flex md:w-1/2'>
            <div className='m-2 md:w-1/2'>
                <img src={urlFor(profile.picture)} alt={profile.name} 
                className='w-48 drop-shadow-xl rounded-lg' />
            </div>

            <div className='m-2 md:w-1/2'>
                <div className='my-4 flex items-center'>
                    <h1 className='text-2xl text-black text-bold mr-2'>Name: </h1>
                    <h1 className='text-xl text-cSix text-bold'>{profile.name}</h1>
                </div>
                <div className='my-4 flex items-center'>
                    <h1 className='text-2xl text-black text-bold mr-2'>Profession: </h1>
                    <h1 className='text-xl text-cSix text-bold'>{profile.profession}</h1>
                </div>
                <div className='my-4 flex items-center'>
                    <h1 className='text-2xl text-black text-bold mr-2'>Email: </h1>
                    <h1 className='text-xl text-cSix text-bold'>{profile.email}</h1>
                </div>
                <div className='my-4 flex items-center'>
                    <h1 className='text-2xl text-black text-bold mr-2'>Phone: </h1>
                    <h1 className='text-lg text-cSix text-bold'>{profile.phone}</h1>
                </div>
            </div>
        </div>

        <div className='mt-6 m-2 md:w-1/2'>
            <div className='mb-6'>
                <h1 className='text-4xl text-bold underline underline-offset-8 decoration-cOne'>About me</h1>
            </div>
            <div>
                <p className='text-cFive text-xl'>{profile.about}</p>
            </div>
        </div>
    </div>
  )
}

export default About