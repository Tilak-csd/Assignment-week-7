import React from 'react'
import profile from '../assets/images/profile.png'
export default function Profile() {
    return (
        <div>
            <Background />
            <ProfileImage />
            
        </div>
    )
}

function Background() {
    return <div className='bg-blue-400 w-full h-[20rem]'>
    </div>
}

function ProfileImage() {
    return <div className='w-full flex items-center justify-center mt-[-6rem] flex-col'>
        <img src={profile} alt="" className='rounded-[50%] w-[15rem]' />
        <p className='text-black font-bold text-[1.5rem] mt-[2rem]'>Rita Shrestha <span className='text-gray-400'>32</span></p>
        <p className='text-[1.5rem] text-gray-400 mt-[1rem]'>London</p>
    </div>
}
