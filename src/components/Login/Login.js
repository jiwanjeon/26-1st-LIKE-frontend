import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailInput = e => {
    const { value } = e.target;
    this.setState({
      email: value,
    });
  };

  handlePwInput = e => {
    const { value } = e.target;
    this.setState({
      password: value,
    });
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('./prduct');
    // fetch('http://10.58.7.7:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //     name: this.state.name,
    //     phone_number: this.state.phoneNumber,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log('결과: ', res));
  };

  render() {
    const { email, password } = this.state;
    const isEmailValid = this.state.email.includes('@' && '.');
    const isPasswordValid = this.state.password.length > 7;
    const isSuubmitActivated = isEmailValid && isPasswordValid;

    return (
      <section className="Login">
        <img className="Logo" alt="LogoLike" src="/images/LogoLIKE.svg" />
        <h3 className="loginTitle">라이키 로그인</h3>
        <div className="inputContainer">
          <div className="inputWrap">
            <input
              className="email"
              placeholder="아이디"
              type="text"
              value={email}
              onChange={this.handleEmailInput}
            />
            {!isEmailValid ? (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            ) : null}
            <input
              className="password"
              placeholder="비밀번호"
              type="password"
              maxLength="16"
              value={password}
              onChange={this.handlePwInput}
            />
            {isPasswordValid ? null : (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
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
              disabled={!isSuubmitActivated}
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
          <button className="closeModal" onClick={this.props.closeLoginModal}>
            x
          </button>
        </div>
      </section>
    );
  }
}

export default Login;
