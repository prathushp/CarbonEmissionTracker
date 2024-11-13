// routers/UserRouter.js
/************
 * This code segment acts as the specific routers for all the user related request
 * author: Zehao Song
 ************/
const express = require('express');
const UserController = require('../controllers/UserController.js');
// All the routing for user goes here
const router = express.Router();

// Currently has 3 routes set up
// 2 post one for log in and one fore register, while a put for updating
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/user-interface', UserController.updateUser);
module.exports = router;