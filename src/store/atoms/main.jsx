
import { useEffect } from 'react'
import { atom, selector } from 'recoil' 
export const NumWords = atom({
    key : "NumWords",
    default : 0
})

export const phonenumber = atom({
    key : "phonenumber",
    default : 0
})

export const OTP = selector({
    key : "OTP",
    value  : ({get}) =>{
        const phoneNumber = get(phonenumber)
        return OTPGenerattion(phoneNumber)
    }
})

function OTPGenerattion(phonenumber){
   return useEffect(()=>{
        const OTPnumber = Math.floor(Math.random * 10000)
        return OTPnumber
    }, [phonenumber])
}