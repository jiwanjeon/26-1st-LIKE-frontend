import React, { Component } from 'react';
import './Main.scss';
import COLOR_LISTS from './colorList';
import Products from './ProductsInfo/Products';
import { Link } from 'react-router-dom';
import { API } from '../../config';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInfo: [],
      selectedItemColor: [],
    };
  }
  componentDidUpdate(prevProps) {
    // =======================================

    // eslint-disable-next-line react/destructuring-assignment
    const { search, pathname } = this.props.location;
    const { search: prevSearch, pathname: prevPathname } = prevProps.location;
    console.log('com did up');
    console.log('search', search);
    console.log('pathname', pathname);
    console.log('prevSearch', prevSearch);
    console.log('prevPathname', prevPathname);
    console.log('API + pathname', API + pathname);
    console.log(pathname);
    let mainCategoryNameToNumber = 0;

    if (!search) {
      if (
        (pathname === prevPathname) &
        !pathname.includes('shoes') &
        !pathname.includes('clothing') &
        !pathname.includes('supplies') &
        !pathname.includes('sports')
      ) {
        fetch(API + pathname)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              productsInfo: data.results,
            });
          });
      } else if ((pathname === prevPathname) & pathname.includes('shoes')) {
        fetch(API + '/' + pathname.split('/')[1] + '?main_category=2')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              productsInfo: data.results,
            });
          });
      } else if ((pathname === prevPathname) & pathname.includes('clothing')) {
        fetch(API + '/' + pathname.split('/')[1] + '?main_category=3')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              productsInfo: data.results,
            });
          });
      } else if ((pathname === prevPathname) & pathname.includes('supplies')) {
        fetch(API + '/' + pathname.split('/')[1] + '?main_category=4')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              productsInfo: data.results,
            });
          });
      } else if ((pathname === prevPathname) & pathname.includes('sports')) {
        fetch(API + '/' + pathname.split('/')[1] + '?main_category=5')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              productsInfo: data.results,
            });
          });
      } else {
        fetch(API + pathname)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              productsInfo: data.results,
            });
          });
      }
    }
  }

  // ================================디도스 공격=====================
  // if (
  //   search !== prevSearch &&
  //   pathname !== prevPathname &&
  //   'localhost:3000/' + pathname === 'localhost:3000/products'
  // ) {
  // fetch('http://10.58.6.96:8000/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     this.setState({
  //       productsInfo: data.results,
  //     });
  //   });
  // ================================디도스 공격=====================
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('com did up');
  //   // eslint-disable-next-line react/destructuring-assignment
  //   const { search, pathname } = this.props.location;
  //   const { search: prevSearch, pathname: prevPathname } = prevProps.location;

  //   if (search !== prevSearch && pathname !== prevPathname) {
  //     fetch(`/data/${this.props.match.params.category || 'MainProducts'}.json`,
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         this.setState({
  //           productsInfo: data,
  //         });
  //       });
  //   }

  // componentDidMount() {
  //   fetch(
  //     `/data/${this.props.match.params.category || 'MainProducts'}.json`,
  //     {}
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productsInfo: data,
  //       });
  //     });
  // }

  componentDidMount() {
    fetch(API + this.props.location.pathname)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          productsInfo: data.results,
        });
      });
    // console.log('메롱', API);
  }

  updateProducts = name => {
    fetch(`/data/${name}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productsInfo: data,
        });
        console.log(data);
      });
  };

  // updateProducts = name => {
  //   fetch(`/data/${name}.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productsInfo: data,
  //       });
  //     });
  // };

  updateSize = e => {
    const { history, location } = this.props;
    const name = e.currentTarget.value;

    const currentQueryString = location.search;
    const url = new URLSearchParams(currentQueryString);

    const isSizeExist = url.getAll('size').includes(name);

    if (isSizeExist) {
      filterSizeExist();
    } else {
      filterSizeNotExist();
    }

    applyQueryStringToURL();
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
      const qs = url.toString();
      const query = `${url.toString() ? '?' : ''}` + qs;

      history.push('/products' + query);
    }
    this.setState({ selectedItemSize: url.getAll('size') });
  };

  updateColor = e => {
    const { history, location } = this.props;
    const name = e.currentTarget.value;

    const currentQueryString = location.search;
    const url = new URLSearchParams(currentQueryString);

    const isSizeExist = url.getAll('color').includes(name);

    if (isSizeExist) {
      const colors = url.getAll('color');
      const isCertainSizeExist = colors.includes(name);

      if (isCertainSizeExist) {
        const filteredColors = colors.filter(color => color !== name);

        url.delete('color');
        filteredColors.forEach(color => url.append('color', color));
      }
    } else {
      url.append('color', name);
    }

    const query = url.toString() ? '?' + url.toString() : '';

    history.push('/products' + query);

    this.setState({ selectedItemColor: url.getAll('color') });
  };

  render() {
    // console.log(API);
    // console.log(this.props.location.pathname);
    // console.log('cccccc', `${API}${this.props.location.pathname}`);
    const { productsInfo, selectedItemColor } = this.state;

    console.log('1232131231231231', productsInfo);

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
                {COLOR_LISTS.map(color => {
                  return (
                    <li className="colorLayout" key={color.id}>
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
                <label>
                  <button
                    className="active"
                    onClick={this.updateSize}
                    value="230"
                    key="1"
                  >
                    230
                  </button>
                </label>
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
                <button onClick={this.updateSize} value="xs">
                  XS
                </button>
                <button onClick={this.updateSize} value="s">
                  S
                </button>
                <button onClick={this.updateSize} value="m">
                  M
                </button>
                <button onClick={this.updateSize} value="l">
                  L
                </button>
                <button onClick={this.updateSize} value="xl">
                  XL
                </button>
                <button onClick={this.updateSize} value="xxl">
                  XXL
                </button>
                <button onClick={this.updateSize} value="xxxl">
                  XXXL
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
                  }}
                >
                  <button onClick={() => this.updateProducts('shoes')}>
                    <span>신발</span>
                  </button>
                </Link>
              </div>
              <div className="Clothes">
                <Link
                  to={{
                    pathname: '/products/clothing',
                  }}
                >
                  <button onClick={() => this.updateProducts('clothing')}>
                    <span>옷</span>
                  </button>
                </Link>
              </div>
              <div className="Supplies">
                <Link
                  to={{
                    pathname: '/products/supplies',
                  }}
                >
                  <button onClick={() => this.updateProducts('supplies')}>
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
                  <button onClick={() => this.updateProducts('sports')}>
                    <span>스포츠</span>
                  </button>
                </Link>
              </div>
            </div>

            <article className="productsMapping">
              {productsInfo &&
                productsInfo.map(product => {
                  console.log('123123123123123123123', product);
                  return <Products key={product.id} productInfo={product} />;
                })}
            </article>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
