const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const { router } = require('./router');
const path = require('path');

const { PORT, MONGO_URL } = require('./config');

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (error) => console.log(error));

require('./auth');

// const collection = mongoClient.db('demo').collection('users');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/api', router);

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ error: err });
});

app.listen(PORT, () => console.log('app running on port ', PORT));
