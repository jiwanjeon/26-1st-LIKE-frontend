import React, { Component } from 'react';
import Nav from './Nav/Nav';
import TCLogin from './TestComp/TCLogin';

export class TestNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
    };
  }

  toggleLogin = () => {
    const { loginModal } = this.state;

    this.setState({
      loginModal: !loginModal,
    });
  };

  render() {
    const { loginModal } = this.state;

    return (
      <div style={{ backgroundColor: 'blue', height: '100%' }}>
        <Nav toggle={this.toggleLogin} />
        {loginModal && <TCLogin toggle={this.toggleLogin} />}
      </div>
    );
  }
}

export default TestNav;
