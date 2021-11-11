import React, { Component } from 'react';
import './OrderItem.scss';

export class OrderItem extends Component {
  formatNumber = number => {
    return Number(number).toLocaleString('en-US');
  };

  render() {
    const {
      product_title,
      serial,
      price,
      size,
      quantity,
      thumbnail_image_url,
      order_number,
    } = this.props;

    return (
      <li className="OrderItem">
        <div className="imageWrap">
          <img
            className="image"
            src={thumbnail_image_url}
            alt="내가 선택한 상품"
          />
        </div>
        <div className="orderInfo">
          <div className="title">{product_title}</div>
          <div className="serial">스타일: {serial}</div>
          <div className="size">사이즈: {size}</div>
          <div className="quantity">수량: {quantity}</div>
          <div className="price">{this.formatNumber(price)}원</div>
        </div>
        {order_number && (
          <div className="orderDelete">
            <div className="delete">X</div>
          </div>
        )}
      </li>
    );
  }
}

export default OrderItem;
