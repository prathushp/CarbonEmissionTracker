// controllers/UserController.js
/************
 * This code segment acts as the controller code that accepts all the User Service code and parse them as request response format
 * author: Zehao Song
 ************/
const UserService = require('../services/UserService');

// This is where all the controller codes are implemented for the user services
class UserController {
    // register, handles the registration process for user
    async register(req, res) {
        try {
            // takes the required information for user creation from the request body
            const user = await UserService.createUser(req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.email, req.body.address);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            // receive the username and password from request body and invoke signin
            const {useId, user} = await UserService.signIn(req.body.username, req.body.password);
            res.status(200).json({user: user,  useId: useId});
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            // received the required info from the request body and pass it into UserService updateUser()
            const user = await UserService.updateUser(req.body.username, req.body.oldUsername, req.body.firstname, req.body.lastname, req.body.email, req.body.address);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new UserController();