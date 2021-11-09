import React, { Component } from 'react';
import './DetailDescription.scss';

export class DetailDescription extends Component {
  render() {
    const { descriptionTitle, description, shown, serial } = this.props;
    return (
      <div className="DetailDescription">
        <p>{descriptionTitle}</p>
        <br />
        <p>{description}</p>
        <br />
        현재 컬러 : {shown}
        <br />
        스타일 : {serial}
        <br />
        <br />
      </div>
    );
  }
}

export default DetailDescription;
