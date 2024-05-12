'use client'
import React, {useEffect, useRef, useState} from 'react';
import FlashCard from "@/app/components/FlashCard";
import {getAudioLink, getRandomQuestion} from "../util/AudioService"
import {ToneSelector} from "@/app/components/ToneSelector";
import AnswerTracker from "@/app/components/AnswerTracker";

function QuizCard({group}) {


    const [showNextQuestion, setNextQuestion] = useState(false);
    const [question, setQuestion] = useState('');
    const correctRef = useRef(0);
    const wrongRef = useRef(0);

    function getNextQuestion() {
        let data = (getRandomQuestion(group))
        setQuestion(data)
        setNextQuestion(false)
    }

    useEffect(() => {
        getNextQuestion()
    }, [])

    return (<div className="flex flex-col mx-auto">

        <FlashCard q={question}
                   shouldFlip={showNextQuestion}
                   setShouldFlip={setNextQuestion} getNextQuestion={getNextQuestion} wrongRef={wrongRef}
                   correctRef={correctRef}
                   group={group}
        ></FlashCard>
        <AnswerTracker correctRef={correctRef} wrongRef={wrongRef}></AnswerTracker>

    </div>);
}

export default QuizCard;
