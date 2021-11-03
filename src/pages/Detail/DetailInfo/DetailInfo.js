import React, { Component } from 'react';
import ColorItem from './ColorItem';
import './DetailInfo.scss';

export class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleInput = e => {
    const numberOnly = /^[0-9\b]+$/;
    const { value } = e.target;

    if (numberOnly.test(value)) {
      this.setState({ quantity: Number(value) });
    }
    if (!value) {
      this.setState({ quantity: Number(1) });
    }
  };

  increment = () => {
    const { quantity } = this.state;
    const { maxQuantity } = this.props;

    if (quantity < maxQuantity) {
      this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    }
  };

  decrement = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  formatNumber = number => {
    return Number(number).toLocaleString('en-US');
  };

  render() {
    const { quantity } = this.state;
    const {
      id,
      serial,
      title,
      subTitle,
      price,
      colors,
      ecoFriendly,
      maxQuantity,
      descriptionHead,
      description,
    } = this.props;

    return (
      <div key={id} className="detailInfo">
        <div className="detailInfoWrap">
          <div className="preInfo">
            <span className="subTitle">{subTitle}</span>
            <span className="price">{`${this.formatNumber(price)}원`}</span>
          </div>
          <div>
            <h1 className="title">{title}</h1>
          </div>
          {ecoFriendly ? <div className="ecoFriendly">친환경 소재</div> : null}
          <div className="colors">
            <div className="colorList">
              {colors &&
                colors.map((colors, index) => (
                  <ColorItem key={index + 1} color={colors} />
                ))}
            </div>
          </div>
          <div className="sizes">
            <h2>사이즈 선택</h2>
            <div className="sizeList">
              <span className="input-ratio">250</span>
              <span className="input-ratio">255</span>
              <span className="input-ratio">260</span>
              <span className="input-ratio">265</span>
              <span className="input-ratio">270</span>
              <span className="input-ratio">275</span>
              <span className="input-ratio">280</span>
              <span className="input-ratio">285</span>
              <span className="input-ratio">290</span>
              <span className="input-ratio">295</span>
              <span className="input-ratio">300</span>
              <span className="input-ratio">305</span>
              <span className="input-ratio">310</span>
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
              <button
                onClick={this.decrement}
                className={`btn decrement ${quantity === 1 && 'deactivate'}`}
              >
                -
              </button>
              <button
                onClick={this.increment}
                className={`btn increament ${
                  quantity === maxQuantity && 'deactivate'
                }`}
              >
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
            <p>{descriptionHead}</p>
            <br />
            <p>{description}</p>
            <br />
            현재 컬러 : 트와인/세일/게임 로열/폴른
            <br />
            스타일 : {serial}
            <br />
            <br />
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
    );
  }
}

export default DetailInfo;
