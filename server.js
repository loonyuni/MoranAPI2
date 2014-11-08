// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var paymentController = require('./controllers/payment');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://heroku_app31419059:s8victqv8lk1umkjer2kuuqqk@ds051960.mongolab.com:51960/heroku_app31419059');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/payment')
  .post(authController.isAuthenticated, paymentController.postPayment)
  .get(authController.isAuthenticated, paymentController.getPayment)
  .put(authController.isAuthenticated, paymentController.putPayment);
  
// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers)
  .delete(userController.deleteUser);
// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert payments on port ' + port);