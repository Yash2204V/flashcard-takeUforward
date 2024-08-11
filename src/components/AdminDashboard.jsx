import React, { useState } from 'react';

const AdminDashboard = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the new flashcard to the backend
        fetch('/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question, answer }),
        }).then(() => {
            setQuestion('');
            setAnswer('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='bg-transparent text-white p-3 border border-cyan-300 rounded-md mx-2'
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter question"
                required
            />
            <input className='bg-transparent text-white p-3 border border-cyan-300 rounded-md'
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter answer"
                required
            />
            <button className='bg-sky-500 p-3 rounded-md m-2 text-sm' type="submit">Add Flashcard</button>
        </form>
    );
};

export default AdminDashboard;
