import React, { Component } from 'react';

export class TCLogin extends Component {
  handleClick = () => {
    const { toggle } = this.props;
    toggle();
  };

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '110px',
          width: '600px',
          height: '600px',
          marginLeft: '-300px',
          backgroundColor: 'lightgray',
          zIndex: '300',
        }}
      >
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
