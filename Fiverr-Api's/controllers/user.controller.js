import User from '../models/user.model.js';

export const deleteUser = async (req, res) => {

    const user = await User.findById(req.params.id);

    if (req.user.id !== user._id.toString()) {
        return res.status(403).send('You can delete only your own account!');
    }

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send('Your account has been deleted');

}

