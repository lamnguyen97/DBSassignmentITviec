import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './App.css'
import Header from './component/Header';
import Footer from './component/Footer';
import request from 'superagent';
const $ = window.jQuery;
class App extends Component {
 constructor(props){
  super(props);
  this.state ={
    user:{},
    flag:parseInt(localStorage.getItem('flag'))
  }
 }
 validateUser() {
    if (localStorage.getItem('token') && localStorage.getItem('flag')==0) {
      const token = localStorage.getItem('token');
      $.ajax({
        method: "GET",
        url:"/user/validate",
        headers: {
          'x-access-token': token,
          'flag': localStorage.getItem('flag')
        },
       
      }).done(response =>{
        if (response.success) {
                
          this.setState({user: response.user});
          localStorage.setItem('Candidateid',this.state.user.Candidate_ID);

          }
        
        else {
          if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
          }
          console.log("Bạn chưa đăng ký hoặc tài khoản này đã bị xóa.");
        }
      })
    }
    else if (localStorage.getItem('token') && localStorage.getItem('flag')==1) {
      const token = localStorage.getItem('token');
      $.ajax({
        method: "GET",
        url:"/user/validate",
        headers: {
          'x-access-token': token,
          'flag': localStorage.getItem('flag')
        },
       
      }).done(response =>{
        if (response.success) {
                
          this.setState({user: response.user});
          localStorage.setItem('id',this.state.user.DN_ID);

          }
        
        else {
          if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            console.log('ma ca rong');
          }
          console.log("Bạn chưa đăng ký hoặc tài khoản này đã bị xóa.");
        }
      })
    }
    else {
      console.log('Chưa đăng nhập');
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('flag');
    localStorage.removeItem('id');
    this.setState({ user: {} }, () => window.location.reload());
  }
  componentWillMount(){
  this.validateUser();
  }
  render() {
   console.log(this.state);
    return (
    <div>
      <Header  logout={this.logout} user={this.state.user} flag ={this.state.flag}/>
      <div className="body-main">
         {this.props.children}
      </div>
      <hr/>
      <Footer />
    </div>
         );
  }
}

export default App;
