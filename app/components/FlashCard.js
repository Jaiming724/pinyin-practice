'use client'
import React, {useEffect, useRef, useState} from 'react';
import AudioPlayer from "@/app/components/AudioPlayer";
import {ToneSelector} from "@/app/components/ToneSelector";
import {convertToTone} from "../util/ToneHelper"

const Flashcard = ({q, a, audio_link, shouldFlip, setShouldFlip, getNextQuestion, correctRef, wrongRef}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null)
    const [input, setInput] = useState('');
    const inputRef = useRef('')
    const submitRef = useRef();
    useEffect(() => {
        inputRef.current.focus()
    })
    const checkAnswer = (event) => {

        if (event.key === 'Enter') {
            const inputValue = event.target.value;

            if (inputValue === a) {
                if (!isFlipped) {
                    correctRef.current = correctRef.current + 1

                }
                setIsCorrect(true)
            } else {
                if (!isFlipped) {
                    wrongRef.current = wrongRef.current + 1
                }
                setIsCorrect(false)
            }
            setShouldFlip(true);
            if (submitRef.current) {
                submitRef.current.focus()
            }
            setIsFlipped(true);

        }
        if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4') {
            event.preventDefault();
            const lastChar = input.charAt(input.length - 1);
            const convertedLastChar = convertToTone(lastChar, event.key);
            setInput(input.slice(0, -1) + convertedLastChar);
        }

    };
    const changeBackground = () => {
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
        setInput('')
    }

    return (
        <div className={`border border-black max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-4 ${changeBackground()} focus:outline-none`}>
            <div className="px-6 py-4">
                <div className="flex flex-col items-center">
                    <h1 className="flex items-center font-bold text-xl mb-2 text-center">{isFlipped ? a : q}</h1>
                    <AudioPlayer className="flex items-center" audio_link={audio_link}></AudioPlayer>
                </div>
            </div>
            <div className="px-6 py-4 flex flex-col">
                <div className="">
                    <input autoFocus={true} type="text" value={input} ref={inputRef} onKeyDown={checkAnswer} onChange={(event) => setInput(event.target.value)} className="border border-gray-400 rounded py-2 px-3 mb-2 w-full"/>
                </div>
                <div className="">
                    <ToneSelector input={input} setInput={setInput} inputRef={inputRef}></ToneSelector>
                </div>
                <div className="my-2 mx-auto">
                    {shouldFlip ?
                        <button ref={submitRef} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeQuestion}>Next Question</button> : <></>}
                </div>
            </div>
        </div>);
};

export default Flashcard;
