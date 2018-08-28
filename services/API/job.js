const express = require('express');
var connection = require('../connection');
const async = require('async');
module.exports ={
  getAllJobs: async (req,res)=>{
  	  try{
        const str="select Job_ID, Job_name, Job_location, Job_detail,skills,DN_logo from (job inner join doanhnghiep on job.Job_dn_ID =doanhnghiep.DN_ID)";
        await connection.query(str,function(err,rows){
        if(err) throw err;
      
        res.json(rows);  
         })
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
    getSingleJob: async (req,res)=>{
      try{
        const str="select * from (job inner join doanhnghiep on job.Job_dn_ID =doanhnghiep.DN_ID) where Job_ID='"+req.params.id+"'";
        console.log(str);
        await connection.query(str,function(err,rows){
        if(err) throw err;
      
        res.json(rows[0]);  
         })         
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
    
    deleteJob: async (req,res)=>{
      try{
        const str =`call deleteJob('${req.params.id}')`;
        //const str="delete from Job where Job_ID='"+req.params.id+"'";
        console.log(str);
        await connection.query(str,function(err,rows){
        if(err) throw err;
      
        res.json({success:true});  
         })         
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
    postJob: async (req,res)=>{
      try{
        const { name,detail,skills,location,schedule,salary,companyID} = req.body;

        //(`Job_ID`, `Job_detail`, `Job_name`, `Job_location`, `Job_dn_ID`, `skills`, `schedule`, `Salary`)
        var jobid = "JOB"+(Math.floor(Math.random() *(99999 - 10000)) + 10000).toString();
        const str=`call postJob('${jobid}','${detail}','${name}','${location}','${companyID}','${skills}','${schedule}',${salary})`;
        console.log(str);
        await connection.query(str,function(err,rows){
        if(err) throw err;
      
        res.json({success:true});  
         })         
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
    getNumJob: async (req,res)=>{
      try{
        

       
        const str="select count(*) as numJob from job";
        console.log(str);
        await connection.query(str,function(err,rows){
        if(err) throw err;
        console.log(rows[0].numJob);
        res.json({success:true,num:rows[0].numJob});  
         })         
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
  
}