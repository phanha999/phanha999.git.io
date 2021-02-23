import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
import  {connect} from  'react-redux'

class Header extends Component {
    render() {
        return (
            <header className id="header">
            <div className="grid wide">
              <nav className="header_navbar">
                <ul className="header_navbar-list">
                  <li className="header_navbar-item header_qrHover header_navbar-item--borderR">		
                    Vào cửa hàng trên ứng dụng Yahallo
                    <span className="header_qr">
                      <img src="image/QR.png" alt="" className="header_qr--img" />
                      <div className="header_qr-apps">
                        <img src="image/ggPlay.png" alt="" className="header_qr-apps--img" />
                        <img src="image/appStore.png" alt="" className="header_qr-apps--img" />
                      </div>
                    </span>
                  </li>
                  <li className="header_navbar-item header_navbar-item--borderR">
                    <i className="fa fa-phone header_navbar-item--icon" aria-hidden="true" />
                    <a className="header_navbar-item--link" href="tel:0868387059">0868387059</a>
                  </li>
                  <li className="header_navbar-item ">
                    <i className="fa fa-envelope header_navbar-item--icon" aria-hidden="true" />
                    <a className="header_navbar-item--link" href="mailto: boanhtai1@gmail.com">boanhtai1@gmail.com</a>
                  </li>
                </ul>
                <ul className="header_navbar-list">
                  <li className="header_navbar-item header_navbar-item--bold header_notify-hover">
                    <i className="fa fa-bell-o header_navbar-item--icon header_navbar-item--iconL" aria-hidden="true" />
                    <NavLink className="header_navbar-item--link" to="/newspaper">Tin tức</NavLink>
                    <div className="header_notify">
                      <header className="header_notify-header">
                        <h3 className="header_notify-news">Tin Tức Mới Nhất</h3>
                      </header>
                      <ul className="header_notify-list">
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item header_notify-active">
                          <a href className="header_notify-link">
                            <img src="image/Item1.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">Chương trình khách hàng thân thiết</p>
                              <span className="header_notify-title">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối với chúng tôi chương trình Khách Hàng Thân Thiết đã được tạo ra</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item2.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">Tặng ngay combo 5 gói mặt nạ thải độc Su:m37</p>
                              <span className="header_notify-title">Khuyển mãi siêu hot</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item3.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">Day Shield Perfect Sun - Cho nàng thơ tự tin "tỏa nắng"</p>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item4.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">CHĂM SÓC KHÔNG QUÊN CHỐNG NĂNG</p>
                              <span className="header_notify-title">Kem Chống nắng Whoo Gongjinhyang Soo</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item5.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">DA CÓ DẦU CẦN DƯỠNG ẨM</p>
                              <span className="header_notify-title">Whoo Gongjinhyang Soo</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item6.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">KHỞI ĐẦU CỦA LÀN DA KHỎE ĐẸP</p>
                              <span className="header_notify-title">Ohui Prime Advancer</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item6.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">KHỞI ĐẦU CỦA LÀN DA KHỎE ĐẸP</p>
                              <span className="header_notify-title">Ohui Prime Advancer</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item6.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">KHỞI ĐẦU CỦA LÀN DA KHỎE ĐẸP</p>
                              <span className="header_notify-title">Ohui Prime Advancer</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item6.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">KHỞI ĐẦU CỦA LÀN DA KHỎE ĐẸP</p>
                              <span className="header_notify-title">Ohui Prime Advancer</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                        {/* NOTIFY ITEM */}
                        <li className="header_notify-item">
                          <a href className="header_notify-link">
                            <img src="image/Item6.png" alt="" className="header_notify-img" />
                            <div className="header_notify-info">
                              <p className="header_notify-name">KHỞI ĐẦU CỦA LÀN DA KHỎE ĐẸP </p>
                              <span className="header_notify-title">Ohui Prime Advancer</span>
                            </div>
                          </a>
                        </li>
                        {/* NOTIFY ITEM END */}
                      </ul>
                      <footer className="header_footer-notify">
                        <a href="/" className="footer_notify-btn">Xem tất cả</a>
                      </footer>
                    </div>
                  </li>
                  <li className="header_navbar-item header_navbar-item--bold">
                    <i className="fa fa-question-circle-o header_navbar-item--icon
                                      header_navbar-item--iconL" aria-hidden="true" />
                    <NavLink className="header_navbar-item--link" to="/contacts">Liên hệ</NavLink>
                  </li>
                  {/* <li class="header_navbar-item header_navbar-item--bold header_navbar-item--borderR">Đăng ký </li>
                                  <li class="header_navbar-item header_navbar-item--bold">Đăng nhập</li> */}
                  <li className="header_navbar-item header_navbar-user">
                    <div className="header_navbar-wrapperUser">
                      <img src="image/user.png" alt="" className="header_navbar-img" />
                      <div className="header_navbar-nameUser">
                        Phan Hà
                      </div>
                    </div>
                    <ul className="header_navbar-list1">
                      <li className="header_navbar-item1"><a href className="header_navbar-childItem">Tài khoản của tôi</a></li>
                      <li className="header_navbar-item1"><a href className="header_navbar-childItem">Địa chỉ của tôi</a></li>
                      <li className="header_navbar-item1"><a href className="header_navbar-childItem">Ví tích điểm</a></li>
                      <li className="header_navbar-item1"><a href className="header_navbar-childItem">Đơn mua</a></li>
                      <li className="header_navbar-item1"><a href className="header_navbar-childItem">Đăng ký chương trình PVH</a></li>
                      <li className="header_navbar-item1"><a href className="header_navbar-childItem header_navbar-itemColor ">Đăng xuất</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* HEADER SEARCH */}
              <div className="header_search">
                <input type="checkbox" id="header_search-click" hidden className="header_search-click" />
                <label htmlFor="header_search-click" className="header_search-icon l-0 m-0 ">
                  <i className="fa fa-search header_search-iconChild" aria-hidden="true" />
                </label>
                <div className="header_search-logo">
                  <NavLink to="/home" className="header_search-link">
                    <img src="image/logo.png" className="header_search-img" alt="error" /></NavLink>		
                </div>
                <div className="header_search-inputSearch none_mobile">
                  <div className="header_search-wrapInput">
                    <input type="text" placeholder="Nhập để tìm kiếm" className="header_search-input" />
                    {/* SEARCH HISTORY */}
                    <div className="header_search-history">
                      <h3 className="header_search-history--heading">Lịch sử tìm kiếm</h3>
                      <ul className="header_search-list">
                        <li className="header_search-item">
                          <a href className="header_search-save">Lịch sử 1</a>
                        </li>
                        <li className="header_search-item">
                          <a href className="header_search-save">Lịch sử 2</a>
                        </li>
                      </ul>
                    </div>
                    {/* SEARCH HISTORY END */}
                  </div>
                  <div className="header_search-select">
                    <span className="header_search-select-label">Cửa hàng</span>
                    <i className="fa fa-angle-down header_search-selectIcon " aria-hidden="true" />
                    <ul className="header_search-option">
                      <li className="header_search-option--item">
                        <span>Trong Shop</span>
                        <i className="fa fa-check header_search-option--icon" aria-hidden="true" />
                      </li>
                      <li className="header_search-option--item">
                        <span>Ngoài Shop</span>
                        {/* <i class="fa fa-check header_search-option--icon" aria-hidden="true"></i> */}
                      </li>
                    </ul>
                  </div>
                  <button className="header_search-button">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
                <NavLink to="/cart" className="header_search-icon">
                  <div className="header_search-classIcon">
                    <i className="fa fa-shopping-cart header_search-buttonIcon " aria-hidden="true" />
                    <span className="header_search-cartNotice">
                      
                      {this.props.numberCart}
                      
                    </span>
                    {/* TH có Cart : header_search-noCart */}

                    <div className="header_search-cart ">
                      <img src="image/roHang.png" className="header_search-cartImg" alt="" />
                      <span className="header_search-cartText">
                        Chưa có sản phẩm
                      </span>
                      <h3 className="header_cart-heading ">Sản Phẩm Mới Thêm</h3>
                      <ul className="header_cart-list">

                        <li className="header_cart-item">
                          <img src="image/product1.png" alt="" className="header_cart-img" />
                          <div className="header_cart-info">
                            <div className="header_cart-head">
                              <h5 className="header_cart-name">Full Bộ Light Novel Darling in the FranXX</h5>
                              <div className="header_cart-wapperPirce">
                                <div className="header_cart-price">9.999.999đ</div>
                                <div className="header_cart-x">x</div>
                                <div className="header_cart-qnt">2</div>
                              </div>
                            </div>		
                            <div className="header_cart-bottom">
                              <div className="header_cart-delete">Xóa</div>
                            </div>	
                          </div>				
                        </li>	

                        <li className="header_cart-item">
                          <img src="image/product1.png" alt="" className="header_cart-img" />
                          <div className="header_cart-info">
                            <div className="header_cart-head">
                              <h5 className="header_cart-name">Full Bộ Light Novel Darling in the FranXX</h5>
                              <div className="header_cart-wapperPirce">
                                <div className="header_cart-price">9.999.999đ</div>
                                <div className="header_cart-x">x</div>
                                <div className="header_cart-qnt">2</div>
                              </div>
                            </div>		
                            <div className="header_cart-bottom">
                              <div className="header_cart-delete">Xóa</div>
                            </div>	
                          </div>				
                        </li>	
                        <li className="header_cart-item">
                          <img src="image/product1.png" alt="" className="header_cart-img" />
                          <div className="header_cart-info">
                            <div className="header_cart-head">
                              <h5 className="header_cart-name">Full Bộ Light Novel Darling in the FranXX</h5>
                              <div className="header_cart-wapperPirce">
                                <div className="header_cart-price">9.999.999đ</div>
                                <div className="header_cart-x">x</div>
                                <div className="header_cart-qnt">2</div>
                              </div>
                            </div>		
                            <div className="header_cart-bottom">
                              <div className="header_cart-delete">Xóa</div>
                            </div>	
                          </div>				
                        </li>	
                        
                      </ul>

                      {/* <a href="/cart"className="header_cart-view btn btn--primary">Xem giỏ hàng </a> */}
                      <NavLink to="/cart" className="header_cart-view btn btn--primary">Xem giỏ hàng</NavLink>
                    </div>
                  </div>

                </NavLink>
              </div>
              {/* HEADER SEARCH END */}
            </div>
            <ul className="header_sort-list">
              <li className="header_sort-item header_sort-active"><a href="/" className="header_sort-link">Phổ biến</a></li>
              <li className="header_sort-item"><a href="/" className="header_sort-link">Mới nhất</a></li>
              <li className="header_sort-item"><a href="/" className="header_sort-link">Bán chạy</a></li>
              <li className="header_sort-item"><a href="/" className="header_sort-link">Giá</a></li>
            </ul>
          </header>
          
        );
    }
}
const mapStateToProps = state =>{
  return{
      numberCart:state._todoProduct.numberCart
  }
}
export default connect(mapStateToProps,null)(Header)