import React, { Component } from 'react';
import './DetailQuantity.scss';

export class DetailQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleInput = e => {
    const numberOnly = /^[0-9\b]+$/;
    const { value } = e.target;

    if (numberOnly.test(value)) {
      this.setState({ quantity: Number(value) });
    }
    if (!value) {
      this.setState({ quantity: Number(1) });
    }
  };

  increment = () => {
    const { quantity } = this.state;
    const { maxQuantity } = this.props;

    if (quantity < maxQuantity) {
      this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    }
  };

  decrement = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  render() {
    const { quantity } = this.state;
    const { maxQuantity } = this.props;

    return (
      <div className="DetailQuantity">
        <h2>수량</h2>
        <div className="quantitySelector">
          <input
            pattern="[0-9]*"
            type="text"
            value={quantity}
            onChange={this.handleInput}
          />
          <button
            onClick={this.decrement}
            className={`btn decrement ${quantity === 1 && 'deactivate'}`}
          >
            -
          </button>
          <button
            onClick={this.increment}
            className={`btn increament ${
              quantity === maxQuantity && 'deactivate'
            }`}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default DetailQuantity;
