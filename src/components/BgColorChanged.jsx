import React, { useState } from 'react'

export default function BgColorChanged() {
    const [colors, setColor] = useState(["green", "red", "blue", "black", "orange"]);
    
  return (
    <div className='flex justify-center items-center absolute bottom-20 w-full gap-10 '>
        {colors.map((color, index)=>{
            if(color === "black" || color === "blue"){

                return <button className='rounded-[10px] py-[.5rem] px-[1rem] w-[5rem] cursor-pointer text-white' style={{background:`${color}`}} key={index} value={color}>{color}</button> 
            }
            return <button className='rounded-[10px] py-[.5rem] px-[1rem] w-[5rem] cursor-pointer' style={{background:`${color}`}} key={index} value={color}>{color}</button>
        })}
    </div>
  )
}
