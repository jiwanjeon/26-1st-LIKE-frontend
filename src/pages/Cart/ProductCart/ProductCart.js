import React, { Component } from 'react';
import ProductItem from './ProductCartItem';

export class ProductCart extends Component {
  render() {
    const { orderData } = this.props;

    return (
      <ul className="productCart">
        {orderData.map(order => (
          <ProductItem key={order.id} {...order} />
        ))}
      </ul>
    );
  }
}

export default ProductCart;
