import React, { Component } from 'react';
import SizeAndQuantitySelector from './SizeAndQuantitySelector/SizeAndQuantitySelector';
import DetailButtons from './DetailButtons/DetailButtons';
import DetailAccordions from './DetailAccordions/DetailAccordions';
import MiniCartModal from './MiniCartModal/MiniCartModal';
import DetailTitles from './DetailInfos/DetailTitles/DetailTitles';
import DetailEcoFriendly from './DetailInfos/DetailEcoFriendly/DetailEcoFriendly';
import DetailDescription from './DetailInfos/DetailDescription/DetailDescription';
import { Config } from '../../../config';
import './DetailInfo.scss';

export class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartUrl: Config[0].carts,
      token: Config[1].token,
      sizeName: '',
      quantity: 1,
      maxQuantity: 1,
      isMiniCart: false,
    };
  }

  setSizeAndQuantity = quantity => {
    this.setState({
      maxQuantity: quantity,
    });
    this.resetQuantity();
  };

  selectSize = sizeName => {
    this.setState({
      sizeName: sizeName,
    });
  };

  handleQuantityInput = e => {
    const numberOnly = /^[0-9\b]+$/;
    const { value } = e.target;
    const { maxQuantity } = this.state;
    const { selectQuantity } = this.props;

    if (numberOnly.test(value)) {
      this.setState(
        {
          quantity: Number(value),
        },
        () => {
          selectQuantity(Number(value));
        }
      );
    }

    if (value === '' || value < maxQuantity || value > maxQuantity) {
      selectQuantity(Number(1));
      this.setState({ quantity: Number(1) });
    }
  };

  incrementQuantity = () => {
    const { maxQuantity, quantity } = this.state;

    if (quantity < maxQuantity) {
      this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    }
  };

  decrementQuantity = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  resetQuantity = () => {
    this.setState({ quantity: 1 });
  };

  addToCart = () => {
    const { cartUrl, token } = this.state;
    const { productId } = this.props;
    const { sizeName, quantity } = this.state;

    if (sizeName === '') {
      alert('사이즈를 선택해주세요!');
    }

    fetch(cartUrl, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        product_id: productId,
        size: sizeName,
        quantity: quantity,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') this.toggleMiniCart();
      });
  };

  toggleMiniCart = () => {
    const { isMiniCart } = this.state;
    this.setState({ isMiniCart: !isMiniCart });
  };

  render() {
    const {
      serial,
      title,
      subTitle,
      price,
      ecoFriendly,
      sizeAndQuan,
      descriptionTitle,
      description,
      shown,
      reviewsData,
    } = this.props;
    const { isMiniCart, sizeName, quantity, maxQuantity } = this.state;

    return (
      <>
        <div className="DetailInfo">
          <div className="detailInfoWrap">
            <DetailTitles title={title} subTitle={subTitle} price={price} />
            <DetailEcoFriendly ecoFriendly={ecoFriendly} />
            <SizeAndQuantitySelector
              sizeAndQuan={sizeAndQuan}
              setSizeAndQuantity={this.setSizeAndQuantity}
              selectSize={this.selectSize}
              selectedSizeName={sizeName}
              handleQuantityInput={this.handleQuantityInput}
              incrementQuantity={this.incrementQuantity}
              decrementQuantity={this.decrementQuantity}
              selectQuantity={this.selectQuantity}
              maxQuantity={maxQuantity}
              quantity={quantity}
            />
            <DetailButtons addToCart={this.addToCart} />
            <DetailDescription
              descriptionTitle={descriptionTitle}
              description={description}
              serial={serial}
              shown={shown}
            />
            <DetailAccordions reviewsData={reviewsData} />
          </div>
        </div>
        <MiniCartModal
          isMiniCart={isMiniCart}
          toggleMiniCart={this.toggleMiniCart}
        />
      </>
    );
  }
}

export default DetailInfo;
