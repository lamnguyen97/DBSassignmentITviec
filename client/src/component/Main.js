import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Panel from './Panel';
import Topemployers from './Topemployers';
import Joblist from './Joblist';
class Main extends Component {

  render() {
  
    return (
     <div className="Main">
      <Panel />
      <Topemployers />
      <hr/>
      <Joblist />
     </div>
         );
  }
}

export default Main;
