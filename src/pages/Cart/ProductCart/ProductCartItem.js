import React, { Component } from 'react';
import './ProductCartItem.scss';

export class ProductCartItem extends Component {
  deleteCartItem = () => {
    const { deleteCartItem, cart_id, product_title } = this.props;
    deleteCartItem(cart_id, product_title);
  };

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
    } = this.props;

    return (
      <li className="ProductCartItem">
        <div className="imageWrap">
          <img
            className="image"
            src={thumbnail_image_url}
            alt="내가 선택한 상품"
          />
        </div>
        <div className="productInfo">
          <div className="title">{product_title}</div>
          <div className="serial">스타일: {serial}</div>
          <div className="size">사이즈: {size}</div>
          <div className="quantity">수량: {quantity}</div>
        </div>
        <div className="optionWrap">옵션 변경</div>
        <div className="price">{this.formatNumber(price)}원</div>
        <div onClick={this.deleteCartItem} className="deleteBtn">
          X
        </div>
        <div />
        <div className="btnBox">
          <button className="btn">위시리스트에 추가</button>
          <button className="btn">나중에 추가</button>
        </div>
      </li>
    );
  }
}

export default ProductCartItem;
