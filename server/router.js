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
    res.json({});
});

router.post(
    '/login',
    passport.authenticate('login', { session: false }),
    function (req, res, next) {
        res.json(req.user);
    }
);

router.post('/report', (req, res) => {
    res.json(req.body);
});

router.post('/token', (req, res, next) => {
    const token = jwt.sign({ user: req.body }, JWT_SECRET, {
        expiresIn: '2h',
    });

    res.json({ token: token });
});

router.use((req, res, next) => {
    // console.log(req.headers)
    passport.authenticate(
        'session',
        { session: false },
        function (error, payload) {
            if (error || !payload) {
                return next(error);
            }
            req.login(payload, next);
        }
    )(req, res, next);
});

router.post('/login/status', (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json(req.user || null);
});

router.get('/token', (req, res, next) => {
    const user = req.user;
    const token = jwt.sign(
        {
            id: uuid(),
            ...user,
        },
        JWT_SECRET,
        {
            expiresIn: '2h',
        }
    );
    res.json({ token });
});

module.exports = {
    router,
};
