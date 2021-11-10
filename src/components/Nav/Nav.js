import React, { Component } from 'react';
import PreHeader from './PreHeader/PreHeader';
import Header from './Header/Header';
import { Config } from '../../config';
import './Nav.scss';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateoriesUrl: Config[0].categories,
      token: Config[1].token,
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesData();
  }

  getCategoriesData() {
    const { cateoriesUrl, token } = this.state;

    fetch(cateoriesUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data.results,
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
