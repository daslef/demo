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

router.post('/token', (req, res, next) => {
    const payload = req.body;
    const token = jwt.sign(
        {
            id: uuid(),
            link: 'https://damp-anchorage-65606.herokuapp.com/api/report/',
            ...payload,
        },
        JWT_SECRET,
        {
            expiresIn: '2h',
        }
    );
    console.log(req.body, token);
    res.json({ token });
});

router.post('/report', (req, res, next) => {
    res.json(req.body);
});

module.exports = {
    router,
};
