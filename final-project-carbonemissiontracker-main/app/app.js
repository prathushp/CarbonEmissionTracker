/************
 * App.js, initializing all
 * author: Zehao Song
 ************/
const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
const initializeRoutes = require("./routers/index.js");

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    console.log(process.env.MONGO_CONNECTION);
    mongoose.connect(process.env.MONGO_CONNECTION)
        .then(() => console.log('Database connection successful'))
        .catch(err => console.error('Database connection error', err));
    initializeRoutes(app);
}

module.exports = initialize;