import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const deleteUser = async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (req.user.id !== user._id.toString()) {
        return next(createError(403, 'You can delete only your own account!'));
    }

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send('Your account has been deleted');

}

