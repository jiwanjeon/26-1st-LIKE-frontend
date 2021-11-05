import React, { Component } from 'react';
import './DetailDescription.scss';

export class DetailDescription extends Component {
  render() {
    const { descriptionHead, description, serial } = this.props;
    return (
      <div className="description">
        <p>{descriptionHead}</p>
        <br />
        <p>{description}</p>
        <br />
        현재 컬러 : 트와인/세일/게임 로열/폴른
        <br />
        스타일 : {serial}
        <br />
        <br />
      </div>
    );
  }
}

export default DetailDescription;
