import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import './Cart.scss';

export class Cart extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Cart">
          <main className="cartInner">
            <h2 className="cartTitle">HI</h2>
            <div className="cartNumber">
              <span>1개 상품</span>
            </div>
            <div className="cartContainer">
              사용 가능한 쿠폰이 있습니다
              <br />
              아래 프로모 코드란에 입력하여 사용해주세요
              <div className="myPageCart">hi</div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Cart;
