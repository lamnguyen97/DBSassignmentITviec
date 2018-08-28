import React, { Component } from 'react';
import request from 'superagent';
import axios from 'axios';
import swal from 'sweetalert2';
const $ = window.jQuery;
class Signup extends Component {
  constructor(props){
    super(props);
    this.state= {
      email:'',
      password:'',
      name:'',
      txtSelect: -1,
      email_err:"",
      flag: 0,
      display: false,
      completed:true
    }

  }
  componentDidMount=()=>{
    
    var x = this.props.open;
    console.log(x);
    this.setState({display: {x}});
  }
  handleClickCan=()=>{
    this.setState({flag:0});
  }
  handleClickEm = ()=>{
    this.setState({flag:1});
  }
  handleChange=(event)=>{
        
    var name = event.target.name;
    var value = event.target.value;

    this.setState({[name]: value});
    
     
  }
 

  handleSubmit = (e)=>{
    e.preventDefault();
     const { email, password,name,flag } = this.state;
     const data = {
      email,
      password,
      name,
      flag
    };
     console.log(this.state);
    request
      .post("/user/candidate/register")
      .send(data)
      .end((err, res) => {
        if (res.body.success) {
          swal({
            title: 'Đăng ký thành công',
            type: 'success',
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false
          })
        }
        else {
          this.setState({ email_err: "existed" });
        }
      });
  };
  render() {
   
    return (
    <div className={this.state.display?"Signup":"Signup-Hidden"}>
        <h3>Sign Up</h3>
        <button className="tabCan"><span  onClick={()=>{this.handleClickCan()}}>Candidate</span></button>
        <button className="tabEm"><span  onClick={()=>{this.handleClickEm()}}>Employer</span></button>
         <form role="form" className ={(this.state.flag==0)?"Candidate-SignUp":"Hidden" } onSubmit={(e) => this.handleSubmit(e)}>
        
      
        <div className="Candidate-SignUp">
          <label >Sign Up as a Candidate</label>
          <input type="text" name="email" className="form-control"  placeholder="Email" onChange={(e)=>this.handleChange(e)}/>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e) =>this.handleChange(e)}/>
          <input type="text" name ="name" className="form-control"  placeholder="Name" onChange={(e)=>this.handleChange(e)}/>
          
        </div>
                  
        <button type="submit" className="btn btn-primary submit-button">Sign Up</button>
      </form>
      <form action="" method="POST" role="form" className ={(this.state.flag==1)?"Company-SignUp":"Hidden"}>
        
      
        <div className="Company-SignUp">
          <label >Sign Up as a Company</label>
          <input type="text" name="email" className="form-control"  placeholder="Email"/>
          <input type="password" name="password" className="form-control"  placeholder="Password"/>
          <input type="text" name ="name" className="form-control"  placeholder="Name"/>
          <input type="text" name ="location" className="form-control"  placeholder="Location"/>
          <input type="text" name ="product" className="form-control"  placeholder="Product"/>
          
        </div>
                  
        <button type="submit" className="btn btn-primary submit-button">Sign Up</button>
      </form>
     </div>
         );
  }
}

export default Signup;
