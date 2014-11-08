// Load required packages
var Payment = require('../models/payment');

// Create endpoint /api/payment for POST
exports.postPayment = function(req, res) {
  // Create a new instance of the Beer model
  var payment = new Payment();

  // Set the payment properties that came from the POST data
  payment.price = req.body.price;
  payment.status = req.body.status;
  payment.userId = req.user._id;

  // Save the beer and check for errors
  payment.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'payment added!', data: payment });
  });
};

// Create endpoint /api/payment for GET
exports.getPayment = function(req, res) {
  // Use the Beer model to find all beer
  Payment.find({ userId: req.user._id }, function(err, payment) {
    if (err)
      res.send(err);

    res.json(payment);
  });
};


// Create endpoint /api/payment for PUT
exports.putPayment = function(req, res) {
  // Use the Beer model to find a specific beer
  Beer.update({ userId: req.user._id}, { status: req.body.status }, function(err, stat, raw) {
    if (err)
      res.send(err);

    res.json({ message: stat + ' updated' });
  });
};

// // Create endpoint /api/beers/:beer_id for DELETE
// exports.deletePayment = function(req, res) {
//   // Use the Beer model to find a specific beer and remove it
//   Beer.remove({ userId: req.user._id }, function(err) {
//     if (err)
//       res.send(err);

//     res.json({ message: 'Beer removed from the locker!' });
//   });
// };