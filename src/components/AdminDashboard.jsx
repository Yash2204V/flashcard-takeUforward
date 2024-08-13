import React, { useState } from 'react';

const AdminDashboard = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', { question, answer });

        try {
            const response = await fetch('http://localhost:3000/flashcard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question, answer }),
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                setMessage('Flashcard added successfully! Please refresh the page.');
                setQuestion('');
                setAnswer('');
            } else if (response.status === 404) {
                setMessage('Error: The requested resource was not found.');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('Error submitting flashcard.');
        }
    };

    return (
        <div>
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
            {message && <p className="text-white mt-4">{message}</p>}
        </div>
    );
};

export default AdminDashboard;
