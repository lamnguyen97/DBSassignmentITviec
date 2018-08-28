import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import request from 'superagent';
class Singlejob extends Component {
  constructor(props){
    super(props);
    this.state ={
    job:{}
    }
  }

componentDidMount=()=>{
     var id = this.props.params.id;
    console.log(id);
    request
    .get('/job/'+id)
    .end((err,res)=>{
     if(err) throw err;
     var Job = res.body;
    
     this.setState({job:Job});
    })
   
  }

  render() {

var skill = this.state.job.skills;
if(skill){
  console.log("Hello"+skill);
  var arr = skill.split(',');
var arr1 = arr.map((value,key)=>{
  return (
        <div key={key}>{value}</div>

    )
})
}
 

    return (

     <div className="Singlejob container">
     <div className="row">
       <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 Company">
          
           
              <img className ="logo" src={this.state.job.DN_logo}/>
            
            
              <h3 className="title">{this.state.job.DN_name}</h3>
              <div className="info">
              <div><span><i className="fa fa-map-marker"></i> {this.state.job.Job_location}</span> </div>
               <span><i className=" fa fa-cogs"></i>{this.state.job.type}</span>
                <span><i className="fa fa-users"></i>{this.state.job.numStaff}</span>
                <span><i className="fa fa-flag"></i>{this.state.job.DN_country}</span>
                 <div><span><i className="fa fa-calendar"></i> {this.state.job.schedule}</span> </div>
                </div>
            
            
          
       </div>
       <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 Job">
         <h2>{this.state.job.Job_name}</h2>
         <div className="skill">
          {arr1}
          
            
         </div>
         <div className ="salary">
         <div><i className="fa fa-dollar"></i>{this.state.job.Salary}</div>
         <div><i className="fa fa-map-marker"></i>{this.state.job.location}</div>
         </div>
        <Link to="Apply"><button type="submit" className="apply-button btn btn-danger">Apply Now</button></Link>
         <div className="Job-description">
          <h2> The Job </h2>
         {this.state.job.Job_detail}

         </div>
       </div>   

     </div>
     </div>
         );
  }
}

export default Singlejob;
