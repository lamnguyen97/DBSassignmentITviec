var express= require('express');
const controller = require('../API/company');
var getCompany = express.Router();

getCompany.route('/').get(controller.getAllCompanies);
getCompany.route('/getRating/:id').get(controller.getRating);
getCompany.route('/getNumStar/:id').get(controller.getNumStar);
getCompany.route('/:id').get(controller.getSingleCompany);
getCompany.route('/getJob/:id').get(controller.getJobCompany);
getCompany.route('/')
module.exports=getCompany;