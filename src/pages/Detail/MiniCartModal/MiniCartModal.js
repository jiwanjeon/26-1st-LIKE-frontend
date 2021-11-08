import React, { Component } from 'react';
import MiniCart from './MiniCart';
import './MiniCartModal.scss';

export class MiniCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.stopScrollBackground();
  }

  scrollBackground = () => {
    document.body.style.overflow = 'unset';
  };

  stopScrollBackground = () => {
    const { open } = this.state;
    if (open) document.body.style.overflow = 'hidden';
  };

  close = () => {
    this.setState({
      open: false,
    });
    this.scrollBackground();
  };

  render() {
    const { open } = this.state;
    return (
      open && (
        <div className="MiniCartModal">
          <MiniCart />
          <div onClick={this.close} className="miniCartOverlay" />
        </div>
      )
    );
  }
}

export default MiniCartModal;
