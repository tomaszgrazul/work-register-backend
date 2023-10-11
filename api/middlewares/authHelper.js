const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    // const token = req.body.jwt;
    // console.log('token',token);
    try {
        if(!token) {
            // return res.status(401).json({ message: "Brak dostępu"});
            return res.json({ message: "Brak dostępu"});
        }
        
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
        next();
    } catch {
        // res.status(400).json({ message: "Niewłaściwy token"});
        res.json({ message: "Niewłaściwy token"});
    }
};