import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {

    try {
        const hashPassword = bcrypt.hashSync(req.body.password, 7);

        const newUser = new User({
            ...req.body,
            password: hashPassword,
        });

        await newUser.save();
        res.status(201).send("New user created.");

    } catch (error) {
        res.status(500).send('Something went wrong!');
    }
}

export const login = async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).send('User not found!');

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(404).send('Username or password mismatch!');

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        },
            process.env.PRIVATE_KEY
        );

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(info);

    } catch (error) {
        res.status(500).send('Username or Password is incorrect.');
    }

};

export const logout = async (req, res) => { }
