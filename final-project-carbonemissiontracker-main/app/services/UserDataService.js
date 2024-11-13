// services/UserDataService.js
/************
 * This code segment creates service functions that perform different tasks on the MongoDB for userData collections
 * author: Zehao Song
 ************/
const UserDataModel = require("../models/UserDataModel");
const mongoose = require("mongoose");

// Services for user data goes here
class UserDataService {
    // handles the creation of user data, very simple, just new and save()
    async create (data){
        const userData = new UserDataModel(data);
        return userData.save();
    };

    // retrieving a specific user's data, required the foreign key of the user id and the start and end date range for the data
    async retrieveData (userId, start, end) {
        return await UserDataModel.find({
            "userId": userId,
            "date": { $gte: start, $lte: end }
        });
    }
}

module.exports = new UserDataService();