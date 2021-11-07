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
    const { sizeNameAndQuantity } = this.props;
    const { maxQuantity, selectedSize } = this.state;

    return (
      <>
        <div className="DetailSize">
          <h2>사이즈 선택</h2>
          <div className="sizeList">
            {sizeNameAndQuantity &&
              sizeNameAndQuantity.map((list, index) => (
                <DetailSizeItem
                  key={index + 1}
                  setMaxQuantity={this.setSizeAndQuantity}
                  maxQuantity={list.quantity}
                  sizeName={list.sizeName}
                  selectedSize={selectedSize}
                  clearSelected={this.clearSelected}
                  selectSize={this.selectSize}
                />
              ))}
          </div>
        </div>
        <DetailQuantity
          ref={this.detailQuantity}
          maxQuantity={maxQuantity}
          selectQuantity={this.selectQuantity}
        />
      </>
    );
  }
}

export default DetailSize;
