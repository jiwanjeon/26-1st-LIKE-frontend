import React, { Component } from 'react';
import './SizeOption.scss';

export class SizeOption extends Component {
  pushSizeAndQuantity = () => {
    const { setMaxQuantity, selectSize, maxQuantity, sizeName } = this.props;
    const available = maxQuantity !== 0;

    if (available) {
      setMaxQuantity(maxQuantity);
      selectSize(sizeName);
    }
  };

  render() {
    const { maxQuantity, sizeName, selectedSize } = this.props;
    const available = maxQuantity !== 0;
    const selected = selectedSize === sizeName;

    return (
      <span
        onClick={this.pushSizeAndQuantity}
        className={`SizeOption ${selected && 'selected'} ${
          available && 'activate'
        }`}
      >
        {sizeName}
      </span>
    );
  }
}

export default SizeOption;
