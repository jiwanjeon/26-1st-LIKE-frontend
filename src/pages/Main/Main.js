import React, { Component } from 'react';
import './Main.scss';
import COLOR_LISTS from './colorList';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      productsInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/MainProducts.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productsInfo: data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="mainWrapper">
          <div className="sectionHeader">
            <div className="sectionTitle">
              <div className="sectionTitleCategory">
                <a>Men</a>
                <br />
                <br />
                <span>Men's 의류(12)</span>
              </div>

              <div className="sectionControl">
                <button>필터</button>
                <select name="dog-names" id="dog-names">
                  <option value="newestOrdeer">신상품순</option>
                  <option value="hightCostoOder">높은가격순</option>
                  <option value="lowCostOrder">낮은가격순</option>
                </select>
              </div>
            </div>
          </div>

          <div className="contentsWrapper">
            <aside className="contentsSide">
              <div className="HorizontalLine"></div>
              <div className="colors">
                <span>색상</span>
                <ul className="colorLists">
                  {COLOR_LISTS.map(color => {
                    return (
                      <li className="colorLayout" title="베이지">
                        <input type="checkbox" id="checkbox"></input>
                        <label
                          for="checkbox"
                          style={{ backgroundColor: color.colorProps }}
                        ></label>
                        <span className="productColor">{color.color_name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="sizes">
                <div className="HorizontalLine"></div>
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
                <div className="HorizontalLine"></div>
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
                {this.state.productsInfo &&
                  this.state.productsInfo.map((productsInfo, idx) => {
                    return (
                      <div className="productsContainer" key={idx}>
                        <div className="productLayout">
                          <div className="productImage">
                            <img
                              alt="productImage"
                              src={productsInfo.image}
                            ></img>
                          </div>
                          <div className="productInfo">
                            <div className="productInfoDisplay">
                              <div className="productStatus">
                                <span>{productsInfo.ecoFriendly}</span>
                              </div>
                              <div className="productName">
                                <span>{productsInfo.title}</span>
                              </div>
                              <div className="productCategory">
                                <span>{productsInfo.sub_title}</span>
                              </div>
                              <div className="productColorChoices">
                                <span>{productsInfo.color_kind} 컬러</span>
                              </div>
                            </div>
                            <div className="productPrice">
                              <span>11,900 원</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* <div className="productsContainer">
                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div> */}

              {/* <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div>

                <div className="productLayout">
                  <div className="productImage">
                    <img alt="productImage" src="/images/example.jpg"></img>
                  </div>
                  <div className="productInfo">
                    <div className="productInfoDisplay">
                      <div className="productStatus">
                        <span>친환경 소재</span>
                      </div>
                      <div className="productName">
                        <span>나이키 와플 트레이너2</span>
                      </div>
                      <div className="productCategory">
                        <span>여성 신발 라이프스타일</span>
                      </div>
                      <div className="productColorChoices">
                        <span>1 컬러</span>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span>11,900 원</span>
                    </div>
                  </div>
                </div> */}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
