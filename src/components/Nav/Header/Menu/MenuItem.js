import React, { Component } from 'react';
import SubMenuList from './SubMenu/SubMenuList';
import { Link } from 'react-router-dom';
import './MunuItem.scss';

export class MenuItem extends Component {
  render() {
    const { id, name, subMenuList } = this.props;

    return (
      <li className="MenuItem">
        <Link to={`/product/${id}`}>
          <span>{name}</span>
        </Link>
        <div className="menuItemInner">
          <SubMenuList menuName={id} subMenulist={subMenuList} />
        </div>
      </li>
    );
  }
}

export default MenuItem;
