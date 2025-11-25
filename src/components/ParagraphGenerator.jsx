
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { NumWords } from '../store/atoms/main'
import { useEffect, useState } from 'react'

function Input({onGenerate}) {
    const setWords = useSetRecoilState(NumWords)
    return <div>
        <p>Para Generator</p>
        <input type="number" onChange={(e) => setWords(Number(e.target.value))} placeholder='Enter the Number of words.' />
        <button onClick={onGenerate} >Generate</button>
    </div>
}

function ParagraphDisplay({generateTriger}) {
    const wordNumber = useRecoilValue(NumWords)
    const [paragraph, setParagraph] = useState([])
    const wordLists = ["hello", "is", "hii", "my", "name", "tilak", "i", "am", "developer"]
    useEffect(() => {
        if (wordNumber > 0){
            let paragraph = []
            for (let i = 0; i < wordNumber; i++) {
                let randomIndex = Math.floor(Math.random() * wordLists.length)
                paragraph.push(wordLists[randomIndex])
            }
            return setParagraph(paragraph)
        }
    }, [generateTriger])

    return <div>
        {paragraph.join(" ")}
    </div>
}

export default function ParagraphGenerator() {
    const [generate, setGenerate] = useState(0)

    return (
        <div>
            <Input onGenerate={() => setGenerate(prev => prev + 1)} />
            <ParagraphDisplay generateTriger={generate}/>

        </div>
    )
}
