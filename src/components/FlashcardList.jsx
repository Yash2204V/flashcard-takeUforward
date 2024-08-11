import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch flashcards from the backend API
        fetch('/flashcards')
            .then((res) => res.json())
            .then((data) => setFlashcards(data));
    }, []);

    const nextFlashcard = () => {
        setCurrentIndex((currentIndex + 1) % flashcards.length);
    };

    const prevFlashcard = () => {
        setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
    };

    if (flashcards.length === 0) return <p>Loading...</p>;

    return (
        <div>
            <Flashcard
                question={flashcards[currentIndex].question}
                answer={flashcards[currentIndex].answer}
            />
            <div className="navigation">
                <button onClick={prevFlashcard}>Previous</button>
                <button onClick={nextFlashcard}>Next</button>
            </div>
        </div>
    );
};

export default FlashcardList;
