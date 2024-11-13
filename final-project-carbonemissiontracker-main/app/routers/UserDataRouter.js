/************
 * This code segment acts as the specific routers for all the userdata related request
 * author: Zehao Song
 ************/
const express = require('express');
const UserDataController = require('../controllers/UserDataController.js');

const router = express.Router();

// Currently has 2 functions, a post for creation of data
// a get for retrieving the user data
router.post('/userdata', UserDataController.create);
router.get('/userdata/:userid/:start/:end', UserDataController.retrieveData);

module.exports = router;