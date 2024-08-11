import React, { useState } from 'react';


const Flashcard = ({ question, answer }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="front">
                <p>{question}</p>
            </div>
            <div className="back">
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Flashcard;
