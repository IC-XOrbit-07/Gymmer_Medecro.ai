const express = require('express');
const mysql = require('mysql');
const cors = require('cors');  
const app = express();
const port = 5500;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mysql'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve static files
app.use(express.static('public'));

// API endpoint to get past chats
app.get('/api/past-chats', (req, res) => {
    const query = 'SELECT * FROM chats'; // Adjust based on your schema
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


app.put('/api/update-chat', (req, res) => {
    // const chatId = req.params.id;
    const userInput = req.body.newValue; // Adjust based on your schema
    console.log(userInput);
    if (!userInput) {
        return res.status(400).json({ error: 'New value is required' });
    }

    // const query = 'UPDATE chats SET columnName = ? WHERE id = ?'; // Adjust columnName and table name based on your schema
    const query = 'INSERT INTO chats (title) VALUES (?)';
    db.query(query, [userInput], (err, result) => {
        if (err) {
            console.error('Error updating chat:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Chat updated successfully', result });
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
