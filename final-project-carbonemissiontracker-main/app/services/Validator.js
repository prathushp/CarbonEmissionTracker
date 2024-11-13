// services/Validator.js
/************
 * Initially used for validating user credentials, now depreciated
 * author: Zehao Song
 ************/
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// This was initially used for verifying the user session using JWT tokens, idea was scrapped due to technical difficulty encountered,
// and also the change in project client-side code. The user will now instead use other method to be verified
async function validateUser(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader && authorizationHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, "Your JWT Secret Key", async (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = await User.findById(user._id)
        next()
    })
}

module.exports = validateUser;