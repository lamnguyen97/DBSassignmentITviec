const express = require('express');
var connection = require('../connection');
const async = require('async');
module.exports ={
  getAllCompanies: async (req,res)=>{
  	  try{
        const str="select * from doanhnghiep";
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
    getSingleCompany: async (req,res)=>{
      try{
         const str="select * from (doanhnghiep inner join job on doanhnghiep.DN_ID=job.Job_dn_ID) where DN_ID='"+req.params.id+"'";
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
    getJobCompany: async (req,res)=>{
      try{
         const str="select * from (job inner join doanhnghiep on job.Job_dn_ID=doanhnghiep.DN_ID) where Job_dn_ID='"+req.params.id+"'";
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
    getRating: (req,res)=>{
      try{
        var id =req.params.id;
        var star;
       
        const str = `call getRating("${id}")`;
     
       
        connection.query(str,function(err,rows){
        if(err) throw err;
        console.log(rows[0]);
        
        res.json(rows[0]);  
         })
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    },
     getNumStar: (req,res)=>{
      try{
        var id =req.params.id;
        var star;
        const count = `call starCount("${id}")`;
     
        console.log(id);
        connection.query(count,function(err,rows){
        if(err) throw err;
        
          star = rows[0][0].AVGStar;
          console.log(typeof(star));
          console.log(star);
           res.json(star);
         })
       
    }
    catch (error) {
      console.log(error);
      res.status(500).send();
    }
    }

  
}