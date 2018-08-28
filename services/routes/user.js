var express= require('express');
const controller = require('../API/user');
var user = express.Router();
const middlewares = require('../libs/middlewares');
user.route('/register').post(controller.register);
user.route('/authenticate').post(controller.authenticate);
user.route('/validate').all(middlewares.auth).get(controller.validate);
user.route('/review/:id').post(controller.addReview);
module.exports=user;