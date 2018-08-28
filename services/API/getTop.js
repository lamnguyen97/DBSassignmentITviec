const express = require('express');
var connection = require('../connection');
const async = require('async');
module.exports ={
  getTop: async (req,res)=>{
  	  try{
        await connection.query("SELECT DN_ID,DN_logo,DN_name,location,count(job_ID) as numJob FROM (doanhnghiep INNER JOIN job ON doanhnghiep.DN_ID =job.Job_dn_ID) GROUP BY DN_name",function(err,rows){
        if(err) throw err;
      
        res.json(rows);  
         })
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
    getNumJob: async (req,res)=>{
  	  try{
  	  	const str="SELECT DN_ID,count(job_ID) FROM (doanhnghiep INNER JOIN job ON doanhnghiep.DN_ID =job.Job_dn_ID) GROUP BY DN_name";
        await connection.query(str,function(err,rows){
        if(err) throw err;
       
        res.json(rows);  
         })
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    }
}