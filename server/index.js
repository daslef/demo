const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./router');

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
app.use(express.static('build'));

app.use('/', router);

// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(PORT, () => console.log('app running on port ', PORT));