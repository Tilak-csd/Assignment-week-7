import React from 'react'
import background from '../assets/images/background.jpg'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { birthdayStatus, UserName } from '../store/atoms/main'
export default function BirthdayWish() {
    const currentstatus = useRecoilValue(birthdayStatus)
    return (
        <div className=' w-full h-[100vh] flex justify-center items-center'>
            <div className='w-full h-[100vh] blur-md absolute' style={{ backgroundImage: `url(${background})` }}>
            </div>
            {currentstatus === "Input_Card" && <InputRender />}
            {currentstatus === "Card1" && <Card />}

        </div>
    )
}

function InputRender() {
    const [name, setName] = useRecoilState(UserName)
    const setBirthdayStatus = useSetRecoilState(birthdayStatus)
    return <div className='
    z-1 flex justify-center items-center flex-col gap-7 bg-white p-10 px-20 w-[30vw] rounded-2xl opacity-60
    '>
        <h1 className='font-bold text-4xl text-blue-700'>Enter Your Name</h1>
        <input type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name' className='w-full h-10 px-5 outline-0 border-1 rounded-2xl border-blue-700' />
        <button
            onClick={() => {
                if (!name) return
                setBirthdayStatus("Card1")
            }}
            className='cursor-pointer bg-blue-800 text-white py-3 px-10 rounded-2xl font-bold text-xl hover:bg-blue-950'>Done</button>
    </div>
}

function Card() {
    const data = [{
        title : "Happy Birthday,",
        des: "Wishing you a day filled with joy, laughter, and all your favourit things. May this year bring you endless happiness and success. Enjoy your special day!"
    },{
        title  : "Warmest Birthday Wishes,",
        des : "On your special day, I hope you are surrounded by love, positive, and beautiful moments. May the year ahead be full of growth, opportunities, and unforgettable memories. Happy Birthay!"
    },{
        title : "Let's Celebrate You,",
        des : "Another amazing year begins! Keep Shining, keep smiling, and keep chasing your dreams. Wishing you an awesome birthday and an even better year ahead."
    }]

    const name = useRecoilValue(UserName)
    const setBirthdayStatus = useSetRecoilState(birthdayStatus)
    return <div className='
    z-1 flex justify-center items-end flex-col gap-7 bg-white p-10 px-20 w-[41vw] rounded-2xl opacity-60
    '>
        <h1 className='font-bold text-4xl text-violet-600'>Happy Birthday, {name}!✨🎉✨🎁</h1>
        <p className='text-xl text-violet-500 leading-9'>Wishing you a day filled with joy, laughter, and all your favourit things. <br />
            May this year bring you endless happiness and success. <br />
            Enjoy your special day!
        </p>
        <button
            // onClick={ }
            className=' cursor-pointer bg-violet-800 text-white py-3 px-10 rounded-2xl font-bold text-[1rem] hover:bg-violet-950'
        >Next..</button>
    </div>

}