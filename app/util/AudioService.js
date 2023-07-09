import first_audio from "./first_audio.json"
import data from "./data.json"

export function getAudioLink(id, group) {
    return first_audio[id]
}

export function getRandomQuestion(group) {
    let l = data[group].length
    return data[group][Math.floor(Math.random() * l)]
}
