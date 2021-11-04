import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: event.target.value,
    });
  };

  // goToMain = () => {
  //   this.props.history.push('./main');
  // };

  isFormValid = () => {
    const { id, password } = this.state;
    const isIdValid = id.indexOf('@') !== -1;
    const isPwValid = password.length >= 8 && password.length <= 16;
    return isIdValid && isPwValid;
  };

  render() {
    return (
      <section className="login">
        <img className="Logo" alt="LogoLike" src="/images/LogoLIKE.svg" />
        <h3 className="loginTitle">라이키 로그인</h3>
        <div className="inputContainer">
          <div className="inputWrap">
            <input
              className="id"
              type="text"
              placeholder="아이디"
              onChange={this.handleIdInput}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
          </div>
          <div className="inputBox">
            <div className="checkboxWrap">
              <input className="checkbox" type="checkbox" />
              로그인 유지하기
            </div>
            <div className="findAccount">
              <label>아이디/비밀번호 찾기</label>
            </div>
          </div>
          <button
            // onClick={this.goToMain}
            type="submit"
          >
            <Link to="/main">로그인</Link>
          </button>
        </div>
        <div className="last">
          <p>
            아직 회원이 아니신가요? <Link to="/SignUp">회원가입</Link>
          </p>
        </div>
      </section>
    );
  }
}

export default Login;
