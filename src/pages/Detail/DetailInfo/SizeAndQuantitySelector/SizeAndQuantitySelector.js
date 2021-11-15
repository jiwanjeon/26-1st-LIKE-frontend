import React, { Component } from 'react';
import SizeOption from './SizeOption/SizeOption';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import './SizeAndQuantitySelector.scss';

export class SizeAndQuantitySelector extends Component {
  render() {
    const {
      sizeAndQuan,
      setSizeAndQuantity,
      selectedSizeName,
      selectSize,
      maxQuantity,
      handleQuantityInput,
      incrementQuantity,
      decrementQuantity,
      quantity,
    } = this.props;

    return (
      <>
        <div className="SizeAndQuantitySelector">
          <h2>사이즈 선택</h2>
          <div className="sizeList">
            {sizeAndQuan &&
              sizeAndQuan.map((product, index) => (
                <SizeOption
                  key={index + 1}
                  setMaxQuantity={setSizeAndQuantity}
                  maxQuantity={product.quantity}
                  sizeName={product.sizeName}
                  selectedSizeName={selectedSizeName}
                  selectSize={selectSize}
                />
              ))}
          </div>
        </div>
        <QuantitySelector
          maxQuantity={maxQuantity}
          handleInput={handleQuantityInput}
          increment={incrementQuantity}
          decrement={decrementQuantity}
          quantity={quantity}
        />
      </>
    );
  }
}

export default SizeAndQuantitySelector;
