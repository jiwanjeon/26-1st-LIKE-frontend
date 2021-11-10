import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export class Login extends Component {
  nn;
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      checkemail: false,
      checkpassword: false,
    };
  }

  checkingemail = e => {
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-_]+$/;
    this.setState({
      checkemail: emailRegex.test(e.target.value),
    });
  };

  checkingpassword = e => {
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    this.setState({
      checkpassword: pwdRegex.test(e.target.value),
    });
  };

  handleIdInput = e => {
    const { value } = e.target;
    this.setState({
      id: value,
    });
  };

  handlePwInput = e => {
    const { value } = e.target;
    this.setState({
      password: value,
    });
  };

  isFormValid = () => {
    const { id, password } = this.state;
    const isIdValid = id.indexOf('@' && '.') !== -1;
    const isPwValid = password.length >= 8 && password.length <= 16;
    return isIdValid && isPwValid;
  };
  goToMain = () => {
    const { history } = this.props;
    history.push('./Main');
  };

  render() {
    console.log(this.state.checkemail);
    console.log(this.state.checkpassword);
    const { id, password } = this.state;

    return (
      <section className="Login">
        <img className="Logo" alt="LogoLike" src="/images/LogoLIKE.svg" />
        <h3 className="loginTitle">라이키 로그인</h3>
        <div className="inputContainer">
          <div className="inputWrap">
            <input
              className="id"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={this.handleIdInput}
              onKeyUp={this.checkingemail}
            />
            {this.state.checkemail ? null : (
              <div className="checkingEmail">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              maxLength="16"
              value={password}
              onChange={this.handlePwInput}
              onKeyUp={this.checkingpassword}
            />
            {this.state.checkpassword ? null : (
              <div className="checkingPwd">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
          </div>
          <div className="inputBox">
            <div className="checkboxWrap">
              <input
                className="checkbox"
                type="checkbox"
                id="is-subscription"
              />
              <label for="is-subscription">로그인 유지하기 </label>
            </div>
            <div className="findAccount">
              <label>아이디/비밀번호 찾기</label>
            </div>
          </div>
          <button
            className="loginButton"
            disabled={
              this.state.id.includes('@' && '.') &&
              this.state.password.length >= 8 &&
              this.state.password.length <= 16
                ? false
                : true
            }
            type="submit"
            onClick={this.goToMain}
          >
            <p>로그인</p>
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
