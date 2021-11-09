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
      selectedItems: [],
    };
  }
  ㄴ;
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
    // console.log current URL
    // console.log(this.props.history.location.search);
  };

  updateSize = name => {
    const { history } = this.props;
    const sizeString = `?size=${name}`;
    const currentURL = history.location.pathname;
    // this.props.history.replace({
    //   pathname: currentURL + '?' + `${sizeString}`,
    // });
    history.push(currentURL + `${sizeString}`);
  };

  // The value should be the same as the id from the input.
  // Then you can add a value property for the input which is used for
  // adding/removing the item in the list of selected items. For this purpose
  // a handleChange function can be defined.
  handleChange = e => {
    const { selectedItems } = this.state;
    let newSelected = [];

    if (selectedItems.includes(e.target.value)) {
      newSelected = selectedItems.filter(item => item !== e.target.value);
    } else {
      newSelected = [...selectedItems, e.target.value];
    }
    this.setState({ selectedItems: newSelected });
  };

  updateColor = e => {
    const { history } = this.props;

    const sizeColor = `&color=${e}`;
    const currentURL = history.location.pathname;
    window.history.replaceState(
      null,
      'New Page Title',
      currentURL + `${sizeColor}`
    );
  };

  render() {
    const { productsInfo, selectedItems } = this.state;

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
                      <input
                        onChange={this.handleChange}
                        type="checkbox"
                        id={idx}
                        value={color.color_name}
                        checked={selectedItems.includes(color.color_name)}
                      />
                      <label
                        className="checkboxLabel"
                        htmlFor={idx}
                        style={{ backgroundColor: color.colorProps }}
                      />
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
                <button onClick={() => this.updateSize('230')}>230</button>
                <button onClick={() => this.updateSize('235')}>235</button>
                <button onClick={() => this.updateSize('240')}>240</button>
                <button onClick={() => this.updateSize('245')}>245</button>
                <button onClick={() => this.updateSize('250')}>250</button>
                <button onClick={() => this.updateSize('255')}>255</button>
                <button onClick={() => this.updateSize('260')}>260</button>
                <button onClick={() => this.updateSize('265')}>265</button>
                <button onClick={() => this.updateSize('270')}>270</button>
                <button onClick={() => this.updateSize('275')}>275</button>
                <button onClick={() => this.updateSize('280')}>280</button>
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
                    <span>악세사리</span>
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
