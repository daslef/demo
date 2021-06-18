const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserModel = require('./models');

const { JWT_SECRET } = require('./config');

passport.serializeUser(function (data, done) {
    done(null, data);
});

passport.deserializeUser(function (data, done) {
    done(null, data);
});

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.create({ email, password });

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.findOne({ email });
                if (!user)
                    return done(null, false, { message: 'User not found' });

                const validate = await user.isValidPassword(password);

                if (!validate)
                    return done(null, false, { message: 'Wrong Password' });

                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.use(
    'session',
    new JWTstrategy(
        {
            secretOrKey: JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },

        async (payload, done) => {
            try {
                const user = await UserModel.findOne({
                    email: payload.user.email,
                });

                if (!user) return done(null, false);
                console.log(user);
                // user?
                return done(null, { id: user.id, email: user.email });
            } catch (error) {
                return done(error);
            }
        }
    )
);
