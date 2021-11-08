import React, { Component } from 'react';
import SizeOption from './SizeOption/SizeOption';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import './SizeAndQuantitySelector.scss';

export class SizeAndQuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: '',
      maxQuantity: 1,
      quantity: 1,
    };
  }

  handleInput = e => {
    const numberOnly = /^[0-9\b]+$/;
    const { value } = e.target;
    const { maxQuantity } = this.state;
    const { selectQuantity } = this.props;

    if (numberOnly.test(value)) {
      this.setState(
        {
          quantity: Number(value),
        },
        () => {
          selectQuantity(Number(value));
        }
      );
    }

    if (value === '' || value < maxQuantity || value > maxQuantity) {
      selectQuantity(Number(1));
      this.setState({ quantity: Number(1) });
    }
  };

  increment = () => {
    const { maxQuantity, quantity } = this.state;
    const { selectQuantity } = this.props;

    if (quantity < maxQuantity) {
      this.setState(prevState => {
        selectQuantity(prevState.quantity + 1);
        return { quantity: prevState.quantity + 1 };
      });
    }
  };

  decrement = () => {
    const { maxQuantity, quantity } = this.state;
    const { selectQuantity } = this.props;

    if (quantity < maxQuantity) {
      this.setState(prevState => {
        selectQuantity(prevState.quantity + 1);
        return { quantity: prevState.quantity + 1 };
      });
    }
  };

  resetQuantity = () => {
    const { selectQuantity } = this.props;
    this.setState({ quantity: 1 });
    selectQuantity(1);
  };

  setSizeAndQuantity = quantity => {
    this.setState({
      maxQuantity: quantity,
    });
    this.resetQuantity();
  };

  selectSize = sizeName => {
    const { selectSize } = this.props;
    selectSize(sizeName);
    this.setState({ selectedSize: sizeName });
  };

  selectQuantity = quantity => {
    const { selectQuantity } = this.props;
    selectQuantity(quantity);
  };

  render() {
    const { sizeNameAndQuantity } = this.props;
    const { maxQuantity, selectedSize, quantity } = this.state;

    return (
      <>
        <div className="SizeAndQuantitySelector">
          <h2>사이즈 선택</h2>
          <div className="sizeList">
            {sizeNameAndQuantity &&
              sizeNameAndQuantity.map((list, index) => (
                <SizeOption
                  key={index + 1}
                  setMaxQuantity={this.setSizeAndQuantity}
                  maxQuantity={list.quantity}
                  sizeName={list.sizeName}
                  selectedSize={selectedSize}
                  selectSize={this.selectSize}
                />
              ))}
          </div>
        </div>
        <QuantitySelector
          maxQuantity={maxQuantity}
          selectQuantity={this.selectQuantity}
          handleInput={this.handleInput}
          increment={this.increment}
          decrement={this.decrement}
          selectedQuantity={quantity}
        />
      </>
    );
  }
}

export default SizeAndQuantitySelector;
