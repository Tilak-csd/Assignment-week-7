import React, { useState } from 'react'
import { OTPAtom, phonenumber, CurrentStatus } from '../store/atoms/main'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

// Rendering the Components and Card based on the currentstatus
export default function OTPLogin() {
    const currentStatusAtom = useRecoilValue(CurrentStatus)
    return (
        <div className='w-full flex justify-center items-center h-[100vh]'>
            {currentStatusAtom == "Phone_Card" && <PhoneCard />}
            {currentStatusAtom == "OTP_Card" && <OTPCard />}
        </div>
    )
}

// Phone Number enter and generating the OTP for that Phone Number.
function PhoneCard() {
    const [phoneNumber, setPhoneNumber] = useRecoilState(phonenumber)
    const setcurrentState = useSetRecoilState(CurrentStatus)
    const setOTP = useSetRecoilState(OTPAtom)

    // Generating the OTP when 'Send OTP' button clicked. 
    function handleOPT() {
        if (!phoneNumber) {
            console.log("Enter a phone number");
            return;
        }
        // create an opt taking random number and return the four digits OTP
        const newOTP = Math.floor(Math.random() * 10000)
        setOTP(newOTP)
        setcurrentState("OTP_Card")
        console.log(` OPT Generated for ${phoneNumber} : ${newOTP}`);
        alert(`Your OTP is ${newOTP}`)
    }


    return <div className="w-[25%] rounded-2xl 
  bg-[linear-gradient(315deg,#d9d9d9,#f8f8f8)]
  shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]
  p-6 text-center flex justify-center items-center flex-col gap-2">
        {/* Title of the Card */}
        <h1 className='text-3xl font-medium'>Login Via OTP</h1>
        {/* Input to enter the Phone Number */}
        <input type="tel" placeholder='Phone Number' className='mt-5 border-[1px] border-black rounded-[4px] px-7 py-2 w-[75%]'
            onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {/* Button to create the OTP and send the OPT through alert */}
        <button className='border-[1px] border-black rounded-[4px] px-7 py-2 cursor-pointer hover:bg-black hover:text-white'
            onClick={handleOPT}
        >Send OTP</button>

    </div>
}

// Question 6 : OTP Number Insert
function OTPCard() {
    const setcurrentState = useSetRecoilState(CurrentStatus)
    return <div className="w-[25%] rounded-2xl 
  bg-[linear-gradient(315deg,#d9d9d9,#f8f8f8)]
  shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]
  p-6 text-center flex justify-center items-center flex-col gap-2">
        <button className='border-black border-1 p-2 rounded-xl absolute top-2 left-2 cursor-pointer'
            onClick={() => {
                setcurrentState("Phone_Card")
            }}
        >Return</button>
    </div>
}