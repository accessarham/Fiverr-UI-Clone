import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

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
        
        
    } catch (error) {
        res.status(500).send('Something went wrong!');
    }

};

export const logout = async (req, res) => { }
