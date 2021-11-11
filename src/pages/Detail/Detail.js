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
      reviewsData: [],
      token: Config[1].token,
    };
  }

  componentDidMount() {
    this.getDetailData();
    this.getReviewData();
  }

  getDetailData = () => {
    const { match } = this.props;
    const { token } = this.state;
    const product_id = match.params.id;
    const detailUrl = `http://10.58.7.7:8000/products/details/${product_id}`;

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
    const { token } = this.state;
    const product_id = match.params.id;
    const reviewUrl = `http://10.58.7.7:8000/reviews/${product_id}`;

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
