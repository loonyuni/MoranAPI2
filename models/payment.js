// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var PaymentSchema   = new mongoose.Schema({
  price: String,
  status: String,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Payment', PaymentSchema);