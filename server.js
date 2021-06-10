const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static('codebase'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => console.log('app running on port ', PORT));
