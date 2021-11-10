import React, { Component } from 'react';
import './Main.scss';
import COLOR_LISTS from './colorList';
import Products from './ProductsInfo/Products';
import { Link } from 'react-router-dom';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInfo: [],
      selectedItemColor: [],
      selectedItemSize: [],
    };
  }

  componentDidMount() {
    fetch('/data/MainProducts.json', {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          productsInfo: data,
        });
      });
  }

  updateProducts = name => {
    fetch(`/data/${name}.json`, {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          productsInfo: data,
        });
      });
  };

  updateSize = e => {
    const { history, location } = this.props;
    const name = e.currentTarget.value;

    const currentQueryString = location.search;
    const url = new URLSearchParams(currentQueryString);

    const isSizeExist = url.getAll('size').includes(name);
    isSizeExist ? filterSizeExist() : filterSizeNotExist();

    applyQueryStringToURL();
    this.setState({ selectedItemSize: url.getAll('size') });

    function filterSizeExist() {
      const sizes = url.getAll('size');
      const isCertainSizeExist = sizes.includes(name);

      if (isCertainSizeExist) {
        const filteredSizes = sizes.filter(size => size !== name);

        url.delete('size');
        filteredSizes.forEach(size => url.append('size', size));
      }
    }

    function filterSizeNotExist() {
      url.append('size', name);
    }

    function applyQueryStringToURL() {
      const query = `${url.toString() ? '?' : ''}qs`;
      history.push('/products' + query);
    }
  };

  updateColor = e => {
    const { history, location } = this.props;
    const name = e.currentTarget.value;

    const currentQueryString = location.search;
    const url = new URLSearchParams(currentQueryString);

    // const isSizeExist = url.getAll('color').includes(name);
    const isColorExist = url.getAll('size').includes(name);
    isColorExist ? filterSizeExist() : filterSizeNotExist();

    applyQueryStringToURL();
    this.setState({ selectedItemColor: url.getAll('color') });

    function filterSizeExist() {
      const Colors = url.getAll('color');
      const isCertainSizeExist = Colors.includes(name);

      if (isCertainSizeExist) {
        const filteredSizes = Colors.filter(color => color !== name);

        url.delete('color');
        filteredSizes.forEach(color => url.append('color', color));
      }
    }

    function filterSizeNotExist() {
      url.append('color', name);
    }

    function applyQueryStringToURL() {
      const query = `${url.toString() ? '?' : ''}qs`;
      history.push('/products' + query);
    }

    // if (isSizeExist) {
    //   const colors = url.getAll('color');
    //   const isCertainSizeExist = colors.includes(name);

    //   if (isCertainSizeExist) {
    //     const filteredColors = colors.filter(color => color !== name);

    //     url.delete('color');
    //     filteredColors.forEach(color => url.append('color', color));
    //   }
    // } else {
    //   url.append('color', name);
    // }

    // const query = url.toString() ? '?' + url.toString() : '';

    // history.push('/products' + query);

    // this.setState({ selectedItemColor: url.getAll('color') });
  };

  render() {
    const { productsInfo, selectedItemColor } = this.state;
    return (
      <div className="MainWrapper">
        <div className="sectionHeader">
          <div className="sectionTitle">
            <div className="sectionTitleCategory">
              <span className="categoryName">Men</span>
              <br />
              <br />
              <span>Men's 의류(12)</span>
            </div>

            <div className="sectionControl">
              <button>필터</button>
              <select name="list" className="productsFilter">
                <option value="newestOrder">신상품순</option>
                <option value="hightCostOrder">높은가격순</option>
                <option value="lowCostOrder">낮은가격순</option>
              </select>
            </div>
          </div>
        </div>

        <div className="contentsWrapper">
          <aside className="contentsSide">
            <div className="HorizontalLine" />
            <div className="colors">
              <span>색상</span>
              <ul className="colorLists">
                {COLOR_LISTS.map((color, idx) => {
                  return (
                    <li className="colorLayout" key={idx}>
                      <label
                        className={`checkboxLabel ${
                          selectedItemColor.includes(color.color_name)
                            ? 'checked'
                            : ''
                        }`}
                        style={{ backgroundColor: color.colorProps }}
                      >
                        <input
                          onChange={this.updateColor}
                          type="checkbox"
                          value={color.color_name}
                        />
                      </label>
                      <span className="productColor">{color.color_name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sizes">
              <div className="HorizontalLine" />
              <span>사이즈</span>
              <div className="sizeLists">
                <button onClick={this.updateSize} value="230">
                  230
                </button>
                <button onClick={this.updateSize} value="235">
                  235
                </button>
                <button onClick={this.updateSize} value="240">
                  240
                </button>
                <button onClick={this.updateSize} value="245">
                  245
                </button>
                <button onClick={this.updateSize} value="250">
                  250
                </button>
                <button onClick={this.updateSize} value="255">
                  255
                </button>
                <button onClick={this.updateSize} value="260">
                  260
                </button>
                <button onClick={this.updateSize} value="265">
                  265
                </button>
                <button onClick={this.updateSize} value="270">
                  270
                </button>
                <button onClick={this.updateSize} value="275">
                  275
                </button>
                <button onClick={this.updateSize} value="280">
                  280
                </button>
              </div>
              <div className="HorizontalLine" />
            </div>
          </aside>

          <main className="contentsBody">
            <div className="contentsLink">
              <div className="viewAll">
                <Link
                  to={{
                    pathname: '/products',
                    state: { message: 'hello, im a passed message!' },
                  }}
                >
                  <button onClick={() => this.updateProducts('MainProducts')}>
                    {/* <button onClick={this.updateProducts} value="acc"> 
                    and then using e.currentTarget.value same as top one. */}
                    <span>전체 보기</span>
                  </button>
                </Link>
              </div>
              <div className="Shoes">
                <Link
                  to={{
                    pathname: '/products/shoes',
                    state: { message: 'hello, im a passed message!' },
                  }}
                >
                  <button
                    onClick={() => this.updateProducts('MainProductsShoes')}
                  >
                    <span>신발</span>
                  </button>
                </Link>
              </div>
              <div className="Clothes">
                <Link
                  to={{
                    pathname: '/products/clothing',
                    state: { message: 'hello, im a passed message!' },
                  }}
                >
                  <button
                    onClick={() => this.updateProducts('MainProductsClothing')}
                  >
                    <span>옷</span>
                  </button>
                </Link>
              </div>
              <div className="Supplies">
                <Link
                  to={{
                    pathname: '/products/acc',
                  }}
                >
                  <button
                    onClick={() => this.updateProducts('MainProductsAcc')}
                  >
                    <span>용품</span>
                  </button>
                </Link>
              </div>
              <div className="Sports">
                <Link
                  to={{
                    pathname: '/products/sports',
                  }}
                >
                  <button
                    onClick={() => this.updateProducts('MainProductsSports')}
                  >
                    <span>스포츠</span>
                  </button>
                </Link>
              </div>
            </div>

            <article className="productsMapping">
              {productsInfo.map((product, idx) => (
                <Products key={idx} productInfo={product} />
              ))}
            </article>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
