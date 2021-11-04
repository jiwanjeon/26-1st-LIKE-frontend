import React, { Component } from 'react';
import './TCLogin.scss';

export class TCLogin extends Component {
  handleClick = () => {
    const { toggle } = this.props;
    toggle();
  };

  render() {
    return (
      <div className="TCLogin">
        <span
          style={{ fontSize: '40px', cursor: 'pointer' }}
          onClick={this.handleClick}
        >
          &times;
        </span>
        <br />
        "Login test"
      </div>
    );
  }
}

export default TCLogin;
