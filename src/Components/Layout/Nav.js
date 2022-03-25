
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../Asset/download.png";
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="container">
                <div className="nav-container__content">
                <img src={logo} alt="Logo"  />
                <div className="nav-container__option">
                    <Link to="/">
                        Home
                    </Link>
                 <Link to="/">
                        Shop
                    </Link>
                 <Link to="/">
                        Pages
                    </Link>
                 <Link to="/">
                        Blog
                    </Link>
                 <Link to="/">
                        Contact
                    </Link>
             </div>
                <div className="nav-container__product-info">
                    <div>
                        <FontAwesomeIcon icon={faHeart} className="me-2" />
                        
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faBagShopping} className="me-2" />
                    </div>
                    <div className="nav-container__product-info__item">
                        item: <span>$124.45</span>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    );
};

export default Nav;