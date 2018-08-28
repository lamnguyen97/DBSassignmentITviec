// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;
var uniqid = require('uniqid');
var mysql = require('mysql');
var connection = mysql.createConnection({
                  host     : 'localhost',
                  user     : 'root',
                  password : '',
                  database: 'Assignment2'
                });
// load the auth variables


module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
         connection.query("select * from ungvien where Candidate_ID = '"+id+"'",function(err,rows){   
            done(err, rows[0]);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
        passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

         connection.query("SELECT * FROM `ungvien` WHERE `Candidate_email` = '" + email + "'",function(err,rows){
            if (err)
                return done(err);
             if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
            
            // if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            
            // all is well, return successful user
            return done(null, rows[0]);         
        
        });
        


    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        connection.query("select * from ungvien where Candidate_email = '"+email+"'",function(err,rows){
            console.log(rows);
            console.log("above row object");
            if (err)
                return done(err);
             if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                var newUserMysql = new Object();
                
                newUserMysql.email    = email;
                newUserMysql.password = password; // use the generateHash function in our user model
                newUserMysql.name     = req.body.name;
                newUserMysql.id = uniqid();
                var insertQuery = "INSERT INTO ungvien (Candidate_ID, Candidate_email, Candidate_pass,Candidate_name) values ('"+newUserMysql.id+"','"+ email +"','"+password +"','"+ newUserMysql.name+"')";
                console.log(insertQuery);
                connection.query(insertQuery,function(err,rows){
                              
                return done(null, newUserMysql);
                }); 
            }   
        });
    }));

   
};
