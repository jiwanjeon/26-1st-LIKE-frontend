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
            <h2 className="cartTitle">장바구니</h2>
            <div className="cartNumber">
              <span>1개 상품</span>
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
                  <ul className="productCart">
                    <li className="productCard">
                      <div className="imageWrap">
                        <img
                          className="image"
                          src="https://picsum.photos/150/150"
                          alt="내가 선택한 상품"
                        />
                      </div>
                      <div className="productInfo">
                        <div className="title">
                          라이키 스포츠웨어 스포츠 에션셀+
                        </div>
                        <div className="serial">스타일: DH1034-004</div>
                        <div className="size">사이즈: 95(M)</div>
                        <div className="quantity">수량: 1</div>
                      </div>
                      <div className="optionWrap">옵션 변경</div>
                      <div className="totalPrice">89,000원</div>
                      <div className="deleteBtn">X</div>
                      <div />
                      <div className="btn-box">
                        <button className="btn">위시리스트에 추가</button>
                        <button className="btn">나중에 추가</button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="productCheckOut">
                  <div className="title">주문예정금액</div>
                  <div className="productInBox">
                    <div className="priceInfo">
                      <div className="itemPrice">
                        <span className="label">상품금액</span>
                        <span className="price">89000 원</span>
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
                        <span className="price">89000 원</span>
                      </div>
                      <button className="btn checkout">주문하기</button>
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

export default Cart;
