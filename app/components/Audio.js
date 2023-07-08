import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {getAudioLink} from "../util/AudioService"

function fetchAudio(id, group) {

    return getAudioLink(id, group)
}

import React from 'react';

function Audio({id, group}) {
    const audios = fetchAudio(id, group);
    return (
        <div>{audios}
        </div>
    );
}

export default Audio;
