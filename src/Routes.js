import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import TestLogin from './components/TestLogin';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import Filter from './pages/Main/Filter';
import Nav from './components/Nav/Nav';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products/:category?/:id?" component={Main} />
          <Route exact path="/products" component={Filter} />
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/testLogin" component={TestLogin} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
