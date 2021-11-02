import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import TCLogin from '../../components/TestComp/TCLogin';
import './Detail.scss';

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      loginModal: false,
    };
  }

  handleInput = e => {
    const re = /^[0-9\b]+$/;
    const { value } = e.target;

    if (re.test(value)) {
      this.setState({ quantity: Number(value) });
    }
    if (value === '') {
      this.setState({ quantity: Number(1) });
    }
  };

  increment = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  };

  decrement = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  toggleLogin = () => {
    const { loginModal } = this.state;
    this.setState({
      loginModal: !loginModal,
    });
  };

  render() {
    const { loginModal, quantity } = this.state;
    return (
      <>
        <Nav toggle={this.toggleLogin} />
        {loginModal ? <TCLogin toggle={this.toggleLogin} /> : null}
        <div className="detailPage">
          <main className="detailWrap">
            <div className="detailGallery">
              <ul className="detailGalleryWrap">
                <li>
                  <img src="https://picsum.photos/300/300" alt="temp" />
                </li>
                <li>
                  <img src="https://picsum.photos/300/300" alt="temp" />
                </li>
                <li>
                  <img src="https://picsum.photos/300/300" alt="temp" />
                </li>
                <li>
                  <img src="https://picsum.photos/300/300" alt="temp" />
                </li>
                <li>
                  <img src="https://picsum.photos/300/300" alt="temp" />
                </li>
                <li>
                  <img src="https://picsum.photos/300/300" alt="temp" />
                </li>
              </ul>
            </div>
            <div className="detailInfo">
              <div className="detailInfoWrap">
                <div className="preInfo">
                  <span className="subTitle">여성 신발 라이프 스타일</span>
                  <span className="price">119,000원</span>
                </div>
                <div>
                  <h1 className="title">라이키 와플 트레이너 2</h1>
                </div>
                <div className="colors">
                  <div className="colorList">빨강, 노랑, 파랑</div>
                </div>
                <div className="sizes">
                  <h2>사이즈 선택</h2>
                  <div className="sizeList">
                    <span className="input-ratio">123</span>
                    <span className="input-ratio">234</span>
                    <span className="input-ratio">323</span>
                    <span className="input-ratio">123</span>
                    <span className="input-ratio">442</span>
                    <span className="input-ratio">890</span>
                    <span className="input-ratio">445</span>
                    <span className="input-ratio">345</span>
                    <span className="input-ratio">153</span>
                    <span className="input-ratio">889</span>
                  </div>
                </div>
                <div className="quantity">
                  <h2>수량</h2>
                  <div className="quantitySelector">
                    <input
                      pattern="[0-9]*"
                      type="text"
                      value={quantity}
                      onChange={this.handleInput}
                    />
                    <button onClick={this.decrement} className="btn decrement">
                      -
                    </button>
                    <button onClick={this.increment} className="btn increment">
                      +
                    </button>
                  </div>
                </div>
                <div className="btnGroup">
                  <button className="btn order">바로구매</button>
                  <button className="btn addcart">장바구니</button>
                  <button className="btn wishlist">위시리스트</button>
                </div>
                <div className="description">
                  <p>계절에 어울리는 스타일.</p>
                  <br />
                  <p>
                    나이키 와플 트레이너 2는 나이키 러닝화의 오리지널 스타일에
                    계절의 변화에서 영감을 받은 디테일을 더해 제작되었습니다.
                    차분한 색상과 부드러운 액센트, 시원한 날씨에 알맞은 소재로
                    이루어진 전설적인 디자인이 운동화에 좋은 분위기를
                    불어넣어줍니다.
                  </p>
                  현재 컬러 : 트와인/세일/게임 로열/폴른
                  <br />
                  스타일 : DO2372-737
                </div>
                <div className="uk-accordion">
                  <h2>고객안내</h2>
                </div>
                <div className="uk-accordion">
                  <h2>리뷰</h2>
                </div>
                <div className="uk-accordion">
                  <h2>배송</h2>
                </div>
                <div className="uk-accordion">
                  <h2>반품/AS</h2>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Detail;
