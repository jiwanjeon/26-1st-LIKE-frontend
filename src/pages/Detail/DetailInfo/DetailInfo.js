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
      isMiniCart: false,
    };
  }

  selectSize = sizeName => {
    this.setState({
      sizeName: sizeName,
    });
  };

  selectQuantity = quantity => {
    this.setState({
      quantity: quantity,
    });
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
    } = this.props;
    const { isMiniCart } = this.state;

    return (
      <>
        <div className="DetailInfo">
          <div className="detailInfoWrap">
            <DetailTitles title={title} subTitle={subTitle} price={price} />
            <DetailEcoFriendly ecoFriendly={ecoFriendly} />
            <SizeAndQuantitySelector
              selectSize={this.selectSize}
              selectQuantity={this.selectQuantity}
              sizeAndQuan={sizeAndQuan}
            />
            <DetailButtons addToCart={this.addToCart} />
            <DetailDescription
              descriptionTitle={descriptionTitle}
              description={description}
              serial={serial}
              shown={shown}
            />
            <DetailAccordions />
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
