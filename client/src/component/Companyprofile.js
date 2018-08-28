import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Jobitem from './Jobitem'
import request from 'superagent';
import StarRatingComponent from 'react-star-rating-component';
import Rating from 'react-rating-system';
class CompanyProfile extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      
    company:{},
    jobs:[],
    ratings:[],
    numStar:0   
    }
  }

componentDidMount=()=>{
    
    var id = this.props.params.id;
    
    request
    .get('/company/'+id)
    .end((err,res)=>{
      console.log(123);
     if(err) throw err;
     var company = res.body;
    
     this.setState({company:company});
    })
    request
    .get('/company/getJob/'+id)
    .end((err,res)=>{
      console.log(456);
      if(err) throw err;
      var job = res.body;
      for (let i=0; i<job.length;i++){
        var arr=job[i].skills.split(',');
        job[i].skills = arr;

      }
      
      this.setState({jobs:job});
    })
    request
     .get('/company/getRating/'+id)
     .end((err,res)=>{
      console.log(789);
      if(err) throw err;
      var rating = res.body;
     
      this.setState({ratings:rating});
    })
      request
     .get('/company/getNumStar/'+id)
     .end((err,res)=>{
      console.log(101112);
      if(err) throw err;
      var numStar = res.body;
     
      this.setState({numStar:numStar});
    })
  }
   deleteJob(id){
    console.log("delete");
    request
      .delete('/job/delete/'+id)
      .end((err,res)=>{
        if(err) throw err
        window.location.reload();
      })
  }
  renderReview(){
    if(localStorage.getItem('flag')){
      var flag = localStorage.getItem('flag');
      if (flag==0) return(
        <Link to={"/Review/"+this.props.params.id}>
       <div className = "addReview">
            Add a review
        </div>
        </Link>
        )
      if (flag ==1) return;
    }
    else {
      return(

       <Link to="/signin" className = "addReview" >
          Sign In to review
        </Link>
        )
    }
  }
  render() {
     console.log(this.state);
    var tech = this.state.company.technology;
    if(tech){
    tech =tech.split(',');
    var techArr = tech.map((value,key)=>{
      return <span key={key}>{value}</span>

    })
  }
   var elms = this.state.jobs.map((value,key)=>{
   var arrSkill=[];
    for (let i=0;i<value.skills.length;i++){
         arrSkill.push(<span>{value.skills[i]}</span>);
    }
    if (localStorage.getItem('token')&&(localStorage.getItem('flag')==1)){
    return(
    <div className ="row Jobitem-item">
    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
      <Jobitem id={value.Job_ID} logo={value.DN_logo} title ={value.Job_name}  skill ={arrSkill} loca={value.Job_location}/>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
       <button type="button" className="btn btn-danger" onClick={()=>{this.deleteJob(value.Job_ID)}}>Delete<i className="fa fa-times-circle" ></i></button>
      
    </div>
   
    </div>
    )
  }
  else{
    return(
    <div className ="row Jobitem-item">
    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
      <Jobitem id={value.Job_ID} logo={value.DN_logo} title ={value.Job_name}  skill ={arrSkill} loca={value.Job_location}/>
    </div>
    </div>
    )
  }
  });
   var rating = this.state.ratings.map((value,key)=>{
    return (
       <div className ="review-item">
                 <h2>{value.Review}</h2>
                 <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={value.Star}
                  
                />
                 <p>{value.Candidate_name}</p>
      </div>
    )
   })
    return (
     
     <div className="Company-profile">
        <div className="image"><img src={this.state.company.image}/></div>
        <div className="Pan">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className ="logo" src={this.state.company.DN_logo}/>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h2 className="title">{this.state.company.DN_name}</h2>
              <div className="info">
              <div><span><i className="fa fa-map-marker"></i>{this.state.company.location}</span> </div>
              <div> <span><i className=" fa fa-cogs"></i>{this.state.company.type}</span>
                <span><i className="fa fa-users"></i>{this.state.company.numStaff}</span>
                <span><i className="fa fa-flag"></i>{this.state.company.DN_country}</span></div>
                 <div><span><i className="fa fa-calendar"></i>{this.state.company.schedule}</span> </div>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 review">
               <div className="Review">
                 {this.renderReview()}
                </div>
            </div>
          </div>
        </div>
        <div className="Body">
         <div className="row">
           <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
             <div role="tabpanel" className="overview">
               
               <ul className="nav nav-tabs" role="tablist">
                 <li role="presentation" className="active">
                   <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Overview</a>
                 </li>
                 <li role="presentation">
                   <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">Review</a>
                 </li>
               </ul>
             
            
               <div className="tab-content">
                 <div role="tabpanel" className="tab-pane active" id="home">
                 <h2>{this.state.company.overview}</h2>
                 <p>
                 {this.state.company.history}
                 
                 </p>
                 <span>  Our Key Skills:</span>
                 <span className="skill">
                {techArr}
                                      
                 </span>
                 </div>
                 <div role="tabpanel" className="tab-pane" id="tab">
               {rating}
                 </div>
               
               </div>
               </div>
               <div className="JobCompany">
               {elms}
               </div>
              
             
           </div>
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
             <h2 style={{position:'relative', left:50, color: "white"}}> Rating </h2>
             <div className="rating-big">
                <StarRatingComponent 
                  name="rate2" 
                  starCount={5}
                  value={this.state.numStar}
                  renderStarIcon={() => <span className="fa fa-star rating-big"></span>}
                />
                </div>
           </div>
         </div>
        

        </div>
       
     </div>
         );
  }
}

export default CompanyProfile;
