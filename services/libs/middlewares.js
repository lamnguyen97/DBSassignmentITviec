
const jwt    = require('jsonwebtoken');
 

const auth = (req, res, next) => {
 
  try {
    const token = req.headers['x-access-token'];
    if (token) {
     
      // verifies secret and checks exp
      jwt.verify(token,'jsonwebtoken', function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
  
        } else {
          console.log(decoded);
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          
          next();
        }
      });
  
    } else {
     
      // if there is no token
      // return an error
      return res.status(200).send({
          success: false,
          message: 'No token provided.'
      });
  
    }
  } catch (error) {
    return res.status(404).send({success: false})
  }
}
module.exports ={auth};