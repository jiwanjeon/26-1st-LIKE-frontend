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
    const { maxQuantity, selectQuantity } = this.props;

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
      this.setState(
        {
          quantity: Number(1),
        },
        () => {
          selectQuantity(Number(1));
        }
      );
    }
  };

  increment = () => {
    const { quantity } = this.state;
    const { maxQuantity } = this.props;
    const { selectQuantity } = this.props;

    if (quantity < maxQuantity) {
      this.setState(prevState => ({
        quantity: prevState.quantity + 1,
        // eslint-disable-next-line react/no-unused-state
        update: selectQuantity(prevState.quantity + 1),
      }));
    }
  };

  decrement = () => {
    const { quantity } = this.state;
    const { selectQuantity } = this.props;

    if (quantity > 1) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1,
        // eslint-disable-next-line react/no-unused-state
        update: selectQuantity(prevState.quantity - 1),
      }));
    }
  };

  resetQuantity = () => {
    const { selectQuantity } = this.props;

    this.setState({ quantity: 1 });
    selectQuantity(1);
  };

  render() {
    const { quantity } = this.state;
    const { maxQuantity } = this.props;

    return (
      <div className="DetailQuantity">
        <h2>수량</h2>
        <div className="quantitySelector">
          <input type="text" value={quantity} onChange={this.handleInput} />
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
