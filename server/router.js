const path = require('path');

const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('./config');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

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

// router.get('/auth', (req, res) => {
//     if (req.user.id) {
//         res.redirect('/profile');
//     }

//     res.redirect('/api/token');
// });

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');

                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, JWT_SECRET, {
                    expiresIn: '2h',
                });

                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

router.get('/profile', (req, res, next) => {
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token,
    });
});

// router.post('/api/token', (req, res) => {
//     const payload = req.body;
//     const id = uuidv4();
//     const token = jwt.sign({ id, ...payload }, JWT_SECRET, {
//         expiresIn: '2h',
//     });
//     res.json({ id, token });
// });

module.exports = {
    router,
};
