async function fetchAudio() {
    const res = await fetch("http://localhost:3000/api/")
    return res.json()
}

import React from 'react';

async function Audio(props) {
    const audios = await fetchAudio();
    console.log(audios["aDcDK9r5Br"])
    return (
        <div>{audios["aDcDK9r5Br"]}
        </div>
    );
}

export default Audio;
