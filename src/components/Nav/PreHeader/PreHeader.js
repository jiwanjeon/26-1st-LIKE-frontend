import React, { Component } from 'react';
import './PreHeader.scss';
import Login from '../../Login/Login';
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

    //뭔가를 해서 모달이 보이게 해야합니다.
    //보이게하는 상태로 만들어 주세요.
  };
  closeingLoginModal = () => {
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
        {this.state.modal && (
          <div className="modalBackground">
            <div className="loginWrapper">
              <button onClick={this.closeingLoginModal}>x</button>
              <Login />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PreHeader;
