import React, { Component } from 'react';
import SubMenuList from './SubMenu/SubMenuList';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

export class MenuItem extends Component {
  render() {
    const { categoryId, name, subMenuList } = this.props;

    return (
      <li className="MenuItem">
        <Link to={`/products/${categoryId}`}>
          <span>{name}</span>
        </Link>
        <div className="menuItemInner">
          <SubMenuList categoryId={categoryId} subMenuList={subMenuList} />
        </div>
      </li>
    );
  }
}

export default MenuItem;
