// model/UserDataModel.js
/************
 * This code segment acts as the model for the UserData data type, this is a schema that will tell the MongoDB how exactly we want to
 * preserve the information.
 * author: Zehao Song
 ************/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for the user data, this stores the user entered information from the online service, it is connected by a foreign key
// to the User document, allowing users to have their "own" data
const UserDataSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    distance: Number,
    transportation: String,
    recycledwaste: Number,
    household: Number,
    date: Date
});

module.exports = mongoose.model('UserData', UserDataSchema);