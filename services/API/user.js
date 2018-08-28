const express = require('express');
var connection = require('../connection');
const jwt    = require('jsonwebtoken');
const config = require('../../config');
const _ = require('lodash');
module.exports ={
    register: function(req, res) {
      const {email, password, name,flag} = req.body;
     // const passwordData = saltHashPassword(password);
    var newUser = new Object();
                
    newUser.email    = email;
    newUser.password = password; // use the generateHash function in our user model
    newUser.name     = name;
    newUser.id = "CAN"+(Math.floor(Math.random() *(99999 - 10000)) + 10000).toString();
    //var insertQuery = "INSERT INTO ungvien (Candidate_ID, Candidate_email, Candidate_pass,Candidate_name) values ('"+newUser.id+"','"+ email +"','"+password +"','"+ newUser.name+"')";
    var insertQuery =`call insertUser('${newUser.id}','${email}','${password}','${name}')`;
    console.log(insertQuery);
    connection.query(insertQuery,function(err,rows){
      if (err) {
          console.log(err);
          res.json({success: false, message: err.errors.email.message});
        }
        else {

          res.json({success: true, message: "Successful registration"});
        }
    }); 
    },
    authenticate: function(req, res) {
    const {email, password,flag} = req.body;
    console.log(email);
    console.log(password);
     var query;
    if (flag==0){
    query=`call findEmailCandidate('${email}')` ;
    }
    if (flag ==1){
    query=`call findEmailCompany('${email}')` ;
    }
    console.log(query);

    connection.query(query,function(err,rows){
          if (err)
        {
          throw err;
          res.json({success: false, message: "Can't load data"});

        }
       else {
        console.log(rows[0][0]);
        if (flag ==1){
        if (!rows.length) {
          console.log("not found");
          res.json({success: false, message: "Authentication failed. User not found"});
        } 
      
       
       else if (!(rows[0][0].DN_pass == password))
          {
           console.log("wrong password");
           
          res.json({success: false,user:rows[0],message: "Authentication failed. Wrong password"});
            
          }
      
      
      else  {  
          const token = jwt.sign(rows[0][0], config.secret, {expiresIn : 24*60*60});
          res.json({success: true, message: 'Enjoy your token!', token: token}); 
          }     
      }
      if (flag ==0 ){
          if (!rows.length) {
          console.log("not found");
          res.json({success: false, message: "Authentication failed. User not found"});
        } 
      
       
       else if (!(rows[0][0].Candidate_pass == password))
          {
           console.log("wrong password");
           
          res.json({success: false,user:rows[0],message: "Authentication failed. Wrong password"});
            
          }
      
      
      else  {  
          const token = jwt.sign(rows[0][0], config.secret, {expiresIn : 24*60*60});
          res.json({success: true, message: 'Enjoy your token!', token: token}); 
          } 
      }
    }
    });



 
  } ,
  validate: function(req, res) {
    
     /* User.findOne({_id: req.decoded._id, status: {$ne: 3}}).populate('_likes _avatar').exec(function (err, user) {
      if (err) {
        res.json({success: false, message: "Can't load data"});
        throw err;
      }
      else if (!user) {
        res.json({success: false, message: "Can't find user"});
      }
      else {
        user = user.toObject();
        delete user.passwordHash;
        delete user.salt;
        res.json({success: true, user});
      }
    })*/
    const flag =req.headers['flag'];
    if (flag==0){
    var query =`call findCandidateID('${req.decoded.Candidate_ID}')` ;
    }
    if (flag ==1){
    var query =`call findCompanyID('${req.decoded.DN_ID}')` ;
    }
    console.log(query);
     connection.query(query,function(err,rows){
      if (err)
        {
          throw err;
          res.json({success: false, message: "Can't load data"});

        }
        else{
      if (!rows.length) {
          res.json({success: false, message: "Can't find user"});
        } 
      
      else  {  
         
          res.json({success: true,user: rows[0][0]}); 
          }     
      }
    });

    },
     addReview: function(req, res) {
  const {rating, review,canid} = req.body;
   console.log(req.params.id);
    var query =`INSERT INTO rating (Rating_DN_ID, Rating_UV_ID,Star,Review) VALUES ('${req.params.id}', '${canid}', ${rating}, '${review}')`;
    console.log(query);
     connection.query(query,function(err,rows){
      if (err)
        {
          throw err;
          res.json({success: false, message: "Can't load data"});

        }
        else{
      if (!rows.length) {
          res.json({success: false, message: "Can't find user"});
        } 
      
      else  {  
         
          res.json({success: true}); 
          }     
      }
    });

    }
  
   
}