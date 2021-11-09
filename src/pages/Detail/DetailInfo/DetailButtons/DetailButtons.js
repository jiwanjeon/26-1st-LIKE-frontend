import React, { Component } from 'react';
import './DetailButtons.scss';

export class DetailButtons extends Component {
  render() {
    return (
      <div className="DetailButtons">
        <button className="btn order">바로구매</button>
        <button onClick={this.props.submitForms} className="btn addcart">
          장바구니
        </button>
        <button className="btn wishlist">위시리스트</button>
      </div>
    );
  }
}

export default DetailButtons;
