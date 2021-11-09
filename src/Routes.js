import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import TestLogin from './components/TestLogin';
import Cart from './pages/Cart/Cart';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/testLogin" component={TestLogin} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
