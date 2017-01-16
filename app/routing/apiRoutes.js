var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');

var router = express.Router();

// define the get api/friends route
router.get('/api/friends', function(req, res) {
    res.json(friends);
});

// define the post api/friends route
router.post('/api/friends', function(req, res) {
    friends.push(req.body);
});

module.exports = router;
