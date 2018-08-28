import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import request from 'superagent';

class Panel extends Component {
  constructor(props){
    super(props);
    this.state={
      numjob:0
    }
  }
  componentWillMount(){
    request
      .get('/job/getNum/getNumJob')
      .end((err,res)=>{
        if (err) throw err;
        else{

          console.log(res.body.num);
          this.setState({numjob:res.body.num});
        }
      })
  }
  render() {
  
    return (
    <div className ="Panel">
       
       <h1>{this.state.numjob +" JOBS FOR DEVELOPERS"}</h1>
       <div className="row">
       	
       		<form  className="a col-xs-4 col-sm-4 col-md-4 col-lg-4" role="form">
       		
       			<div className="form-group search-job">
       				
       				<input type="text" className="form-control"  placeholder="Search Keyword..."/>
       			</div>
       		    
       		</form>
       	
       	<div className="a col-xs-4 col-sm-4 col-md-4 col-lg-4">
       		<select name=""  className="form-control" >
       			<option value="">SaiGon</option>
       			<option value="">HaNoi</option>
       			<option value="">DaNang</option>
       		</select>
       	</div>
       	<div className="a col-xs-4 col-sm-4 col-md-4 col-lg-4">
       		<button type="submit" className="btn btn-default">Search</button>
       	</div>
       </div>
       
     </div>
         );
  }
}

export default Panel;
