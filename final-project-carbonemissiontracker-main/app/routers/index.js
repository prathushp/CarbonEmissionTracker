/************
 * This code segment acts as the general routing area for all the server side routing, it will invoke individual routers that handles different
 * specific request
 * author: Zehao Song
 ************/

const UserRouter = require('../routers/UserRouter');
const UserDataRouter = require('../routers/UserDataRouter');
const EventRouter = require('../Prathush/routes/EventRoutes');
const RegisterRoute = require('../Prathush/routes/registerRoutes');
const SubscribeRouter = require('../Prathush/routes/subscriptionRoutes');

// This is the overall routing handler
module.exports = (app) => {
    // handles all routing for user
    app.use('/users', UserRouter);
    // handles all routing for userdata
    app.use('/users/submit', UserDataRouter);

    // Event related
    app.use('/events', EventRouter);
    app.use('/registration', RegisterRoute);
    app.use('/subscription', SubscribeRouter);
}