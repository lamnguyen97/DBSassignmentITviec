import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Apply extends Component {

  render() {
  
    return (
     <div className="Apply container">
     <h1>Web Developer (Java/ Javascript/ JQuery) at Toshiba Software Development (Viet Nam) Co, Ltd </h1>
     <form action="" method="POST" role="form">
      
     
       <div className="form-group">
         <label for="">Your Name</label>
         <input type="text" className="form-control" id="" placeholder="Your Name here"/>
       </div>
       <div className="form-group">
         <label for="">Your CV</label>
         <input type="text" className="form-control" id="" placeholder="Your CV here"/>
       </div>
       
     
       <button type="submit" class="btn btn-danger">Apply Now</button>
     </form>
     </div>
         );
  }
}

export default Apply;
