const express = require('express');
const router = express.Router();

const Users = require('./controllers/UserController');

// users
router.post('/users/signup', (req, res) => Users.create(req, res));

module.exports = router;