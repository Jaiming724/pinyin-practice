import React, {useRef, useState} from 'react';

const AnswerTracker = ({correctRef,wrongRef}) => {

    return (
            <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md mb-4 mx-auto">
                <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mb-1">
                    Correct: <span className="font-bold">{correctRef.current}</span>
                </div>
                <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md">
                    Incorrect: <span className="font-bold">{wrongRef.current}</span>
                </div>
            </div>
    );
};

export default AnswerTracker;
