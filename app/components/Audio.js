import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

async function fetchAudio(id, group) {
    const res = await fetch(process.env.URL+`/api/audio/search?id=${id}&group=${group}`)
    return res.json()
}
import React from 'react';

async function Audio({id, group}) {
    const audios = await fetchAudio(id,group);
    return (
        <div>{audios}
        </div>
    );
}

export default Audio;
