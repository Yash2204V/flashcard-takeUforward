const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flashcards_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(express.json());

app.get('/flashcards', (req, res) => {
    const query = 'SELECT * FROM flashcards';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/flashcards', (req, res) => {
    const { question, answer } = req.body;
    const query = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
    db.query(query, [question, answer], (err, result) => {
        if (err) throw err;
        res.send('Flashcard added successfully!');
    });
});

// Define routes for update and delete here

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
