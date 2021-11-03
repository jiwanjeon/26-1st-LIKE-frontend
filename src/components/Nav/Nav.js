import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuList from './Menu/MenuList';
import {
  MdSearch,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingBag,
} from 'react-icons/md';
import './Nav.scss';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesData();
  }

  getCategoriesData() {
    fetch('./data/ysLim/navCategories2.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data,
        });
      });
  }

  render() {
    const { toggle } = this.props;
    const { categories } = this.state;

    return (
      <header className="Nav">
        <div className="preHeader">
          <ul>
            <li>고객센터</li>
            <li>맴버가입</li>
            <li onClick={toggle}>로그인</li>
          </ul>
        </div>
        <div className="header">
          <nav>
            <MenuList categories={categories} />
            <div className="logo">
              <Link
                to={{
                  pathname: `/main`,
                }}
              >
                <img src="/images/LogoLIKE.svg" alt="라이키 로고" />
              </Link>
            </div>

            <div className="iconGroup">
              <form>
                <div className="searchIcon">
                  <MdSearch />
                </div>
                <input placeholder="검색" type="search" />
              </form>
              <div className="icon">
                <MdOutlineFavoriteBorder />
              </div>
              <div className="icon">
                <MdOutlineShoppingBag />
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
