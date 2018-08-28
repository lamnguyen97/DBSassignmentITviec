import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import {Router, Route, IndexRoute} from 'react-router';
import {browserHistory} from 'react-router'
import './index.css';
import './assets/Signup.css'
import './assets/Header.css'
import './assets/Signin.css'
import './assets/Panel.css'
import './assets/Footer.css'
import './assets/Alljobs.css'
import './assets/Topemployers.css'
import './assets/Companies.css'
import './assets/CompanyProfile.css'
import './assets/Singlejob.css'
import App from './App';
import Signup from './component/Signup';
import Postjob from './component/Postjob';
import Signin from './component/Signin';
import Alljobs from './component/Alljobs';
import Companies from './component/Companies';
import Singlejob from './component/Singlejob';
import Apply from './component/Apply';
import Main from './component/Main';
import CompanyProfile from './component/Companyprofile'
import registerServiceWorker from './registerServiceWorker';
import Review from './component/Review';
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
          <IndexRoute component={Main}></IndexRoute>
          <Route path="/signup" component={Signup}></Route>  
          <Route path="/signin" component={Signin}></Route>
          <Route path="/alljobs" component={Alljobs}></Route>
          <Route path="/postjob" component={Postjob}></Route>
          <Route path="/companies" component={Companies}></Route>
          <Route path="/companies/:id" component={CompanyProfile}></Route>
          <Route path="/Review/:id" component={Review}></Route>
          <Route path="/alljobs/:id" component={Singlejob}></Route>
          <Route path="/Apply" component={Apply}></Route>
    </Route>
   </Router>
)   
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
