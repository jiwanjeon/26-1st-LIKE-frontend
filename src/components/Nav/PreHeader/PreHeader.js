import React, { Component } from 'react';
import './PreHeader.scss';

export class PreHeader extends Component {
  render() {
    const { toggle } = this.props;

    return (
      <div className="PreHeader">
        <ul>
          <li>고객센터</li>
          <li>맴버가입</li>
          <li onClick={toggle}>로그인</li>
        </ul>
      </div>
    );
  }
}

export default PreHeader;
