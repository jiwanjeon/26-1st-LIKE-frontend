import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderList from './OrderList/OrderList';
import { API } from '../../../../config';
import './MiniCart.scss';

export class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      cartUrl: API.carts,
      token: API.token,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.orderData();
  }

  orderData = () => {
    const { cartUrl, token } = this.state;

    fetch(cartUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          orderData: data.results,
          totalPrice: this.calculateTotal(data.results),
        });
      });
  };

  calculateTotal = orders => {
    const totalPrice = orders
      .map(order => Number(order.price) * Number(order.quantity))
      .reduce((accumulator, price) => accumulator + price, 0);

    return totalPrice.toLocaleString('en-US');
  };

  render() {
    const { orderData, totalPrice } = this.state;

    return (
      <div className="MiniCart">
        <div className="miniCartTitle">
          <h5>미니 장바구니</h5>
        </div>
        <div className="miniCartSubTitle">
          <h5>사용가능한 쿠폰이있습니다.</h5>
        </div>
        <OrderList orderData={orderData} />
        <div className="orderPrice">
          <span className="text">총 상품금액</span>
          <span className="totalPrice">{totalPrice}원</span>
        </div>
        <div className="orderDeliveryInfo">
          <span>배송비는 주문서에서 확인이 가능합니다.</span>
        </div>
        <div className="orderBuy">
          <Link to="/cart">
            <button className="btn viewCart">장바구니 가기</button>
          </Link>
          <button className="btn checkout">바로구매</button>
        </div>
      </div>
    );
  }
}

export default MiniCart;
