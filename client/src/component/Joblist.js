import React, { Component } from 'react';

class Joblist extends Component {

  render() {
  
    return (
     <div className="Joblist container">
     <div className="row">
     	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
     	   <h3>Jobs by Skill</h3>
     	   <p><a>Java</a></p>
     	   <p><a>PHP</a></p>
     	   <p><a>.NET</a></p>
     	</div>
     	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
     		<h3>Jobs by Company</h3>
     	   <p><a>VNG</a></p>
     	   <p><a>Facebook</a></p>
     	   <p><a>Google</a></p>
     	</div>
     	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
     		<h3>Jobs by City</h3>
     	  <p><a>Sai Gon</a></p>
     	   <p><a>Ha Noi</a></p>
     	   <p><a>Da Nang</a></p>

     	</div>
     	
     </div>
      
     </div>
         );
  }
}

export default Joblist;
