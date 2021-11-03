import React, { Component } from 'react';
import SubMenuList from './SubMenu/SubMenuList';
import './MunuItem.scss';

export class MenuItem extends Component {
  render() {
    const { name, list } = this.props;

    return (
      <li className="MenuItem">
        <span>{name}</span>
        <SubMenuList list={list} />
      </li>
    );
  }
}

export default MenuItem;
