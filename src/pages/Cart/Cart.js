import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductCart from './ProductCart/ProductCart';
import { Config } from '../../config';
import './Cart.scss';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      checkOutUrl: Config[0].orders,
      cartUrl: Config[0].carts,
      token: Config[1].token,
    };
  }

  componentDidMount() {
    this.getCartData();
  }

  getCartData = () => {
    const { cartUrl, token } = this.state;
    fetch(cartUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          this.setState({
            orderData: data.results,
            totalPrice: this.calculateTotal(data.results),
            totalItemQuantity: data.results.length,
          });
        } else {
          alert('장바구니가 비었습니다!');
        }
      });
  };

  calculateTotal = orders => {
    const totalPrice = orders
      .map(order => Number(order.price) * Number(order.quantity))
      .reduce((accumulator, price) => accumulator + price);

    return totalPrice.toLocaleString('en-US');
  };

  deleteCartItem = (orderId, orderItem) => {
    const { cartUrl, token } = this.state;

    fetch(cartUrl, {
      method: 'DELETE',
      headers: { Authorization: token },
      body: JSON.stringify({
        cart_id: orderId,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert(`${orderItem}를(을) 카트에서 삭제했습니다!`);
          this.getCartData();
        }
      });
  };

  goToOrders = () => {
    this.props.history.push('/orders');
  };

  checkOutCart = () => {
    const { checkOutUrl, orderData, token } = this.state;

    fetch(checkOutUrl, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        order: orderData,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') this.goToOrders();
      });
  };
  render() {
    const { orderData, totalItemQuantity, totalPrice } = this.state;

    return (
      <div>
        <Nav />
        <div className="Cart">
          <main className="cartInner">
            <h2 className="cartTitle">장바구니</h2>
            <div className="cartNumber">
              <span>{totalItemQuantity ? totalItemQuantity : 0}개 상품</span>
            </div>
            <div className="cartContainer">
              <div className="info">
                사용 가능한 쿠폰이 있습니다
                <br />
                아래 프로모 코드란에 입력하여 사용해주세요
              </div>
              <div className="myCart">
                <div className="myCartList">
                  <div className="productSelectAll">전체삭제</div>
                  <ProductCart
                    orderData={orderData}
                    deleteCartItem={this.deleteCartItem}
                  />
                </div>
                <div className="myCartCheckOut">
                  <div className="checkoutList">
                    <div className="title">주문예정금액</div>
                    <div className="productInBox">
                      <div className="priceInfo">
                        <div className="itemPrice">
                          <span className="label">상품금액</span>
                          <span className="price">
                            {totalPrice ? totalPrice : 0} 원
                          </span>
                        </div>
                        <div className="deliveryPrice">
                          <span className="label">예상 배송비</span>
                          <span className="price">0 원</span>
                        </div>
                        <div className="salePrice">
                          <span className="label">상품 할인 금액</span>
                          <span className="price">0 원</span>
                        </div>
                        <div className="salePrice">
                          <span className="label">주문 할인 금액</span>
                          <span className="price">0 원</span>
                        </div>
                        <div className="totalPrice">
                          <span className="label">총 결제 예정 금액</span>
                          <span className="price">
                            {totalPrice ? totalPrice : 0}원
                          </span>
                        </div>
                        <button
                          onClick={this.checkOutCart}
                          className="btn checkout"
                        >
                          주문하기
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="promoList">
                    <ul className="offerList">
                      <li className="offerItem">
                        <div className="marketingInfo">
                          *오퍼코드:
                          <span className="code">welcome2like2021</span>
                        </div>
                        <div className="subeMarketingInfo">
                          *사용 가능한 신규가입 쿠폰이 있습니다. (1만원 할인
                          적용되어 장바구니 전체에 5만원 이상 구매 시
                          적용됩니다.)
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Cart;
