import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';
import './SubMenuList.scss';

export class SubMenuList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="subMenu">
        <div className="inner">
          <ul className="subMenuList">
            {list.map((item, id) => (
              <SubMenuItem key={id + 1} name={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenuList;
