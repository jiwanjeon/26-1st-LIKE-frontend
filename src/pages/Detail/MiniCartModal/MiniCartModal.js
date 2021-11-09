import React, { Component } from 'react';
import MiniCart from './MiniCart';
import './MiniCartModal.scss';

export class MiniCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.stopScroll();
  }

  componentWillUnmount() {
    this.scrollBack();
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
    this.scrollBack();
  };

  stopScroll = () => {
    const { isOpen } = this.state;
    if (isOpen) document.body.style.overflow = 'hidden';
  };

  scrollBack = () => {
    document.body.style.overflow = 'unset';
  };

  render() {
    const { isOpen } = this.state;
    return isOpen ? (
      <div className="MiniCartModal">
        <MiniCart />
        <div onClick={this.closeModal} className="miniCartOverlay" />
      </div>
    ) : null;
  }
}

export default MiniCartModal;
