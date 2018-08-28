import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import Signup from './Signup';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      loginBox: false,
      signupBox: false
    }
  }
  renderHeader(){
    if($.isEmptyObject(this.props.user) ){
    return (
    <div className="Header">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" ><img src ="/logo/logo.png"/></Link>
          <ul className="nav navbar-nav">
            
            
          </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link ><i className="fa fa-bell"></i></Link>
              </li>

              <li >
              <Link to="/signin"> Sign In</Link>
               </li>
               <li >
              <Link to ="/signup"className="signin-popup"> Sign Up</Link>
               </li>
               <li >
              <Link to="/alljobs"> All Jobs</Link>
               </li>
                <li >
              <Link to="/companies">All Companies</Link>
               </li>
              
            </ul>
        </div>
      </nav>
      
     </div>

      )
  }
  else if(this.props.flag==0) return (
    <div className="Header">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" ><img src ="/logo/logo.png"/></Link>
          <ul className="nav navbar-nav">
            
            
          </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link ><i className="fa fa-bell"></i></Link>
              </li>

              <li >
              <Link to="/signin">{this.props.user.Candidate_name}</Link>
               </li>
               <li >
              <Link to ="/signup"className="signin-popup" onClick={this.props.logout}>Log Out</Link>
               </li>
               <li >
              <Link to="/alljobs"> All Jobs</Link>
               </li>
                <li >
              <Link to="/companies">All Companies</Link>
               </li>
              
            </ul>
        </div>
      </nav>
      
     </div>

    )
    else if(this.props.flag==1) return (
    <div className="Header">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" ><img src ="/logo/logo.png"/></Link>
          <ul className="nav navbar-nav">
            
            
          </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link ><i className="fa fa-bell"></i></Link>
              </li>

              <li >
              <Link to="/signin">{this.props.user.DN_name}</Link>
               </li>
               <li >
              <Link to ="/signup"className="signin-popup" onClick={this.props.logout}>Log Out</Link>
               </li>
               <li >
              <Link to ={"/companies/"+this.props.user.DN_ID} className="signin-popup">Profile</Link>
               </li>
               <li >
              <Link to ="/postjob"><button type="button" className="btn btn-info" style={{position:"relative",bottom:5}}>Post Jobs</button></Link>
               </li>
               <li >
              <Link to="/alljobs"> All Jobs</Link>
               </li>
                <li >
              <Link to="/companies">All Companies</Link>
               </li>
              
            </ul>
        </div>
      </nav>
      
     </div>

    )
  }
  render() {
  
    return (
         this.renderHeader()
         );
  }
}

export default Header;
