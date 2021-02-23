import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div>
            {/* MODAL LAYOUT */}
            <div className="modal1">
                <div className="modal1_overlay" />
                <div className="modal1_body">
                {/* Authen FORM */}
                {/* <div class="auth_form">
                            <div class="auth_form-container">
                                <div class="auth_form-header">
                                    <h3 class="auth_form-heading">Đăng ký</h3>
                                    <span class="auth_form-switch--btn">Đăng nhập</span>
                                </div>
                
                                <div class="auth_form-form">
                                    <div class="auth_form--group">
                                        <input type="email" class="auth_form-input" placeholder="Email của bạn">
                                    </div>
                                    <div class="auth_form--group">
                                        <input type="password" class="auth_form-input" placeholder="Mật khẩu của bạn">
                                    </div>
                                    <div class="auth_form--group">
                                        <input type="password" class="auth_form-input" placeholder="Xác nhận mật khẩu">
                                    </div>
                                </div>
                
                                <div class="auth_form-additional">
                                    <p class="auth_additional-text">
                                        Bằng việc đăng ký bạn đã chấp nhận với Yahallo về
                                        <a href="" class="auth_additional-link">Điều khoản dịch vụ</a> & <a href="" class="auth_additional-link">Chính sách bảo mật</a> 
                                    </p>
                                </div>
                                END FORM CONTAINER */}
                {/* <div class="auth_form-control">
                                    <button class="btn btn-hover ">Trở về</button>
                                    <button class="btn btn--primary">Đăng ký</button>
                                </div>
                            </div>

                            <div class="auth_form-socials">
                                <a href="" class="btn-facebook btn-size-s btn btn-with-icon">
                                    <i class="auth_form-icon fa fa-facebook-square" aria-hidden="true"></i>
                                    <span class="auth_form-title">
                                        Kết nối với Facebook
                                    </span>					
                                </a>
                                <a href="" class="btn-google btn-size-s btn btn-with-icon">
                                    <i class="auth_form-icon fa fa-google-plus" aria-hidden="true"></i>
                                    <span class="auth_form-title">
                                        Kết nối với Google
                                    </span>						
                                </a>
                            </div>

                        </div> */}
                {/* Authen FORM END */}
                {/* Register FORM */}
                <div className="auth_form">
                    <div className="auth_form-container">
                    <div className="auth_form-header">
                        <h3 className="auth_form-heading">Đăng nhập</h3>
                        <span className="auth_form-switch--btn">Đăng ký</span>
                    </div>
                    <div className="auth_form-form">
                        <div className="auth_form--group">
                        <input type="email" className="auth_form-input" placeholder="Email của bạn" />
                        </div>
                        <div className="auth_form--group">
                        <input type="password" className="auth_form-input" placeholder="Mật khẩu của bạn" />
                        </div>
                    </div>
                    <div className="auth_form-aside">
                        <div className="auth_form-help">
                        <a href className="auth_form-link auth_form-fogot">Quên Mật Khẩu</a>
                        <span className="auth_form-wall" />
                        <a href className="auth_form-link">Cần Trợ giúp</a>
                        </div>
                    </div>
                    {/* END FORM CONTAINER */}
                    <div className="auth_form-control">
                        <button className="btn btn-hover ">Trở về</button>
                        <button className="btn btn--primary">Đăng ký</button>
                    </div>
                    </div>
                    <div className="auth_form-socials">
                    <a href className="btn-facebook btn-size-s btn btn-with-icon">
                        <i className="auth_form-icon fa fa-facebook-square" aria-hidden="true" />
                        <span className="auth_form-title">
                        Kết nối với Facebook
                        </span>					
                    </a>
                    <a href className="btn-google btn-size-s btn btn-with-icon">
                        <i className="auth_form-icon fa fa-google-plus" aria-hidden="true" />
                        <span className="auth_form-title">
                        Kết nối với Google
                        </span>						
                    </a>
                    </div>
                </div>
                {/* Register FORM END */}
                </div>
            </div>
            <div className="modal_message">
                <div className="modal_message-title">
                Sản Phẩm Đã Được Thêm Vào Giỏ Hàng
                </div>
            </div>
            </div>

        );
    }
}

export default Modal;