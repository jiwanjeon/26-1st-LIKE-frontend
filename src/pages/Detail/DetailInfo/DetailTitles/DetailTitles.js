import React, { Component } from 'react';
import './DetailTitles.scss';

export class DetailTitles extends Component {
  formatNumber = number => {
    return Number(number).toLocaleString('en-US');
  };

  render() {
    const { title, subTitle, price } = this.props;

    return (
      <div className="DetailTitles">
        <div className="preInfo">
          <span className="subTitle">{subTitle}</span>
          <span className="price">{`${this.formatNumber(price)}원`}</span>
        </div>
        <div>
          <h1 className="title">{title}</h1>
        </div>
      </div>
    );
  }
}

export default DetailTitles;
