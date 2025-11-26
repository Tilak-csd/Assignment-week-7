import React from 'react'
import { OTPAtom, phonenumber } from '../store/atoms/main'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export default function OTPLogin() {
    return (
        <div className='w-full flex justify-center items-center h-[100vh]'>
            <Card />
        </div>
    )
}

function Card() {
    const [phoneNumber, setPhoneNumber] = useRecoilState(phonenumber)

    const setOTP = useSetRecoilState(OTPAtom)
    function handleOPT() {
        if (!phoneNumber) {
            console.log("Enter a phone number");
            return;
        }
        const newOTP = Math.floor(Math.random() * 10000)
        setOTP(newOTP)
        console.log(` OPT Generated for ${phoneNumber} : ${newOTP}`);
        alert(`Your OTP is ${newOTP}`)
    
    }


    return <div className="w-[25%] rounded-2xl 
  bg-[linear-gradient(315deg,#d9d9d9,#f8f8f8)]
  shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]
  p-6 text-center flex justify-center items-center flex-col gap-2">

        <h1 className='text-3xl font-medium'>Login Via OTP</h1>

        <input type="tel" placeholder='Phone Number' className='mt-5 border-[1px] border-black rounded-[4px] px-7 py-2 w-[75%]'
            onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button className='border-[1px] border-black rounded-[4px] px-7 py-2 cursor-pointer hover:bg-black hover:text-white'
            onClick={handleOPT}
        >Send OTP</button>

    </div>
}
