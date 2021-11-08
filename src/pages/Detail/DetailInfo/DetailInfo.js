import React, { Component } from 'react';
import DetailTitles from './DetailTitles/DetailTitles';
import DetailEcoFriendly from './DetailEcoFriendly/DetailEcoFriendly';
import SizeAndQuantitySelector from './SizeAndQuantitySelector/SizeAndQuantitySelector';
import DetailButtons from './DetailButtons/DetailButtons';
import DetailDescription from './DetailDescription/DetailDescription';
import DetailAccordions from './DetailAccordions/DetailAccordions';
import { URL } from '../../../config';
import './DetailInfo.scss';

export class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: '',
      selectedQuantity: 1,
    };
  }

  selectSize = sizeName => {
    this.setState({
      selectedSize: sizeName,
    });
  };

  selectQuantity = quantity => {
    this.setState({
      selectedQuantity: quantity,
    });
  };

  submitForms = () => {
    const { productId } = this.props;
    const { selectedSize, selectedQuantity } = this.state;

    fetch(URL[0].signUp, {
      method: 'POST',
      body: JSON.stringify({
        product_id: productId,
        size: selectedSize,
        quantity: selectedQuantity,
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
      <div className="DetailInfo">
        <div className="detailInfoWrap">
          <DetailTitles title={title} subTitle={subTitle} price={price} />
          <DetailEcoFriendly ecoFriendly={ecoFriendly} />
          <SizeAndQuantitySelector
            selectSize={this.selectSize}
            selectQuantity={this.selectQuantity}
            sizeNameAndQuantity={sizeNameAndQuantity}
          />
          <DetailButtons />
          <DetailDescription
            descriptionHead={descriptionTitle}
            description={description}
            serial={serial}
            shown={shown}
          />
          <DetailAccordions />
        </div>
      </div>
    );
  }
}

export default DetailInfo;
