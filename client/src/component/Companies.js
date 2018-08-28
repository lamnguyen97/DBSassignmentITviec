import React, { Component } from 'react';
import request from 'superagent';
import { Link, browserHistory } from 'react-router';

class Companies extends Component {
  constructor(props){
    super(props);
    this.state ={
      company: []
    }
  }
  componentDidMount(){
    request
    .get('/company')
    .end((err,res)=>{
      if(err) throw (err);
      var company = res.body;
      for (let i=0; i<company.length;i++){
        var arr=company[i].technology.split(',');
        company[i].technology = arr;

      }
     
      this.setState({company:company});
    })
  }
  render() {

   var elms = this.state.company.map((value,key)=>{
    
    var arrSkill=[];
    for (let i=0;i<value.technology.length;i++){
         arrSkill.push(<span>{value.technology[i]}</span>);
    }
    return(
       <Link to={"/companies/"+ value.DN_ID} key={key}>
           <div className="row companyitem">
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <img className ="logo" src ={value.DN_logo} alt="abc"/>
             </div>
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 content">
                <div className="desc">
                <h2>{value.DN_name}</h2>
                   <span><i className="fa fa-cogs"></i>{value.type}</span>
                   <span><i className="fa fa-users"></i>{value.numStaff}</span>
                </div>   
                   <div className="skill">
                  {arrSkill}
                  </div>
             </div>
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 location">
               <h4><i className="fa fa-map-marker"></i>{" "+value.location}</h4>
             </div>
           </div>
           
       

        </Link>
    )

   })
    return (
    <div className="container">
      <div className="search-company">
         <form action="" method="POST">
           <div className="form-group">
             
             <input type="text" className="form-control" placeholder="Enter Company name"/>
           </div>
                    
           <button type="submit" className="btn btn-primary">Search</button>
         </form>

      </div>
      <hr/>
      <div className="Companies-list">
            {elms}
      </div>
     </div>
         );
  }
}

export default Companies;
