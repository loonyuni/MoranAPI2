// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Added new user' });
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};


exports.deleteUser = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  User.find({username: req.body.username}, function(err, user) {
    if (err)
      res.send(err);
    User.remove(user)
    res.json({ message: 'Users removed from the Database!' } + user);
  });
};

// exports.deleteUser = function(req, res) {
//   return User.find(req.user._id), function(err, user) {
//     return User.remove(function(err) {
//       if (err)
//         res.send(err);
//       console.log('removed')
//     }); 
// }
// };