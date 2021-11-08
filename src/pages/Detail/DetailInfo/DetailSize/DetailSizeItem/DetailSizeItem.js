import React, { Component } from 'react';
import './DetailSizeItem.scss';

export class DetailSizeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  isSelected = size => {
    const { sizeName } = this.props;
    const { selected } = this.state;

    if (size === sizeName) {
      this.setState({
        selected: !selected,
      });
    }
  };

  getSizeAndQuantity = () => {
    const { setMaxQuantity, selectSize, maxQuantity, sizeName, clearSelected } =
      this.props;
    const available = maxQuantity !== 0;

    if (available) {
      setMaxQuantity(maxQuantity);
      selectSize(sizeName);
      clearSelected();
      this.isSelected(sizeName);
    }
  };

  render() {
    const { maxQuantity, sizeName } = this.props;
    const { selected } = this.state;
    const available = maxQuantity !== 0;

    return (
      <span
        onClick={this.getSizeAndQuantity}
        className={`DetailSizeItem ${selected && 'selected'} ${
          available && 'activate'
        }`}
      >
        {sizeName}
      </span>
    );
  }
}

export default DetailSizeItem;
