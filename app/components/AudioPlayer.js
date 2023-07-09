'use client'
import {useEffect, useRef} from 'react';
import {PlayIcon} from "@heroicons/react/24/solid";

export default function AudioPlayer({audio_link}) {
    const audioRef = useRef();

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play()
        } else {
            console.log("Error has Occurred")
        }
    }
    useEffect(() => {
        play();
    })
    return (
        <div>
            <a onClick={play}>
                <PlayIcon className="h-6 w-6 hover:cursor-pointer" aria-hidden="true"></PlayIcon>
            </a>
            <audio ref={audioRef} src={audio_link}/>
        </div>
    )
}
