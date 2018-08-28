import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
const $ = window.jQuery;
class Postjob extends Component {
  constructor(props){
    super(props)
    this.state ={
      name:"",
      detail:"",
      skills:"",
      schedule:"",
      location:"",
      salary:0
    }
  }
  handleChange=(event)=>{
        
    var name = event.target.name;
    var value = event.target.value;

    this.setState({[name]: value});
    
     
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const {name,detail,skills,schedule,location,salary} = this.state;
    const companyID= localStorage.getItem('id');
   $.ajax({
      method: "POST",
      url: '/job/postjob',
      data: {
        name,
        detail,
        skills,
        schedule,
        location,
        salary,
        companyID
      }
    }).done(response => {
  
      if (response.success) {
         browserHistory.push('/');
      }
     
    })
    
 
  };
  render() {
    console.log(this.state);
  //INSERT INTO `job` (`Job_ID`, `Job_detail`, `Job_name`, `Job_location`, `Job_dn_ID`, `skills`, `schedule`, `Salary`) VALUES ('JOB00099', 'Nothing', 'ABCXYZ', 'Da Nang', 'COM00003', 'a,b,c', 'mon to fri', '5000')
    return (
     <div className="Apply container">
     <h1>Post Job Here </h1>
     <form action="" method="POST" role="form" onSubmit={(e) => this.handleSubmit(e)}>
      
     
       <div className="form-group">
         <label for="">Job Name</label>
         <input name="name" type="text" className="form-control" id="" placeholder="Job Name" onChange={(e)=>this.handleChange(e)}/>
       </div>
       <div className="form-group">
         <label for="">Job Detail</label>
         <input name="detail" type="text" className="form-control" id="" placeholder="Job Detail" onChange={(e)=>this.handleChange(e)}/>
       </div>
       <div className="form-group">
         <label for="">Job location</label>
         <select name="location" id="input" className="form-control" required="required" onChange={(e)=>this.handleChange(e)}>
           <option value="Ha Noi">Ha Noi</option>
           <option value="Da Nang">Da Nang</option>
           <option value="Sai Gon">Sai Gon</option>
         </select>
         
       </div>
      <div className="form-group">
         <label for="">Skills</label>
         <input name="skills" type="text" className="form-control" id="" placeholder="Skills" onChange={(e)=>this.handleChange(e)}/>
       </div>
       <div className="form-group">
         <label for="">Schedule</label>
         <input name ="schedule" type="text" className="form-control" id="" placeholder="Schedule" onChange={(e)=>this.handleChange(e)}/>
       </div>
         <div className="form-group">
         <label for="">Salary</label>
         <input name="salary" type="text" className="form-control" id="" placeholder="Salary" onChange={(e)=>this.handleChange(e)}/>
       </div>
       
     
       <button type="submit" class="btn btn-danger">Post Job</button>
     </form>
     </div>
         );
  }
}

export default Postjob;
