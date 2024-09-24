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
