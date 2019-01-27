import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import News from './components/News'
import GMap from './components/GMap'
import Problem from './components/Problem'
import NavMenu from './components/NavMenu'


export default class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/News" component={News} />
            <Route path="/GMap" component={GMap} />
            <Route component={Problem} />
          </Switch>
        </div>
        </Router>
    );
  }
}
