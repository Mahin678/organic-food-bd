import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartPlus,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
const ProductCard = (props) => {
    const {name,img,price} = props.product;
  return (
    <>
      <div className="product__card__img">
        <img src={img} alt="" />
        <div className="prouduct__card__img__button__group mx-auto">
          <ul className="">
            <li>
              <FontAwesomeIcon icon={faHeart} className="me-2" />
            </li>
            <li>
              <FontAwesomeIcon icon={faRetweet} className="me-2" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCartPlus} className="me-2" />
            </li>
          </ul>
        </div>
      </div>
      <div className="product__card__description">
        <div className="product__card__description__text">
          <h6>
            <Link style={{ color: "#000" }} to="#">
              {name}
            </Link>
          </h6>
          <h5>${price}.00</h5>
        </div>
      </div>
    </>
  );
};

export default ProductCard;