'use client'
import React, {useEffect, useRef, useState} from 'react';
import FlashCard from "@/app/components/FlashCard";
import {getAudioLink, getRandomQuestion} from "../util/AudioService"
import {ToneSelector} from "@/app/components/ToneSelector";

function QuizCard(props) {


    const [showNextQuestion, setNextQuestion] = useState(false);
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [id, setID] = useState();
    const correctRef = useRef(0);
    const wrongRef = useRef(0);

    function getNextQuestion() {
        let data = (getRandomQuestion("first"))
        setQuestion(data["hanzi"])
        setAnswer(data["pinyin"])
        setID(data["id"])
        setNextQuestion(false)
    }

    useEffect(() => {
        let data = (getRandomQuestion("first"))
        setQuestion(data["hanzi"])
        setAnswer(data["pinyin"])
        setID(data["id"])
        setNextQuestion(false)
    }, [])

    return (
        <div>
            <div className="flex flex-col">
                <h1>Correct: {correctRef.current}</h1>
                <h1>Wrong: {wrongRef.current}</h1>

            </div>
            <FlashCard q={question} a={answer} audio_link={getAudioLink(id)} shouldFlip={showNextQuestion} setShouldFlip={setNextQuestion} getNextQuestion={getNextQuestion} wrongRef={wrongRef} correctRef={correctRef}></FlashCard>
        </div>
    );
}

export default QuizCard;
