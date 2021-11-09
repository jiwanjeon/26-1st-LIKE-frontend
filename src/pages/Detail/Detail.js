import React, { Component } from 'react';
import DetailGallery from './DetailGallery/DetailGallery';
import DetailInfo from './DetailInfo/DetailInfo';

import { Config } from '../../config';
import './Detail.scss';

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
    };
  }

  componentDidMount() {
    this.detailData();
  }

  detailData() {
    const detailUrl = Config[0].detail;
    const token = Config[1].token;

    fetch(detailUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          detailData: data.results,
        });
      });
  }

  render() {
    const { detailData } = this.state;
    const {
      product_id,
      serial,
      title,
      sub_title,
      price,
      eco_friendly,
      size_qan,
      description_title,
      description,
      product_images,
      current_color,
    } = detailData;

    return (
      <div className="Detail">
        <main className="detailInner">
          <DetailGallery image={product_images} />
          <DetailInfo
            productId={product_id}
            serial={serial}
            title={title}
            subTitle={sub_title}
            price={price}
            ecoFriendly={eco_friendly}
            sizeNameAndQuantity={size_qan}
            descriptionTitle={description_title}
            description={description}
            shown={current_color}
          />
        </main>
      </div>
    );
  }
}

export default Detail;
