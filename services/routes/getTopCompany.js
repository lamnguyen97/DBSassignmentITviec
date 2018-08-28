var express= require('express');
const controller = require('../API/getTop');
var getTopRoute = express.Router();

getTopRoute.route('/').get(controller.getTop);
getTopRoute.route('/getNumJob').get(controller.getNumJob);
module.exports=getTopRoute;
