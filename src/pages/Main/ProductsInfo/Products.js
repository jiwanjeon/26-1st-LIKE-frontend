import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

export class Products extends Component {
  render() {
    const { productInfo } = this.props;
    console.log(productInfo.product_id);
    return (
      <Link
        to={`/products/${productInfo.main_category}/${productInfo.product_id}`}
      >
        <div className="productsContainer">
          <div className="productLayout">
            <div className="productImage">
              <img alt="production" src={productInfo.image} />
            </div>
            <div className="productInfo">
              <div className="productInfoDisplay">
                <div className="productStatus">
                  <span>{productInfo.ecoFriendly}</span>
                </div>
                <div className="productName">
                  <span>{productInfo.title}</span>
                </div>
                <div className="productCategory">
                  <span>{productInfo.sub_title}</span>
                </div>
                <div className="productColorChoices">
                  <span>{productInfo.color_kind} 컬러</span>
                </div>
              </div>
              <div className="productPrice">
                <span>11,900 원</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(Products);
