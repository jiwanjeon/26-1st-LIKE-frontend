import React, { Component } from 'react';
import Login from './Login';
import './LoginModal.scss';

export class LoginModal extends Component {
  render() {
    const { isModal, closeLoginModal } = this.props;

    return isModal ? (
      <div className="modalBackground">
        <Login closeLoginModal={closeLoginModal} />
        <div className="overlay" />
      </div>
    ) : null;
  }
}

export default LoginModal;
