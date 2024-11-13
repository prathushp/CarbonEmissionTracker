// models/User.js
/************
 * This code segment acts as the model for the User data type, this is a schema that will tell the MongoDB how exactly we want to
 * preserve the information.
 * author: Zehao Song
 ************/
const mongoose = require('mongoose');
// bcrypt is used to encrypt the user password for security reasons
const bcrypt = require('bcryptjs');

// User Schema: containing username, password and some basic personal information
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        default: 'John',
        required: true
    },
    lastname: {
        type: String,
        default: 'Doe',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

// Pre-save hook for password hashing
// the mongoose pre function sets so right before a save operation is attempted on the user model, this will be executed
UserSchema.pre('save', async function(next) {
    // If the password has not being modified we will go the new middleware
    if (!this.isModified('password')) return next();
    // return a promise, make sure the hash is complete
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

module.exports = mongoose.model('User', UserSchema);