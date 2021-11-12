import React, { Component } from 'react';
import './PreHeader.scss';
import LoginModal from '../../Login/LoginModal';
import { Link } from 'react-router-dom';

export class PreHeader extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  openLoginModal = () => {
    const { modal } = this.state;

    this.setState({
      modal: !modal,
    });
  };

  closeLoginModal = () => {
    this.setState({
      modal: false,
    });
  };

  render() {
    const { modal } = this.state;

    return (
      <div className="PreHeader">
        <ul>
          <li>고객센터</li>

          <li>
            <Link to="/signup">맴버가입</Link>
          </li>
          <li onClick={this.openLoginModal}>로그인</li>
        </ul>
        <LoginModal isModal={modal} closeLoginModal={this.closeLoginModal} />
      </div>
    );
  }
}

export default PreHeader;
