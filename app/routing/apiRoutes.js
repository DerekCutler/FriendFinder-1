var express = require('express');
var path = require('path');

var router = express.Router();

var friends = [];

// define the get api/friends route
router.get('/api/friends', function(req, res) {
    res.json(friends);
});

// define the about route
router.post('/api/friends', function(req, res) {
    friends.push(req.body);
});

module.exports = router;
