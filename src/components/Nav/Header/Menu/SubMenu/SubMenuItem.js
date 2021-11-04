import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubMenuItem.scss';

export class SubMenuItem extends Component {
  render() {
    const { id, name, menuName } = this.props;

    return (
      <li className="SubMenuItem">
        <Link to={`/product/${menuName}/${id}`}>{name}</Link>
      </li>
    );
  }
}

export default SubMenuItem;
