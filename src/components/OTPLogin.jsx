import React from 'react'

export default function OTPLogin() {
    return (
        <div className='w-full flex justify-center items-center h-[100vh]'>
            <Card />
        </div>
    )
}

function Card() {
    return <div className="w-[25%] rounded-2xl 
  bg-[linear-gradient(315deg,#d9d9d9,#f8f8f8)]
  shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]
  p-6 text-center flex justify-center items-center flex-col gap-2">
        <h1 className='text-3xl font-medium'>Login Via OTP</h1>
        <input type="tel" placeholder='Phone Number' className='mt-5 border-[1px] border-black rounded-[4px] px-7 py-2 w-[75%]' />
        <button className='border-[1px] border-black rounded-[4px] px-7 py-2 cursor-pointer hover:bg-black hover:text-white'>Send OTP</button>

    </div>
}
