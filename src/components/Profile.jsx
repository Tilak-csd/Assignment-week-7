import React from 'react'
import profile from '../assets/images/profile.png'
import BgColorChanged from './BgColorChanged'

export default function Profile() {
    return (
        <div className=''>
            <Background />
            <ProfileImage />
            <Social />
            <BgColorChanged />
        </div>
    )
}

function Background() {
    return <div className='bg-blue-400 w-full h-[10rem]'>
    </div>
}

function ProfileImage() {
    return <div className='w-full flex items-center justify-center mt-[-6rem] flex-col'>
        <img src={profile} alt="" className='rounded-[50%] w-[12rem]' />
        <p className='text-black font-bold text-[1.5rem] mt-[2rem]'>Rita Shrestha <span className='text-gray-400'>32</span></p>
        <p className='text-[1.5rem] font-bold text-gray-400 mt-[1rem]'>London</p>
    </div>
}

function Social() {
    return <div className='border-t-1 mt-[1.5rem] flex justify-around items-center p-[1rem]'>
        <Followers />
        <Likes />
        <Posts />
    </div>
}

function Followers() {
    return <div>
        <h1 className='text-2xl font-bold'>80K</h1>
        <p className='text-gray-400 font-bold'>Followers</p>
    </div>
}
function Likes() {
    return <div>
        <h1 className='text-2xl font-bold'>803K</h1>
        <p className='text-gray-400 font-bold'>Likes</p>
    </div>
}
function Posts() {
    return <div>
        <h1 className='text-2xl font-bold'>103</h1>
        <p className='text-gray-400 font-bold'>Posts</p>
    </div>
}
