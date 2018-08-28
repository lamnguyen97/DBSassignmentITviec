import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Footer extends Component {

  render() {
  
    return (
     <div className="Footer container">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <h3>About Us </h3>
          <i className="fb fa fa-facebook-square"> </i>
          <i className="tw fa fa-twitter-square"> </i>
          
        </div>
         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <h3>Contact </h3>
          <p>Address: Dai Hoc Bach Khoa DHQG</p>
          <p>Phone: 0905.456.345</p>

        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <h3></h3>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Copyright <i className="copyright fa fa-copyright"></i> My Group </p>

        </div>
      </div>
     </div>
         );
  }
}

export default Footer;
