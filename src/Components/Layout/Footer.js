import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Asset/download.png"
import paymentIcon from "../../Asset/xpayment-item.png.pagespeed.ic.fk3ziISga0.png"
const Footer = () => {
    return (
        <div className="footer-container">
            <div  className="container">  
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <Link to="/"><img src={logo} alt="" data-pagespeed-url-hash="3970492880" /></Link>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 ">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">About Our Shop</a></li>
                                <li><a href="#">Secure Shopping</a></li>
                                <li><a href="#">Delivery infomation</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Our Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail"/>
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__widget__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                <p>
                                Copyright ©2022 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                            </div>
                            <img src={paymentIcon} alt="Payment-Icon" data-pagespeed-url-hash="577918195" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;