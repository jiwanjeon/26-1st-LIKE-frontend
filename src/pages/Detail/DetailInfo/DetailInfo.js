import React, { Component } from 'react';
import DetailTitles from './DetailTitles/DetailTitles';
import DetailEcoFriendly from './DetailEcoFriendly/DetailEcoFriendly';
import SizeAndQuantitySelector from './SizeAndQuantitySelector/SizeAndQuantitySelector';
import DetailButtons from './DetailButtons/DetailButtons';
import DetailDescription from './DetailDescription/DetailDescription';
import DetailAccordions from './DetailAccordions/DetailAccordions';
import MiniCartModal from '../MiniCartModal/MiniCartModal';
import { Config } from '../../../config';
import './DetailInfo.scss';

export class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeName: '',
      quantity: 1,
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
    const cartUrl = Config[0].carts;
    const token = Config[1].token;
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
        if (result.message === 'GOOD') this.openMiniCartModal();
      });
  };

  render() {
    const {
      serial,
      title,
      subTitle,
      price,
      ecoFriendly,
      sizeNameAndQuantity,
      descriptionTitle,
      description,
      shown,
    } = this.props;

    return (
      <>
        <div className="DetailInfo">
          <div className="detailInfoWrap">
            <DetailTitles title={title} subTitle={subTitle} price={price} />
            <DetailEcoFriendly ecoFriendly={ecoFriendly} />
            <SizeAndQuantitySelector
              selectSize={this.selectSize}
              selectQuantity={this.selectQuantity}
              sizeNameAndQuantity={sizeNameAndQuantity}
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
        <MiniCartModal />
      </>
    );
  }
}

export default DetailInfo;
