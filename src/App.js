import React, { Component } from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import LoginForm from './js/components/LoginForm.js';
import Overview from './js/components/Overview.js';
import Single from './js/components/Single.js';

import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './css/App.css';
//import Visualization from "./js/components/Visualization.js";
//import LoadingSpinner from "./js/components/LoadingSpinner.js";

var data = [
  {name: 'Zalando Example', accounts: 5, projects: 2},
  {name: 'Telekom Example', accounts: 10, projects: 35},
  {name: 'Lidl Example', accounts: 8, projects: 2}
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginProcessed : false
        };
    }

    //test atom commit for Saskia

  render() {
    return (
      <div className="App" styles={{height:"100%", position:"relative"}}>

        <header id="header">
          <div className="mui-appbar mui--appbar-line-height">
            <div className="mui-container-fluid">
              <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
              <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
              <span className="mui--text-title mui--visible-xs-inline-block">Global customer</span>
            </div>
          </div>
        </header>

        <div id="sidedrawer" className="mui--no-user-select">
          <div id="sidedrawer-brand" className="mui--appbar-line-height">
            <span className="mui--text-title">Globaler Kunde</span>
          </div>
          <div className="mui-divider"></div>
        </div>


        <div id="content-wrapper">
          <div className="mui--appbar-height"></div>
          <div className="mui-container-fluid">
              <LoginForm onLoginSucceeded={this.onLoginSucceeded.bind(this)} />
              <Overview data={data}/>
              <Single />
              { /*this.state.loginProcessed ? <Visualization/> : null */}
          </div>
        </div>

          <div styles={{position:"absolute", bottom:"0px"}}>
              <footer id="footer">
                  <div className="mui-container-fluid">
                      <br/>
                      Globaler Kunde
                  </div>
              </footer>
          </div>

      </div>
    );
  }

  onLoginSucceeded(){
      this.setState ( {loginProcessed : true} )
  }
}



export default App;
