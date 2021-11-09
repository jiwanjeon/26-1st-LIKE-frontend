import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

export class Products extends Component {
  render() {
    const { productInfo } = this.props;
    // child에서 선택한 값을 parent state에 값을 반영하기 위해서
    //  어떤 props를 parent에서 child로 전달할 수 있을지 생각해보세요!
    return (
      <Link
        to={`/products/${productInfo.category_id}/${productInfo.product_id}`}
      >
        <div className="productsContainer">
          <div className="productLayout">
            <div className="productImage">
              <img alt="production" src={productInfo.image} />
            </div>
            <div className="productInfo">
              <div className="productInfoDisplay">
                <div className="productStatus">
                  <span className="test">{productInfo.ecoFriendly}</span>
                </div>
                <div className="productName">
                  <span className="test">{productInfo.title}</span>
                </div>
                <div className="productCategory">
                  <span className="test">{productInfo.sub_title}</span>
                </div>
                <div className="productColorChoices">
                  <span className="test">{productInfo.color_kind} 컬러</span>
                </div>
              </div>
              <div className="productPrice">
                <span className="test">11,900 원</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(Products);
