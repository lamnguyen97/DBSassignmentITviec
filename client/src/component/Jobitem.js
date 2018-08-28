import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import request from 'superagent';
class Jobitem extends Component {
  constructor(props){
  	super(props);
  	this.state = {

    }
  }
 
  render() {
    
    return (
         <div className="job-item">
         <Link to={"/alljobs/"+this.props.id}>
          <div>
           <div className="row jobitem">
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <img className ="logo" src ={this.props.logo}/>
             </div>
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                <div className="desc">
                <h2>{this.props.title}</h2>
                <p> <i className="fa fa-dollar"></i>  Signin to view</p>
                  
                </div>   
                   <div className="skill">
                  {this.props.skill}
                  </div>
             </div>
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 location">
               
               <h4><i className="fa fa-map-marker"></i> {"  "+this.props.loca}</h4>
             </div>
           </div>
           
       

        </div>
        </Link>
         </div>
          
         );
  }
}

export default Jobitem;
