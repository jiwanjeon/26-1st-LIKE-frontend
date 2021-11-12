import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

export class Products extends Component {
  render() {
    const { productInfo } = this.props;
    return (
      <Link to={`/details/${productInfo.product}`}>
        <div className="productsContainer">
          <div className="productLayout">
            <div className="productImage">
              <img alt="production" src={productInfo.thumbnail_image_url} />
            </div>
            <div className="productInfo">
              <div className="productInfoDisplay">
                {productInfo.ecoFriendly && (
                  <div className="productStatus">
                    <span className="test">{productInfo.ecoFriendly}</span>
                  </div>
                )}

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
                <span className="test">{productInfo.price}원</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(Products);
