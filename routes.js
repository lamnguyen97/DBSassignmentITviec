module.exports = function(app, passport) {
           
        
        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
       
        // process the signup form
        app.get('/SignUp', function(req, res) {
        console.log("abcdefgđ");
        res.send({ message: req.flash('signupMessage') });
        res.json({success: true, message: "Successful registration"});
        });
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/SignUp', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));



}
