import React, { Component } from 'react';
import Login from './Login';
import './LoginModal.scss';

export class LoginModal extends Component {
  render() {
    return this.props.isModal ? (
      <div className="modalBackground">
        <Login closeLoginModal={this.props.closeLoginModal} />
        <div className="overlay" />
      </div>
    ) : null;
  }
}

export default LoginModal;
