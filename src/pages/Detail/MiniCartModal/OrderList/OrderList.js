import React, { Component } from 'react';
import OrderItem from './OrderItem';

export class OrderList extends Component {
  render() {
    const { orderData } = this.props;

    return (
      <ul className="OrderList">
        {orderData.map(order => (
          <OrderItem key={order.id} {...order} />
        ))}
        }
      </ul>
    );
  }
}

export default OrderList;
