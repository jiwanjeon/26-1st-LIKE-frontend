import React, { Component } from 'react';
import MiniCart from './MiniCart';
import './MiniCartModal.scss';

export class MiniCartModal extends Component {
  componentDidMount() {
    this.stopScroll();
  }

  componentWillUnmount() {
    this.scrollBack();
  }

  toggleModal = () => {
    const { toggleMiniCart } = this.props;

    toggleMiniCart();
    this.scrollBack();
  };

  stopScroll = () => {
    const { isMiniCart } = this.props;
    if (isMiniCart) document.body.style.overflow = 'hidden';
  };

  scrollBack = () => {
    document.body.style.overflow = 'unset';
  };

  render() {
    const { isMiniCart } = this.props;

    return isMiniCart ? (
      <div className="MiniCartModal">
        <MiniCart />
        <div onClick={this.toggleModal} className="miniCartOverlay" />
      </div>
    ) : null;
  }
}

export default MiniCartModal;
