import createError from '../utils/createError.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {

    const token = req.cookies.accessToken;
    if (!token) return next(createError(401, 'You must be logged in!'));

    jwt.verify(token, process.env.PRIVATE_KEY, async (err, payload) => {
        if (err) return next(createError(403, 'Token is invalid!'));

        req.userId = payload.Id;
        req.isSeller = payload.isSeller;
    });

    next();
};