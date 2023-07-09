import {useState} from "react";

export const ToneSelector = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = (tone) => {
        if (inputValue.length > 0) {
            const lastChar = inputValue.charAt(inputValue.length - 1);
            const convertedLastChar = convertToTone(lastChar, tone);
            const newInputValue = inputValue.slice(0, -1) + convertedLastChar;
            setInputValue(newInputValue);
        }
    };

    const convertToTone = (char, tone) => {
        const toneMap = {
            a: ['ā', 'á', 'ǎ', 'à'],
            e: ['ē', 'é', 'ě', 'è'],
            i: ['ī', 'í', 'ǐ', 'ì'],
            o: ['ō', 'ó', 'ǒ', 'ò'],
            u: ['ū', 'ú', 'ǔ', 'ù'],
            ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
            A: ['Ā', 'Á', 'Ǎ', 'À'],
            E: ['Ē', 'É', 'Ě', 'È'],
            I: ['Ī', 'Í', 'Ǐ', 'Ì'],
            O: ['Ō', 'Ó', 'Ǒ', 'Ò'],
            U: ['Ū', 'Ú', 'Ǔ', 'Ù'],
            Ü: ['Ǖ', 'Ǘ', 'Ǚ', 'Ǜ'],
        };

        if (char in toneMap) {
            const toneIndex = parseInt(tone, 10) - 1;
            return toneMap[char][toneIndex];
        } else {
            return char;
        }
    };


    return (<div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Chinese Tone Example</h1>
        <div className="flex items-center mb-4">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="p-2 rounded-md border border-gray-300 mr-2 w-64"
            />
            <div className="flex">
                <button onClick={() => handleButtonClick('1')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded mx-1">Tone 1</button>
                <button onClick={() => handleButtonClick('2')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded mx-1">Tone 2</button>
                <button onClick={() => handleButtonClick('3')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded mx-1">Tone 3</button>
                <button onClick={() => handleButtonClick('4')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded mx-1">Tone 4</button>
            </div>
        </div>
    </div>);
};

