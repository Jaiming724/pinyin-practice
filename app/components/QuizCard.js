'use client'
import React, {useEffect, useRef, useState} from 'react';
import FlashCard from "@/app/components/FlashCard";
import {getAudioLink, getRandomQuestion} from "../util/AudioService"
import {ToneSelector} from "@/app/components/ToneSelector";
import AnswerTracker from "@/app/components/AnswerTracker";

function QuizCard({group}) {


    const [showNextQuestion, setNextQuestion] = useState(false);
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [id, setID] = useState();
    const correctRef = useRef(0);
    const wrongRef = useRef(0);

    function getNextQuestion() {
        let data = (getRandomQuestion(group))
        setQuestion(data["hanzi"])
        setAnswer(data["pinyin"])
        setID(data["id"])
        setNextQuestion(false)
    }

    useEffect(() => {
        let data = (getRandomQuestion(group))
        setQuestion(data["hanzi"])
        setAnswer(data["pinyin"])
        setID(data["id"])
        setNextQuestion(false)
    }, [])

    return (<div className="flex flex-col mx-auto">

        <FlashCard q={question}
                   a={answer} audio_link={getAudioLink(id)} shouldFlip={showNextQuestion}
                   setShouldFlip={setNextQuestion} getNextQuestion={getNextQuestion} wrongRef={wrongRef}
                   correctRef={correctRef}></FlashCard>
        <AnswerTracker correctRef={correctRef} wrongRef={wrongRef}></AnswerTracker>

    </div>);
}

export default QuizCard;
