import React, { Component } from 'react';
import { Config } from '../../config';

export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      checkOutUrl: Config[0].orders,
      token: Config[1].token,
      totalPrice: 0,
      totalItemQuantity: 0,
    };
  }

  componentDidMount() {
    this.getCartData();
  }

  getCartData = () => {
    const { checkOutUrl, token } = this.state;
    fetch(checkOutUrl, {
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
  render() {
    const { orderData, totalItemQuantity, totalPrice } = this.state;

    return (
      <div>
        <div className="Cart">
          <main className="cartInner">
            <h2 className="cartTitle">장바구니</h2>
            <div className="cartNumber">
              <span>{totalItemQuantity ? totalItemQuantity : 0}개 상품</span>
            </div>
            <div className="orderContainer">
              <div className="myCart">
                <div className="myCartList">hi</div>
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

export default Orders;
