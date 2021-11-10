import React, { Component } from 'react';
import ProductItem from './ProductCartItem';

export class ProductCart extends Component {
  render() {
    const { orderData, deleteCartItem } = this.props;

    return (
      <ul className="ProductCart">
        {orderData.map(order => (
          <ProductItem
            key={order.id}
            {...order}
            deleteCartItem={deleteCartItem}
          />
        ))}
      </ul>
    );
  }
}

export default ProductCart;
