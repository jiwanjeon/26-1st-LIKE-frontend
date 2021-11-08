import React, { Component } from 'react';
import DetailTitles from './DetailTitles/DetailTitles';
import DetailEcoFriendly from './DetailEcoFriendly/DetailEcoFriendly';
import DetailSize from './DetailSize/DetailSize';
import DetailButtons from './DetailButtons/DetailButtons';
import DetailDescription from './DetailDescription/DetailDescription';
import DetailAccordions from './DetailAccordions/DetailAccordions';
import { URL } from '../../../config';
import './DetailInfo.scss';

export class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
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
    const { selectedSize, selectedQuantity } = this.state;
    const { title, serial, price } = this.props;

    fetch(URL[0].signUp, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        serial: serial,
        sizeName: selectedSize,
        quantity: selectedQuantity,
        price: price,
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
          <DetailSize
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
