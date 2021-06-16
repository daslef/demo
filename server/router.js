const path = require('path');
const passport = require('passport');

const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const { JWT_SECRET } = require('./config');

const router = require('express').Router();

router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user,
        });
    }
);

router.post('/logout', (req, res) => {
    req.logout();
    // delete req.session.user;
    // res.send({});
});

router.post('/login/status', (req, res) => {
    res.send(req.user || null);
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                console.log(user, err);
                const error = new Error('An error occurred.');
                // res.send(null)
                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) {
                    return next(error);
                }

                const token = jwt.sign({ id: uuid(), user }, JWT_SECRET, {
                    expiresIn: '2h',
                });

                console.log(token);

                return res.json({ token });
            });
        } catch (error) {
            // res.send(null)
            return next(error);
        }
    })(req, res, next);
});

router.get('/data', (req, res, next) => {
    res.json([
        {
            id: 1,
            title: 'Столица Эквадора - это:',
            options: ['Великобритания', 'Малайзия', 'Константинополь', 'Гаага'],
        },
        {
            id: 2,
            title: 'Президент Франции в 1989 году - это',
            options: ['1', '2', '3', '4'],
        },
        {
            id: 3,
            title: 'Площадь Африки составляет:',
            options: ['1', '2', '3', '4'],
        },
        {
            id: 4,
            title: 'Режиссер фильма "Долгая дорога" - ',
            options: ['1', '2', '3', '4'],
        },
        {
            id: 5,
            title: 'Как называют сотрудников правопорядка в Греции?',
            options: ['1', '2', '3'],
        },
    ]);
});

router.post('/token', (req, res, next) => {
    const payload = req.body;
    const token = jwt.sign({ id: uuid(), ...payload }, JWT_SECRET, {
        expiresIn: '2h',
    });
    console.log(req.body, token);
    res.json({ token });
});

router.post('/report', (req, res, next) => {
    res.json('test');
});

module.exports = {
    router,
};
