// controllers/UserDataController.js
/************
 * This code segment acts as the controller code that accepts all the UserData Service code and parse them as request response format
 * author: Zehao Song
 ************/

const userDataService = require("../services/userdataService");
const {Types} = require("mongoose");

// This is where all the userData controller codes resided
class UserDataController {
    async create(req, res){
        try {
            // grab the required data and convert them to one var and pass into service
            const data = {...req.body, userId: req.body.userId};
            const userData = await userDataService.create(data);
            res.status(201).json(userData);
        } catch (error){
            res.status(500).json({message: error.message});
        }
    }

    async retrieveData(req, res) {
        try {
            // Reads in the data from the reqest parameter
            const userId = req.params.userid;
            let start = new Date(req.params.start);
            let end = new Date(req.params.end);
            // console.log(req.params);
            // Validates the user ID, make sure what we received is valid
            if (!Types.ObjectId.isValid(userId)) {
                console.log("Invalid userId");
                return res.status(400).send("Invalid user ID");
            }

            // Ensures date times are in the correct range
            if (start > end) {
                console.log("Start date is greater than end date");
                return res.status(400).send("Start date is greater than end date");
            }

            // extend the end date to include the whole day, this was found during testing when the date actually meant the beginning of the day
            end.setDate(end.getDate() + 1);

            // console.log(userId, start, end);
            // Retrieve the userdata based on the given info after confirmation
            const data = await userDataService.retrieveData(userId, start, end);
            res.status(200).json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({message: err.message});
        }
    }
}

module.exports = new UserDataController();