// services/UserService.js
/************
 * This code segment creates service functions that perform different tasks on the MongoDB for user collections
 * author: Zehao Song
 ************/
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Service functions are included here
class UserService {
    // createUser, takes given fields and create a new User object, which is the saved using the save() function
    async createUser(username, password, firstname, lastname, email, address) {
        // Try to find a user with the submitted username
        const existingUser = await User.findOne({ username });
        // if we found one, we need to tell the user that this username is already registered
        if(existingUser) {
            // If a user is found, then the username is already taken
            throw new Error('Username is already taken');
        }

        // Create a new user if the username doesn't exist
        const user = new User({
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address
        });

        // Save the user to the database
        return await user.save();
    }

    // signIn, takes a username and password and perform match within the DB, if success returns the user information for
    // displaying them on the webpage
    async signIn(username, password) {
        const user = await User.findOne({ username: username });
        // if username exists and password matches return a token
        if (user && bcrypt.compareSync(password, user.password)) {
            const useId = user.id;
            // This log in token inlucdes a payload of the user id and its role, with the signature being given by the .env. It will last 1 day
            const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return {
                useId,
                user: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    address: user.address
                }
            };
        } else {
            throw new Error('Invalid credentials');
        }
    }

    // Updating the user within the user interface
    // Function performs a search within database for a user matching the same username, once found it will update the corresponding info
    async updateUser(username, oldUsername, firstname, lastname, email, address) {
        // Since we are allowing username changing as well, we need to pass in both the older version and the updated one
        let user = await User.findOne({ username: oldUsername });

        if (!user) {
            throw new Error('User does not exist');
        }
        // update the user
        user.username = username;
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.address = address;

        return await user.save();
    }
}

module.exports = new UserService();