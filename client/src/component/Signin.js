import React, { Component } from 'react';
import request from 'superagent';
import axios from 'axios';
import swal from 'sweetalert2';
import { Link } from 'react-router';
import {browserHistory} from 'react-router'
const jwtDecode = require('jwt-decode');
const $ = window.jQuery;

class Signin extends Component {
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
      id:""
      
    }

  }
  redirectAfterLogin() {
    if (localStorage.getItem('token')) {
      browserHistory.push('/');
    }
  }
  componentDidMount() {
    this.redirectAfterLogin();
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
 

  handleSubmitCandidate = (e)=>{
    e.preventDefault();
    const {email, password,flag} = this.state;
   $.ajax({
      method: "POST",
      url: '/user/authenticate',
      data: {
        email,
        password,
        flag
      }
    }).done(response => {
  
      if (response.success) {
        swal({
          title: 'Đăng nhập thành công',
          type: 'success',
          timer: 1500,
          showConfirmButton: false,
          allowOutsideClick: false
        }).then((result) => {
          if (result.dismiss === 'timer') {
            localStorage.setItem('token', response.token);
            localStorage.setItem('flag', this.state.flag);
            
            window.location.reload();
          }
        })
      }
     
    })
    
 
  }
  handleSubmitCompany = (e)=>{
    e.preventDefault();
    const {email, password,flag} = this.state;
   $.ajax({
      method: "POST",
      url: '/user/authenticate',
      data: {
        email,
        password,
        flag
      }
    }).done(response => {
  
      if (response.success) {
        swal({
          title: 'Đăng nhập thành công',
          type: 'success',
          timer: 1500,
          showConfirmButton: false,
          allowOutsideClick: false
        }).then((result) => {
          if (result.dismiss === 'timer') {
            localStorage.setItem('token', response.token);
            localStorage.setItem('flag', this.state.flag);
            window.location.reload();
          }
        })
      }
     
    })
    
 
  };
  componentWillMount () {
    window.scrollTo(0, 0);
  }
  render() {
   console.log(this.state.flag);
    return (
    <div className="Signin">
        <h3>Sign In</h3>
       <Link to ="/signin"><button className="tabCan"><span  onClick={()=>{this.handleClickCan()}}>Candidate</span></button></Link>
        <Link to ="/signin"> <button className="tabEm"><span  onClick={()=>{this.handleClickEm()}}>Employer</span></button></Link>
         <form role="form" className ={(this.state.flag==0)?"Candidate-SignIn":"Hidden"}  onSubmit={(e) => this.handleSubmitCandidate(e)}>
        
      
        <div className="Candidate-Signin">
          <label >Sign In as a Candidate</label>
          <input type="text" name="email" className="form-control"  placeholder="Email" onChange={(e)=>this.handleChange(e)}/>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e)=>this.handleChange(e)}/>
          
        </div>
                  
        <button type="submit" className="btn btn-primary submit-button">Sign In</button>
      </form>
      <form action="" method="POST" role="form" className ={(this.state.flag==1)?"Company-SignIn":"Hidden"} onSubmit={(e)=>{this.handleSubmitCompany(e)}}>
        
      
        <div className="Company-Signin">
          <label >Sign In as a Company</label>
          <input type="text" name="email" className="form-control"  placeholder="Email" onChange={(e)=>this.handleChange(e)}/>
          <input type="password" name="password" className="form-control"  placeholder="Password" onChange={(e)=>this.handleChange(e)}/>
          
          
        </div>
                  
        <button type="submit" className="btn btn-primary submit-button">Sign In</button>
      </form>
     </div>
         );
  }
}

export default Signin;
