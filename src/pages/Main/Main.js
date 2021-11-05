import React, { Component } from 'react';
import './Main.scss';
import COLOR_LISTS from './colorList';
import Products from './ProductsInfo/Products';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      productsInfo: [],
    };
  }

  componentDidMount() {
    // query =>
    fetch('/data/MainProducts.json', {
      // method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productsInfo: data,
        });
      });
  }

  render() {
    const { productsInfo } = this.state;
    // console.log(productsInfo);
    // console.log('history', this.props.history);
    console.log('match', this.props.match.id);
    // console.log('location', this.props.location);

    return (
      <div>
        <div className="mainWrapper">
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
                  <option value="newestOrdeer">신상품순</option>
                  <option value="hightCostoOder">높은가격순</option>
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
                      <li className="colorLayout" title="베이지" key={idx}>
                        <input type="checkbox" />
                        <label
                          className="checkboxLabel"
                          for="checkbox"
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
                  <button title="230">230</button>
                  <button title="230">235</button>
                  <button title="230">240</button>
                  <button title="230">245</button>
                  <button title="230">250</button>
                  <button title="230">255</button>
                  <button title="230">260</button>
                  <button title="230">265</button>
                  <button title="230">270</button>
                  <button title="230">275</button>
                  <button title="230">280</button>
                </div>
                <div className="HorizontalLine" />
              </div>
            </aside>

            <main className="contentsBody">
              <div className="contentsLink">
                <div className="viewAll">
                  <button title="viewAll">
                    <span>전체보기</span>
                  </button>
                </div>
                <div className="Shoes">
                  <button title="viewAll">
                    <span>신발</span>
                  </button>
                </div>
                <div className="Clothes">
                  <button title="viewAll">
                    <span>의류</span>
                  </button>
                </div>
                <div className="Supplies">
                  <button title="viewAll">
                    <span>용품</span>
                  </button>
                </div>
              </div>
              <div className="productsMapping">
                {productsInfo &&
                  productsInfo.map((product, idx) => (
                    <Products key={idx} productInfo={product} />
                  ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
