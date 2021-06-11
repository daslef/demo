const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./router');

const { PORT, MONGO_URL } = require('./config');

mongoose.connect(MONGO_URL, { useMongoClient: true });
mongoose.connection.on('error', (error) => console.log(error));
mongoose.Promise = global.Promise;

require('./auth');

// const collection = mongoClient.db('demo').collection('users');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('build'));

app.use('/', router);

app.listen(PORT, () => console.log('app running on port ', PORT));
