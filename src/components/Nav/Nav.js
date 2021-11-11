import React, { Component } from 'react';
import PreHeader from './PreHeader/PreHeader';
import Header from './Header/Header';
import { Config } from '../../config';
import './Nav.scss';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesUrl: Config[0].categories,
      token: Config[1].token,
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesData();
  }

  getCategoriesData() {
    const { categoriesUrl, token } = this.state;

    fetch(categoriesUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data,
          //data.results로 받아야하는데 data로 해야지 데이타가 받아짐.
        });
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <header className="Nav">
        <PreHeader />
        <Header categories={categories} />
      </header>
    );
  }
}

export default Nav;
