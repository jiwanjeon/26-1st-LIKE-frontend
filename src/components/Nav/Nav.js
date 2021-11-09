import React, { Component } from 'react';
import PreHeader from './PreHeader/PreHeader';
import Header from './Header/Header';
import { Config } from '../../config';
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
    const cateoriesUrl = Config[0].categories;
    const token = Config[1].token;

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
