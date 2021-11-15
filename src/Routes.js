import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import Nav from './components/Nav/Nav';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path={['/', '/products/:category?/:id?']}
            component={Main}
          />
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
