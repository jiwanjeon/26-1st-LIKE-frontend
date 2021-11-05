import React, { Component } from 'react';
import PreHeader from './PreHeader/PreHeader';
import Header from './Header/Header';
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
    fetch('http://10.58.6.96:8000/categories')
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
