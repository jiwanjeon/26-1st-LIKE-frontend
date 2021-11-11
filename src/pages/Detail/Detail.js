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

  detailMockUp() {
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

  detailData() {
    const { match } = this.props;
    const product_id = match.params.id;
    const detailUrl = `http://10.58.6.96:8000/products/details/${product_id}`;
    const token = Config[1].token;

    fetch('/data/details/detailsData.json', {
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
          />
        </main>
      </div>
    );
  }
}

export default Detail;
