import React, { Component } from 'react';
import './SignUp.scss';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPw: '',
      name: '',
      phone_number: '',
      option1: false,
      option2: false,
      checkmail: false,
      checkpw: false,
      samepw: false,
      checkname: false,
      checkPhone: false,
    };
  }

  handleIdInput = e => {
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

  handleConfirmPwInput = e => {
    const { value } = e.target;
    this.setState({
      confirmPw: value,
    });
  };

  handleNameInput = e => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  handlePhoneInput = e => {
    const { value } = e.target;
    this.setState({
      phone_number: value,
    });
  };

  isFormValid = () => {
    const { email, password } = this.state;
    const isIdValid = email.indexOf('@') !== -1;
    const isPwValid = password.length >= 8 && password.length <= 16;

    return isIdValid && isPwValid;
  };
  goToMain = () => {
    const { history } = this.props;
    history.push('./Main');
    // fetch('http://10.58.7.7:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //     name: this.state.name,
    //     phone_number: this.state.phone_number,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log('결과: ', res));
  };
  render() {
    const { email, password, confirmPw, name, phone_number } = this.state;
    return (
      <section className="signUp">
        <div className="head">
          <h2>라이키 멤버 가입</h2>
          <p>멤버가 되어 라이키가 제공하는 </p>
          <p>최고의 제품과 혜택을 만나보세요.</p>
        </div>
        <div className="inputSign">
          <div className="signupBox">
            <input
              className="email"
              placeholder="사용하실 ID를 입력해주세요. (수신 가능 E-mail)"
              type="text"
              value={email}
              onChange={this.handleIdInput}
            />
            {this.state.checkmail ? null : (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
            <input
              className="password"
              placeholder="영문 대 소문+숫자+특수문자 8~16자리(괄호(),<>사용불가>"
              type="password"
              maxLength="16"
              value={password}
              onChange={this.handlePwInput}
            />
            {this.state.checkpw ? null : (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
            <input
              className="confirmPw"
              placeholder="패스워드를 다시 입력해 주세요."
              type="password"
              maxLength="16"
              value={confirmPw}
              onChange={this.handleConfirmPwInput}
            />
            {this.state.samepw ? null : (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
            <input
              className="name"
              placeholder="이름을 입력해 주세요."
              type="text"
              value={name}
              onChange={this.handleNameInput}
            />
            {this.state.checkname ? null : (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
            <input
              className="phone_number"
              placeholder="휴대폰 번호 '-'표 없이 입력해 주세요."
              type="tel"
              value={phone_number}
              onChange={this.handlePhoneInput}
            />
            {this.state.checkPhone ? null : (
              <div className="checking">
                <span>필수 입력 항목입니다.</span>
              </div>
            )}
          </div>
          <div className="checkboxWrap">
            <div className="checkboxTitle">
              <input
                className="option1"
                type="checkbox"
                name="terms"
                onClick={!this.state.option1}
              />
              약관동의
            </div>
            <div className="checkboxInfo">
              <input
                className="option2"
                type="checkbox"
                name="condition"
                onClick={!this.state.option2}
              />
              개인정보 수집.이용동의
            </div>
          </div>
          <button
            className="signupBtn"
            disabled={
              this.state.email.includes('@' && '.') &&
              this.state.password.length >= 8 &&
              this.state.password.length <= 16
                ? false
                : true
            }
            type="submit"
            onClick={this.goToMain}
          >
            회원가입하기 (만 14세 이상)
          </button>
        </div>
      </section>
    );
  }
}

export default SignUp;
