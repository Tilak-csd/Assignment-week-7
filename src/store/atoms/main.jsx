
import { useEffect } from 'react'
import { atom, selector } from 'recoil' 
export const NumWords = atom({
    key : "NumWords",
    default : 0
})

export const phonenumber = atom({
    key : "phonenumber",
    default : null
})

export const OTPAtom = atom({
    key : "OTPAtom",
    default : null
})
   