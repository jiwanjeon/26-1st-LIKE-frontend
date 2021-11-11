import React, { Component } from 'react';
import './PreHeader.scss';
import Login from '../../Login/Login';
import LoginModal from '../../Login/LoginModal';
import { Link } from 'react-router-dom';
//목적어를 찾아주세요
export class PreHeader extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  openLoginModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  closeLoginModal = () => {
    this.setState({
      modal: false,
    });
  };
  render() {
    return (
      <div className="PreHeader">
        <ul>
          <li>고객센터</li>

          <li>
            <Link to="/signup">맴버가입</Link>
          </li>
          <li onClick={this.openLoginModal}>로그인</li>
        </ul>
        <LoginModal
          isModal={this.state.modal}
          closeLoginModal={this.closeLoginModal}
        />
        {/* {this.state.modal && (
          <div className="modalBackground">
            <div className="loginWrapper">
              <button onClick={this.closeingLoginModal}>x</button>
              <Login />
            </div>
          </div>
        )} */}
      </div>
    );
  }
}

export default PreHeader;
