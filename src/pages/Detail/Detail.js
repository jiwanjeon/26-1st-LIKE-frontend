import React, { Component } from 'react';
import DetailGallery from './DetailGallery/DetailGallery';
import DetailInfo from './DetailInfo/DetailInfo';
import { API } from '../../config';
import './Detail.scss';

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
      reviewsData: [],
      token: API.token,
      baseUrl: API.baseUrl,
    };
  }

  componentDidMount() {
    this.getDetailData();
    this.getReviewData();
  }

  getDetailData = () => {
    const { match } = this.props;
    const { baseUrl, token } = this.state;
    const product_id = match.params.id;
    const detailUrl = `${baseUrl}/products/details/${product_id}`;

    fetch(detailUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          detailData: data.results,
        });
      });
  };

  getReviewData = () => {
    const { match } = this.props;
    const { baseUrl, token } = this.state;
    const product_id = match.params.id;
    const reviewUrl = `${baseUrl}/reviews/${product_id}`;

    fetch(reviewUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewsData: data.result,
        });
      });
  };

  render() {
    const { detailData, reviewsData } = this.state;
    const {
      product_id,
      serial,
      title,
      sub_title,
      price,
      eco_friendly,
      size_quan,
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
            sizeAndQuan={size_quan}
            descriptionTitle={description_title}
            description={description}
            shown={current_color}
            reviewsData={reviewsData}
          />
        </main>
      </div>
    );
  }
}

export default Detail;
