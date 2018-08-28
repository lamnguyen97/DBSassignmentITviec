import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Jobitem from './Jobitem'
import request from 'superagent';
class Alljobs extends Component {
  constructor(props){
    super(props);
    this.state={
      jobs:[
       
      ]
    }
  }
  componentDidMount(){
    request
    .get('/job')
    .end((err,res)=>{
      if(err) throw (err);
      var job = res.body;
      for (let i=0; i<job.length;i++){
        var arr=job[i].skills.split(',');
        job[i].skills = arr;

      }
      
      this.setState({jobs:job});
    })
  }
  render() {
   var elms = this.state.jobs.map((value,key)=>{
    
    var arrSkill=[];
    for (let i=0;i<value.skills.length;i++){
         arrSkill.push(<span>{value.skills[i]}</span>);
    }
    return(
      /*<Link to="single-job">
       <div>
           <div className="row jobitem">
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <img className ="logo" src ={value.logo}/>
             </div>
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                <div className="desc">
                <h2>{value.title}</h2>
                <p> <i className="fa fa-dollar"></i>   Signin to view</p>
                   <ul>
                     {arrDes}
                  
                   </ul>
                </div>   
                   <div className="skill">
                  {arrSkill}
                  </div>
             </div>
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 location">
               <h4><i className="fa fa-map-marker"></i> {"  "+value.location}</h4>
             </div>
           </div>
           
       

        </div>
        </Link>*/
        <Jobitem id={value.Job_ID} logo={value.DN_logo} title ={value.Job_name}  skill ={arrSkill} loca={value.Job_location}/>
    )

   })
    return (
     <div className="Alljobs container">
     <h1>1,506 Jobs in Viet Nam for you</h1>
     {elms}   
     </div>
         );
  }
}

export default Alljobs;
