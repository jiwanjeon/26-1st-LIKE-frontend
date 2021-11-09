import React, { Component } from 'react';
import DetailTitles from './DetailTitles/DetailTitles';
import DetailEcoFriendly from './DetailEcoFriendly/DetailEcoFriendly';
import SizeAndQuantitySelector from './SizeAndQuantitySelector/SizeAndQuantitySelector';
import DetailButtons from './DetailButtons/DetailButtons';
import DetailDescription from './DetailDescription/DetailDescription';
import DetailAccordions from './DetailAccordions/DetailAccordions';
import { CONFIG } from '../../../config';
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
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.jugJgM3JP9XFInnwQJbQt02wCRW_aUnWnv5HWNC0X_g';

    fetch(CONFIG[0].carts, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify({
        product_id: '7',
        size: '240',
        quantity: '1',
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
          <DetailButtons submitForms={this.submitForms} />
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
