'use client'
import React, {useEffect, useState} from 'react';
import FlashCard from "@/app/components/FlashCard";
import {getAudioLink, getRandomQuestion} from "../util/AudioService"
import {ToneSelector} from "@/app/components/ToneSelector";

function QuizCard(props) {


    const [showNextQuestion, setNextQuestion] = useState(false);
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [id, setID] = useState();

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

            <FlashCard q={question} a={answer} audio_link={getAudioLink(id)} shouldFlip={showNextQuestion} setShouldFlip={setNextQuestion} getNextQuestion={getNextQuestion}></FlashCard>
        </div>
    );
}

export default QuizCard;
