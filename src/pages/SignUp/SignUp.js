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
          <h2>라이키로그인</h2>
          <p>멤버가 되어 라이키가 제공하는 </p>
          <p>최고의 제품과 혜택을 만나보세요.</p>
        </div>
        <div className="inputSign">
          <div className="signpBox">
            <input
              className="email"
              placeholder="email"
              type="text"
              value={email}
              onChange={this.handleIdInput}
            />
            <input
              className="password"
              placeholder="password"
              type="password"
              maxLength="16"
              value={password}
              onChange={this.handlePwInput}
            />
            <input
              className="confirmPw"
              placeholder="confirmPw"
              type="password"
              maxLength="16"
              value={confirmPw}
              onChange={this.handleConfirmPwdInput}
            />
            <input
              className="name"
              placeholder="name"
              type="text"
              value={name}
              onChange={this.handleNameInput}
            />
            <input
              className="phone_number"
              placeholder="phone"
              type="text"
              value={phone_number}
              onChange={this.handlePhoneInput}
            />
          </div>
          <div className="checkboxWrap">
            <input
              className="option1"
              type="checkbox"
              name="terms"
              onClick={!this.state.option1}
            />
            약관동의
            <input
              className="option2"
              type="checkbox"
              name="condition"
              onClick={!this.state.option2}
            />
            개인정보 수집.이용동의
          </div>
          <button
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
