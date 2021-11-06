import React, { Component } from 'react';
import OrderItem from './OrderItem';

export class OrderList extends Component {
  render() {
    const { orderData } = this.props;

    return (
      <ul className="OrderList">
        {orderData.map(order => {
          const { id, title, serial, price, size, quantity, thumbnail } = order;

          return (
            <OrderItem
              key={id}
              title={title}
              serial={serial}
              price={price}
              size={size}
              quantity={quantity}
              thumbnail={thumbnail}
            />
          );
        })}
      </ul>
    );
  }
}

export default OrderList;
