import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import TestLogin from './components/TestLogin';
import TestNav from './components/TestNav';
import Filter from './pages/Main/Filter';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products" component={Main} />
          <Route exact path="/products/:category/:id" component={Filter} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/testLogin" component={TestLogin} />
          <Route exact path="/testNav" component={TestNav} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
