import React, { Component } from 'react';
// import Product from './Product';
import {actFetchProductsRequest,AddCart} from '../components/actions';
import {connect} from 'react-redux';
import {
  NavLink
} from "react-router-dom";

class ContainerApp extends Component {
  constructor(props) {
    super(props)
   this.state = {

   }
}

componentDidMount(){
    this.props.actFetchProductsRequest();
}

render() {
    const {_products} = this.props._products;
    if(_products.length>0){
      return (
        <div id="app_container">
        <div className="grid wide">
          <div className="row sm-gutter app_content">
            <div className="col l-2 m-0 c-0">
              <nav className="category">
                <h3 className="category_heading">
                  <i className="category_heading-fa fa fa-list-ul" aria-hidden="true" />
                  Danh mục
                </h3>
                <ul className="category_list">
                  <li className="category_item "><NavLink to="/" className="category_link">Tất cả sản phẩm</NavLink></li>
                  <li className="category_item"><NavLink to="/new" className="category_link">Ohui</NavLink></li>
                  <li className="category_item"><NavLink to="/sale" className="category_link">Whoo</NavLink></li>
                  <li className="category_item"><NavLink to="/trend" className="category_link">Su:m37</NavLink></li>
                  <li className="category_item"><NavLink to="/set" className="category_link">Set mini</NavLink></li>
                  <li className="category_item"><NavLink to="/sub" className="category_link">Thực phẩm chức năng</NavLink></li>
                  <li className="category_item"><NavLink to="/ser" className="category_link">Dịch vụ</NavLink></li>
                </ul>
              </nav>					
            </div>
            <div className="col l-10 m-12 c-12">
              <div className="mobile_category">
                <ul className="mobile_category-list">
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Thefirst Tái Sinh </a>
                  </li>
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Dưỡng Trắng</a>
                  </li>
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Prime Advancer</a>
                  </li>
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Dưỡng Ẩm</a>
                  </li>
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Chống Lão Hóa</a>
                  </li>
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Make Up</a>
                  </li>
                  <li className="mobile_category-item">
                    <a href className="mobile_category-link">Ohui Chống Nắng</a>
                  </li>
                </ul>
              </div>
              <div className="home_filter">
                <div className="home_filter-left">
                  <span className="home_filter-label">Sắp xếp theo</span>
                  <NavLink to="/trend" className="home_filter-btnMy btn ">Phổ biến</NavLink>
                  <NavLink to="/new" className="home_filter-btnMy btn ">Mới nhất</NavLink>
                  {/* btn--primary */}
                  <NavLink to="/sale" className="home_filter-btnMy btn">Bán chạy</NavLink>
                  <div className="select_input">
                    <div className="select_input-label">
                      <div className="select_input-price">
                        Giá
                      </div>
                      <div className="select_input-icon">
                        <i className="fa fa-angle-down" />
                      </div>								
                    </div>
                    <ul className="select_input-list">
                      <li className="select_input-item">
                        <a href className="select_input-link">
                          Giá : Thấp đến Cao
                        </a>
                      </li>
                      <li className="select_input-item">
                        <a href className="select_input-link">
                          Giá : Cao đến Thấp
                        </a>
                      </li>
                    </ul>
                  </div>	
                </div>
                <div className="home_filter-right">
                  <div className="home_filter-pageNum">
                    <span className="home_filter-current">1</span>
                    /1
                  </div>
                  <div className="home_filter-control">
                    <a href className="home_filter-btn home_filter-active">
                      <i className="fa fa-angle-left" aria-hidden="true" />
                    </a>
                    <a href className="home_filter-btn">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              {/* HOME FILTER END  */}				
              <div className="home_product">
                <div className="row ">
                {
                   _products.map((item,index)=>(
                    <div key={index} className="col l-3 m-4 c-6">
                    <div className="home_product-item">
                    <div className="home_product-img" style={{ backgroundImage: `url(${item.image})` }}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">{item.name}</h4>
                          <div className="home_product-price">{item.price}$
                            <span className="home_product-priceUp">{}</span>
                            <span className="home_product-priceDown">{}</span>
                          </div>
                          <div className="home_product-rank">
                            <div className="home_product-like home_product-likeAcitve">
                              <i className="home_product-likeWhite fa fa-heart-o" aria-hidden="true" />
                              <i className="home_product-likeRed fa fa-heart" aria-hidden="true" />
                            </div>
                            <div className="home_product-star">
                              <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                              <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                              <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                              <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                              <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                            </div>
                            <div className="home_product-sold">69 đã bán</div>
                          </div>
                          <div className="home_product-origin">
                            <div className="home_product-company">Ohui</div>
                            <div className="home_product-country">Nhật bản</div>
                          </div>
                        </div>
                        <div className="home_product-favourite">
                          <span>
                            Yêu thích
                          </span>						
                        </div>
                        <div className="home_product-wrapperSale">
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div onClick={()=>this.props.AddCart(item)} className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </div>		
                  </div>                           
                   ))
                }
                  
                  {/* HOME PRODUCT END*/}
                  <ul className="home_page">
                    <li className="home_page-item">
                      <a href className="home_page-link">
                        <i className="home_page-icon home_page-iconL fa fa-chevron-left" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="home_page-active  home_page-item">
                      <a href className="home_page-link">
                        1
                      </a>
                    </li>
                    <li className="home_page-item">
                      <a href className="home_page-link">
                        2
                      </a>
                    </li>
                    <li className="home_page-item">
                      <a href className="home_page-link">
                        3
                      </a>
                    </li>
                    <li className="home_page-item">
                      <a href className="home_page-link">
                        4
                      </a>
                    </li>
                    <li className="home_page-item">
                      <a href className="home_page-link">
                        5
                      </a>
                    </li>
                    <li className="home_page-item">
                      <a href className="home_page-link">
                        ...
                      </a>
                    </li>
                    <li className="home_page-item">
                      <a href className="home_page-link">		
                        <i className="home_page-icon home_page-iconR fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* HOME FILTER END */}
              </div>
            </div>
          </div>
          {/* END CONTAINER */}
        </div>
      </div>

      );
    }
    return(
      <div className="row">
          <h2>Loading...!</h2>
      </div>
  )

  }
}

const mapStateToProps = state =>{
  return {
       _products: state._todoProduct,
     };
}
function mapDispatchToProps(dispatch){
  return{
      actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
      AddCart:item=>dispatch(AddCart(item))
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContainerApp)