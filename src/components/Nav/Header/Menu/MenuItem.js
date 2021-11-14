import React, { Component } from 'react';
import SubMenuList from './SubMenu/SubMenuList';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

export class MenuItem extends Component {
  categoryName = categoryId => {
    if (categoryId === 1) return 'new';
    if (categoryId === 2) return 'shoes';
    if (categoryId === 3) return 'clothing';
    if (categoryId === 4) return 'sports';
    if (categoryId === 5) return 'supply';
    if (categoryId === 6) return 'brand';
  };

  render() {
    const { categoryId, name, subMenuList } = this.props;

    return (
      <li className="MenuItem">
        <Link to={`/products/${this.categoryName(categoryId)}`}>
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
