import React, { Component } from 'react';
import DetailGallery from './DetailGallery/DetailGallery';
import DetailInfo from './DetailInfo/DetailInfo';
import Nav from '../../components/Nav/Nav';
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
    fetch('/data/detail/detailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          detailData: data[0],
        });
      });
  }

  render() {
    const { detailData } = this.state;
    const {
      serial,
      title,
      sub_title,
      price,
      colors,
      eco_friendly,
      quantity,
      description_head,
      description,
      images,
    } = detailData;

    return (
      <>
        <Nav toggle={this.toggleLogin} />
        <div className="Detail">
          <main className="detailWrap">
            <DetailGallery image={images} />
            <DetailInfo
              serial={serial}
              title={title}
              subTitle={sub_title}
              price={price}
              colors={colors}
              ecoFriendly={eco_friendly}
              maxQuantity={quantity}
              descriptionHead={description_head}
              description={description}
            />
          </main>
        </div>
      </>
    );
  }
}

export default Detail;
