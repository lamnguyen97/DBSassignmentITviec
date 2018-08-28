var express= require('express');
const controller = require('../API/job');
var getJob = express.Router();

getJob.route('/').get(controller.getAllJobs);
getJob.route('/:id').get(controller.getSingleJob);
getJob.route('/delete/:id').delete(controller.deleteJob);
getJob.route('/postjob').post(controller.postJob);
getJob.route('/getNum/getNumJob').get(controller.getNumJob);
module.exports=getJob;