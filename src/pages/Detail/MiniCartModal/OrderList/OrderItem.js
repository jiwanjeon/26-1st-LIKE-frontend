import React, { Component } from 'react';
import './OrderItem.scss';

export class OrderItem extends Component {
  formatNumber = number => {
    return Number(number).toLocaleString('en-US');
  };

  render() {
    const { title, serial, price, size, quantity, thumbnail } = this.props;

    return (
      <li className="OrderItem">
        <div className="imageWrap">
          <img className="image" src={thumbnail} alt="temp" />
        </div>
        <div className="orderInfo">
          <div className="title">{title}</div>
          <div className="serial">스타일: {serial}</div>
          <div className="size">사이즈: {size}</div>
          <div className="quantity">수량: {quantity}</div>
          <div className="price">{this.formatNumber(price)}원</div>
        </div>
        <div className="orderDelete">
          <div className="delete">X</div>
        </div>
      </li>
    );
  }
}

export default OrderItem;
