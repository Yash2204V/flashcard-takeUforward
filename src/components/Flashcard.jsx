import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`absolute w-full h-full duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full bg-zinc-800 flex items-center justify-center p-6 rounded-md shadow-lg ${flipped ? 'hidden' : 'block'}`}>
          <p className="text-blue-300 text-xl font-semibold">{question}</p>
        </div>
        <div className={`absolute w-full h-full bg-cyan-700 flex items-center justify-center p-6 rounded-md shadow-lg ${!flipped ? 'hidden' : 'block'} rotate-y-180`}>
          <p className="text-white text-xl font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
