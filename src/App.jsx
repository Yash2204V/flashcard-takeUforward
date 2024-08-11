import React from 'react';
import FlashcardList from './components/FlashcardList';
import AdminDashboard from './components/AdminDashboard';

function App() {
    return (
        <div className="App bg-zinc-700 text-white w-full h-screen p-4">
            <h1 className='text-3xl font-bold text-sky-500 p-4 font-mono'>Flashcard App</h1>
            <FlashcardList />
            <AdminDashboard />
        </div>
    );
}

export default App;
