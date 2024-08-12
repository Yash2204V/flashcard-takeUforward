import mysql from "mysql2/promise";
import express from "express";

const app = express();
let db;

async function connectDB() {
    try {
        db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'qwerty@1234',
            database: 'flashcard_db',
        });
        console.log('Connected to the flashcard_db database.');
    } catch (err) {
        console.error('Error connecting to the database:', err.code);
        console.error('Error details:', err);
    }
}

connectDB();

app.use(express.json());


app.post('/flashcard', async (req, res) => {
    const { question, answer } = req.body;
    console.log('Received POST request with data:', { question, answer });

    try {
        const [result] = await db.query('INSERT INTO flashcard (question, answer) VALUES (?, ?)', [question, answer]);
        console.log('Flashcard added successfully!');
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error inserting flashcard:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
