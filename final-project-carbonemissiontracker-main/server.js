require('dotenv').config();
const express = require('express');
const initialize = require('./app/app.js');

const app = express();
initialize(app);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT || 3000}`));