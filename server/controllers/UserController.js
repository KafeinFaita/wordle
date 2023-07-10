const User = require('../models/User');
const MainController = require('./MainController');

class UserController extends MainController {
    constructor(Model) {
        super(Model)
    }
}

module.exports = new UserController(User);
