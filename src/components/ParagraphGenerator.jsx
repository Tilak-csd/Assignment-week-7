import React, { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { NumWords } from '../store/atoms/main'

export default function ParagraphGenerator() {
    
    return (
        <div>
            <RecoilRoot>
                <Input />
            </RecoilRoot>
        </div>
    )
}

function Input() {
    const setWords = useSetRecoilState(NumWords)
    const word = useRecoilValue(NumWords)
    console.log(word);
    return <div>
        <p>Para Generator</p>
        <input type="number" onChange={(e) => setWords(e.target.value)} placeholder='Enter the Number of words.' />
        <button >Generate</button>
    </div>
}