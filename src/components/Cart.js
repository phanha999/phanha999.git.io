import React, { Component } from 'react';
// import CartChild from './CartChild';
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../components/actions';

function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
     console.log(items)
      let ListCart = [];
      let TotalCart=0;

      Object.keys(items.Carts).forEach(function(item){
          TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
          ListCart.push(items.Carts[item]);
      });

      function TotalPrice(price,tonggia){
          return Number(price * tonggia).toLocaleString('en-US');
      }
       

        return (
            <div id="app_container">
            <div className="grid wide">
              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="cart_header">
                    <input type="checkbox" className="col l-1 cart_header-checkbox" />
                    <div className="col l-3 m-3 cart_header-product">Sản phẩm</div>
                    <div className="col l-2 m-2 cart_header-price">Đơn giá</div>
                    <div className="col l-2 m-2 cart_header-many">Số lượng</div>
                    <div className="col l-2 m-2 cart_header-dola">Số tiền</div>
                    <div className="col l-2 m-2 cart_header-active">Thao tác</div>
                  </div>
          
                  {
                      ListCart.map((item,key)=>{
                          return (
                            <div className="cart_section-wrapper">
                              <div  key={key} className="cart_section-wrapperChild">
                                <div className="cart_section">
                                  <div className="cart_section-checkbox">
                                    <input type="checkbox" className="cart_header-checkbox" />
                                  </div>	
                                  <div className="cart_section-img">
                                    <a href="/home" >
                                      <div className="cart_section-product"  style={{backgroundImage: `url(${item.image})`}} >							
                                      </div>
                                    </a>                          
                                  </div>
                                  <div className="cart_section-flex">
                                    <div className="cart_section-title">
                                      <a href className="cart_section-info">{item.name}</a>
                                    </div>
                                    <div className="cart_section-money">
                                      <div className=" cart_section-price">{item.price}$</div>
                                      <div className=" cart_section-many">
                                        <div className="cart_section-manybox" min={1} max={999}>
                                          <button className="cart_section-btn cart_section-down" onClick={()=>DecreaseQuantity(key)} >-</button>
                                          <span type="number" className="cart_section-num" defaultValue={1}>{item.quantity}</span>
                                          <button className="cart_section-btn cart_section-up" onClick={()=>IncreaseQuantity(key)} >+</button>
                                        </div>
                                      </div>
                                      <div className=" cart_section-dola">{ TotalPrice(item.price,item.quantity)}$</div>
                                    </div>
                                  </div>
                                  <a onClick={()=>DeleteCart(key)} href className="cart_section-active">
                                    <span>Xóa</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          )
                        })
                  }
                 
          
                </div>
                <div className="col l-12 m-12 c-12">
                  <div className="cart_footer">
                    <div className="cart_footer-top">
                      <div className="row">
                        <div className="col l-7">
                          <div className="cart_footer-box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptate dicta sit molestiae esse tenetur sunt provident quod expedita pariatur, repellendus fugit aliquam delectus itaque necessitatibus optio sapiente eum deleniti?</div>
                        </div>
                        <div className="col l-5">
                          <div className="cart_footer-vocher">
                            <img src="image/vocher.png" alt="" className="cart_footer-img" />
                            <div className="cart_footer-info">Mã giảm giá</div>
                            <button className="cart_footer-choose">
                              <span>Chọn Mã Giảm Giá</span>
                            </button>
                          </div>
                        </div>		
                      </div>					
                      <div className="row">
                        <div className="col l-7">
                          <div className="cart_footer-box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptate dicta sit molestiae esse tenetur sunt provident quod expedita pariatur, repellendus fugit aliquam delectus itaque necessitatibus optio sapiente eum deleniti?</div>
                        </div>
                        <div className="col l-5">
                          <div className="cart_footer-diliver">
                            <span>Phí Ship : Miễn phí</span>
                          </div>
                        </div>		
                      </div>												
                    </div>
                    <div className="cart_footer-bottom">
                      <div className="row">
                        <input type="checkbox" className="col l-1 m-1 c-1 cart_header-checkbox" />	
                        <div className="col l-6 m-6 c-3">
                          <button className="cart_footer-chooseall">
                            Chọn Tất Cả (3)
                          </button>
                        </div>
                        <div className="col l-3 m-3 c-5">
                          <div className="cart_footer-summary">
                            <div className="cart_footer-summarytop">
                              <div className="cart_footer-sum">Tổng tiền hàng (3 sản phẩm)
                              </div>
                              <div className="cart_footer-sumnumber">{Number(TotalCart).toLocaleString('en-US')}$</div>
                            </div>
                            <div className="cart_footer-summarybottom">Ví tích điểm : +2.800 điểm
                            </div>
                          </div>
                        </div>
                        <div className="col l-2 m-2 c-3">
                          <button className="cart_footer-buy">
                            <span>Mua Hàng</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
}

const mapStateToProps = state =>{
    //  console.log(state)
      return{
          items:state._todoProduct
      }
  }
   
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
  