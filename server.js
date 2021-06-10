const { v4: uuidv4 } = require('uuid');
const path = require('path');
const jwt = require('jsonwebtoken');
const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static('codebase'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/api/token', (req, res) => {
    const payload = req.body;
    const token = jwt.sign({ id: uuidv4(), ...payload }, 'secret', {
        expiresIn: '2h',
    });
    res.json(token);
});

app.listen(PORT, () => console.log('app running on port ', PORT));
