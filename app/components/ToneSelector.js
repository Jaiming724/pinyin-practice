import {convertToTone} from "@/app/util/ToneHelper";

export const ToneSelector = ({input, setInput, inputRef}) => {

    const handleButtonClick = (tone) => {
        if (input.length > 0) {
            const lastChar = input.charAt(input.length - 1);
            const convertedLastChar = convertToTone(lastChar, tone);
            setInput(input.slice(0, -1) + convertedLastChar);
            inputRef.current.focus()
        }
    };


    return (<div className="container mx-auto ">
        <div className="flex items-center ">
            <div className="flex">
                <button onClick={() => handleButtonClick('1')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-1 px-4 rounded mx-1">Tone 1</button>
                <button onClick={() => handleButtonClick('2')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-1 px-4 rounded mx-1">Tone 2</button>
                <button onClick={() => handleButtonClick('3')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-1 px-4 rounded mx-1">Tone 3</button>
                <button onClick={() => handleButtonClick('4')} className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-1 px-4 rounded mx-1">Tone 4</button>
            </div>
        </div>
    </div>);
};

