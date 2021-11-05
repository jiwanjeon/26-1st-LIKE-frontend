import React, { Component } from 'react';

export class DetailButtons extends Component {
  render() {
    return (
      <div className="btnGroup">
        <button className="btn order">바로구매</button>
        <button className="btn addcart">장바구니</button>
        <button className="btn wishlist">위시리스트</button>
      </div>
    );
  }
}

export default DetailButtons;
