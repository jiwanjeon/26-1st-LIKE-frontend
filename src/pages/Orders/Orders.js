import React, { Component } from 'react';
import OrderList from '../Detail/DetailInfo/MiniCartModal/OrderList/OrderList';
import { Config } from '../../config';
import './Orders.scss';
export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      checkOutUrl: Config[0].orders,
      token: Config[1].token,
      totalPrice: 0,
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
        this.setState({
          orderData: data.results,
          totalPrice: this.calculateTotal(data.results),
        });
      });
  };

  calculateTotal = orders => {
    const totalPrice = orders
      .map(order => Number(order.price) * Number(order.quantity))
      .reduce((accumulator, price) => accumulator + price);

    return totalPrice.toLocaleString('en-US');
  };

  render() {
    const { orderData, totalPrice } = this.state;

    return (
      <div>
        <div className="Orders">
          <main className="ordersInner">
            <h2 className="ordersTitle">주문완료</h2>
            <div className="orderContainer">
              <div className="orderInfos">
                <div className="messeageBox">
                  <div className="projectEndingCredit">
                    <div className="congrates">
                      ❤️지은, 지완, 유진, 봉철, 연수님 라이키팀 2주 동안 고생
                      많으셨습니다❤️ <br />
                    </div>
                    <div className="andThankYou">
                      도와주신 여러 친구, 멘토님들께 감사드립니다
                      <br />
                      🙇
                    </div>
                    <br />
                    <div className="teamLike">
                      <img
                        className="wholeTeamShot"
                        src="/images/teamLike2021.jpg"
                        alt="2021년 11월 1일 ~ 12일 위코드 26기 4팀 라이키 | 나이키 클로닝프로젝트"
                      />
                    </div>
                  </div>
                  <span className="completeMesseage">
                    주문이 완료되었습니다! 감사합니다.
                  </span>
                  <br />
                  <span className="deliveryMesseage">
                    배송이 시작되면 SMS, 이메일로 배송정보가 안내됩니다.
                    <br />
                    상품이 출고되는 장소가 여러 곳일 경우, 택배 상자가 분리되어
                    발송될 수 있습니다.
                  </span>
                </div>

                <div className="link">홈으로 가기 | 주문 내역 조회하기</div>
                <div className="userInfo">
                  <div className="title">주문고객</div>
                  <br />
                  <div className="info">
                    {orderData[0] && orderData[0].user_name} <br />
                    {orderData[0] && orderData[0].user_email} <br />
                    {orderData[0] && orderData[0].user_phone_number}
                  </div>
                </div>
                <div className="deliveryInfo">
                  <div className="title">배송정보</div> <br />
                  <div className="info">
                    팀 라이키
                    <br />
                    010-6334-1723 <br />
                    서울시 강남구 선릉 <br />
                    부재시 관리실에 맡겨주세요!
                  </div>
                </div>
              </div>
              <div className="myOrdersCheckOut">
                <div className="checkOutList">
                  <h5 className="title">주문내역</h5>
                  <OrderList type="orderPage" orderData={orderData} />
                  <div className="productInBox">
                    <div className="priceInfo">
                      <div className="itemPrice priceList">
                        <span className="label">상품금액</span>
                        <span className="price">{totalPrice} 원</span>
                      </div>
                      <div className="deliveryPrice priceList">
                        <span className="label">배송비</span>
                        <span className="price">0 원</span>
                      </div>
                      <div className="salePrice priceList">
                        <span className="label">상품 할인 금액</span>
                        <span className="price">0 원</span>
                      </div>
                      <div className="salePrice priceList">
                        <span className="label">주문 할인 금액</span>
                        <span className="price">0 원</span>
                      </div>
                      <div className="totalPrice priceList">
                        <span className="label">총 결제 금액</span>
                        <span className="price">{totalPrice}원</span>
                      </div>
                    </div>
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
