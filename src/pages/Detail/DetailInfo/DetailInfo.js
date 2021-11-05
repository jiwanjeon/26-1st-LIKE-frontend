import React, { Component } from 'react';
import DetailTitles from './DetailTitles/DetailTitles';
import DetailEcoFriendly from './DetailEcoFriendly/DetailEcoFriendly';
import DetailColor from './DetailColor/DetailColor';
import DetailSize from './DetailSize/DetailSize';
import DetailQuantity from './DetailQuantity/DetailQuantity';
import DetailButtons from './DetailButtons/DetailButtons';
import DetailDescription from './DetailButtons/DetailButtons';
import DetailAccordions from './DetailAccordions/DetailAccordions';
import './DetailInfo.scss';

export class DetailInfo extends Component {
  render() {
    const {
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
      <div className="DetailInfo">
        <div className="detailInfoWrap">
          <DetailTitles title={title} subTitle={subTitle} price={price} />
          <DetailEcoFriendly ecoFriendly={ecoFriendly} />
          <DetailColor colors={colors} />
          <DetailSize />
          <DetailQuantity maxQuantity={maxQuantity} />
          <DetailButtons />
          <DetailDescription
            descriptionHead={descriptionHead}
            description={description}
            serial={serial}
          />
          <DetailAccordions />
        </div>
      </div>
    );
  }
}

export default DetailInfo;
