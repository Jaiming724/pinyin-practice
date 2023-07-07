'use client'
import React, {useEffect, useState} from 'react';
import AudioPlayer from "@/app/components/AudioPlayer";

const Flashcard = ({q, a}) => {
    const [question, setQuestion] = useState(q);
    const [answer, setAnswer] = useState(a);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState('')
    const [input, setInput] = useState("")
    const checkAnswer = () => {
        setIsFlipped(true);
        if (input === answer) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    };
    const getAnswerClassName = () => {
        if (isCorrect === true) {
            return 'bg-green-200';
        } else if (isCorrect === false) {
            return 'bg-red-200';
        }
        return '';
    }
    // useEffect(() => {
    //     console.log(answer)
    //     setQuestion(question);
    //     setAnswer(answer)
    // }, [])

    return (
        <div className={`border border-black max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-4 ${getAnswerClassName()} focus:outline-none`}>
            <div className="px-6 py-4">
                <div className="flex flex-col items-center">
                    <h1 className="flex items-center font-bold text-xl mb-2 text-center">{isFlipped ? answer : question}</h1>
                    <AudioPlayer className="flex items-center" audio_link="https://res.cloudinary.com/dxc99hkhe/video/upload/v1688767333/aDcDK9r5Br.aac"></AudioPlayer>
                </div>
            </div>
            <div className="px-6 py-4">
                <input type="text" placeholder="Type your answer here" value={input} onChange={(e) => setInput(e.target.value)} className="border border-gray-400 rounded py-2 px-3 mb-2 w-full"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkAnswer}>Flip</button>
            </div>
        </div>);
};

export default Flashcard;
