import React, { Component } from 'react';
import OrderList from './OrderList/OrderList';
import './MiniCart.scss';

export class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
    };
  }

  componentDidMount() {
    this.orderData();
  }

  orderData = () => {
    fetch('/data/order/orderData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          orderData: data,
          totalPrice: this.calculateTotal(data),
        });
      });
  };

  calculateTotal = list => {
    const totalPrice = list
      .map(order => Number(order.price))
      .reduce((accumulator, price) => accumulator + price);

    return totalPrice.toLocaleString('en-US');
  };

  render() {
    const { orderData, totalPrice } = this.state;

    return (
      <div className="MiniCart">
        <div className="miniCartTitle">
          <h5>미니 장바구니</h5>
        </div>
        <div className="miniCartSubTitle">
          <h5>사용가능한 쿠폰이있습니다.</h5>
        </div>
        <OrderList orderData={orderData} />
        <div className="orderPrice">
          <span className="text">총 상품금액</span>
          <span className="totalPrice">{totalPrice}원</span>
        </div>
        <div className="orderDeliveryinfo">
          <span>배송비는 주문서에서 확인이 가능합니다.</span>
        </div>
        <div className="orderBuy">
          <button className="btn viewCart">장바구니 가기</button>
          <button className="btn checkout">바로구매</button>
        </div>
      </div>
    );
  }
}

export default MiniCart;
