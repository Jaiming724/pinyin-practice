'use client'
import React, {useEffect, useRef, useState} from 'react';
import AudioPlayer from "@/app/components/AudioPlayer";
import {ToneSelector} from "@/app/components/ToneSelector";

const Flashcard = ({q, a, audio_link, shouldFlip, setShouldFlip, getNextQuestion}) => {

    // const qRef = useRef(q)
    // const aRef = useRef(a)
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null)
    const checkAnswer = (event) => {
        if (event.key === 'Enter') {
            const inputValue = event.target.value;
            console.log('Input value:', inputValue);

            setIsFlipped(true);
            if (inputValue === a) {
                setIsCorrect(true)
            } else {
                setIsCorrect(false)
            }
            setShouldFlip(true);
        }
    };
    const changeBackground = () => {
        console.log("running")
        if (isCorrect === true) {
            return 'bg-green-200';
        } else if (isCorrect === false) {
            return 'bg-red-200';
        }
        return '';
    }

    const changeQuestion = () => {
        getNextQuestion();
        setIsCorrect(null)
        setIsFlipped(false)
    }

    return (
        <div className={`border border-black max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-4 ${changeBackground()} focus:outline-none`}>
            <div className="px-6 py-4">
                <div className="flex flex-col items-center">
                    <h1 className="flex items-center font-bold text-xl mb-2 text-center">{isFlipped ? a : q}</h1>
                    <AudioPlayer className="flex items-center" audio_link={audio_link}></AudioPlayer>
                </div>
            </div>
            <div className="px-6 py-4">
                <input type="text" onKeyDown={checkAnswer} className="border border-gray-400 rounded py-2 px-3 mb-2 w-full"/>
                {
                    shouldFlip ?
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeQuestion}>Next Question</button> : <></>
                }
            </div>
        </div>);
};

export default Flashcard;
