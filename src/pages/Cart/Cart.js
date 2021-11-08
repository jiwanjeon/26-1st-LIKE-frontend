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
            <div className="cartContainer" />
          </main>
        </div>
      </div>
    );
  }
}

export default Cart;
