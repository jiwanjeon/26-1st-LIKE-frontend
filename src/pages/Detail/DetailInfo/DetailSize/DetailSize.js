import React, { Component } from 'react';
import DetailSizeItem from './DetailSizeItem/DetailSizeItem';
import DetailQuantity from './DetailQuantity/DetailQuantity';
import './DetailSize.scss';

export class DetailSize extends Component {
  constructor(props) {
    super(props);
    this.detailQuantity = React.createRef();
    this.state = {
      selectedSize: '',
      maxQuantity: 1,
    };
  }
  setSizeAndQuantity = quantity => {
    this.setState({
      maxQuantity: quantity,
    });
    this.resetQuantity();
  };

  selectSize = sizeName => {
    const { selectSize } = this.props;
    selectSize(sizeName);
  };

  clearSelected = () => {};

  selectQuantity = quantity => {
    const { selectQuantity } = this.props;
    selectQuantity(quantity);
  };

  resetQuantity = () => {
    this.detailQuantity.current.resetQuantity();
  };

  render() {
    const { sizeQan } = this.props;
    const { maxQuantity, selectedSize } = this.state;

    return (
      <>
        <div className="DetailSize">
          <h2>사이즈 선택</h2>
          <div className="sizeList">
            {sizeQan &&
              sizeQan.map((el, index) => (
                <DetailSizeItem
                  key={index + 1}
                  sizeName={el.sizeName}
                  maxQuantity={el.quantity}
                  selectedSize={selectedSize}
                  setMaxQuantity={this.setSizeAndQuantity}
                  selectSize={this.selectSize}
                  clearSelected={this.clearSelected}
                />
              ))}
          </div>
        </div>
        <DetailQuantity
          selectQuantity={this.selectQuantity}
          maxQuantity={maxQuantity}
          ref={this.detailQuantity}
        />
      </>
    );
  }
}

export default DetailSize;
