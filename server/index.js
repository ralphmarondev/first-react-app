const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'hello.db'
});

connection.connect();

app.use(bodyParser.json());

// API endpoint to handle data insertion
app.post('/api/insert', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, password], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Failed to insert data' });
        } else {
            res.status(200).json({ message: 'Data inserted successfully!' });
        }
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

