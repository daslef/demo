require('dotenv').config();

const {
    PORT,
    JWT_SECRET,
    SESSION_SECRET,
    MONGO_LOGIN,
    MONGO_PASSWORD,
    MONGO_REALM,
    MONGO_DB,
} = process.env;

const MONGO_URL = `mongodb+srv://${MONGO_LOGIN}:${MONGO_PASSWORD}@${MONGO_REALM}/${MONGO_DB}?retryWrites=true&w=majority`;

module.exports = {
    PORT,
    JWT_SECRET,
    MONGO_URL,
    SESSION_SECRET,
};
