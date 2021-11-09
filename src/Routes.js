import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import TestLogin from './components/TestLogin';
import Filter from './pages/Main/Filter';
import Nav from './components/Nav/Nav';
// https://stackoverflow.com/questions/42941708/react-history-push-is-updating-url-but-not-navigating-to-it-in-browser
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        {/* <Router> */}
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products/:category?/:id?" component={Main} />
          {/* Detail Route: /products/:category/:id Filter: ?category=---&color=---&size=--- */}
          <Route exact path="/products" component={Filter} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/testLogin" component={TestLogin} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
