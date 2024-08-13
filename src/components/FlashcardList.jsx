import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = () => {
  const [flashcard, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/flashcard')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched flashcards:', data); 
        setFlashcards(data);
      })
      .catch((error) => {
        console.error('Error fetching flashcards:', error);
      });
  }, []);

  if (flashcard.length === 0) return <p className="text-gray-400 text-xl mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-baseline justify-start mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6 pb-20 max-w-lg  relative">
        <Flashcard 
          question={flashcard[currentIndex].question} 
          answer={flashcard[currentIndex].answer} 
        />
        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
          <button 
            onClick={() => setCurrentIndex((currentIndex - 1 + flashcard.length) % flashcard.length)} 
            className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentIndex((currentIndex + 1) % flashcard.length)} 
            className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardList;
