export const verifyToken = (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send('You must be logged in!');

    jwt.verify(token, process.env.PRIVATE_KEY, async (err, payload) => {
        if (err) return res.status(403).send('Token is invalid!');

        req.userId = payload.Id;
        req.isSeller = payload.isSeller;
    });

};