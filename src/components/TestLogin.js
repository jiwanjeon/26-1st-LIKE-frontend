import React, { Component } from 'react';
import Login from './Login/Login';

export class TestLogin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default TestLogin;
