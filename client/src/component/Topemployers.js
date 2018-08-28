import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import request from 'superagent';
class Topemployers extends Component {
  constructor(props){
  	super(props);
  	this.state ={
  		company: [
        
  		]
  	}
  }
  componentDidMount(){
    console.log("Hello");
    request
    .get('/getTop')
    .end((err,res)=>{
      if(err) throw err;
      var company = res.body;
     
      this.setState({company:company});

    })     
   
  }
  render() {
  
    var element = this.state.company.map((value,key)=>{

    	return (
       <Link to={"/companies/"+ value.DN_ID}>
        <div key ={key} className="well col-xs-4 col-sm-4 col-md-4 col-lg-4">
      		<img src ={value.DN_logo} ></img>
      		<h2>{value.DN_name} </h2>
      		<div className="caption">
      		<span> {value.numJob+ " Jobs"}</span> 
      		<div>{value.location}</div>
      		</div>
      	</div>
        </Link>
    		)
    });
    return (
     <div className="Top container">
      <h1>Top Employers </h1>
      <div className="row">
       {element}
     </div>
     </div>
         );
  }
}

export default Topemployers;
