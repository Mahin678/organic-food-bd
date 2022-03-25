   
import React from "react";
import { useState } from "react";
import banana from "../../../../Asset/banana.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartPlus,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../../Common/ProductCard/ProductCard";
import './FeatureProduct.css'

const FeaturedProduct = () => {
  const [filter, setFilter] = useState("All");
  const products = [
    {
      name: "Crab Pool Security",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
      id:1
    },
    {
      name: "Crab Pool Security",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
      id:2
    },
    {
      name: "Crab Pool Security",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
      id:3
    },
    {
      name: "Crab Pool Security",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
      id:4
    },
    {
      name: "Crab Pool Security",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
      id:5
    },
    {
      name: "Crab Pool Security",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
      id:6
    },
  ];
  return (
    <div className="featured__container mt-5">
      <div className="featured__container__heding text-center">
        <h1>Featured Product</h1>
        <div className="featured__container__border"></div>
      </div>
      <div className="featured__filters text-center mt-3">
        <ul>
          <li
            className={`${filter === "All" && "active-filter"}`}
            onClick={() => setFilter("All")}
          >
            All
          </li>
          <li
            className={`${filter === "Fruits" && "active-filter"}`}
            onClick={() => setFilter("Fruits")}
          >
            Fruits
          </li>
          <li
            className={`${filter === "Fresh Meat" && "active-filter"}`}
            onClick={() => setFilter("Fresh Meat")}
          >
            Fresh Meat
          </li>
          <li
            className={`${filter === "Vegetables" && "active-filter"}`}
            onClick={() => setFilter("Vegetables")}
          >
            Vegetables
          </li>
          <li
            className={`${filter === "Fastfood" && "active-filter"}`}
            onClick={() => setFilter("Fastfood")}
          >
            Fastfood
          </li>
        </ul>
      </div>
      <div className="featured__products row">
        {/* {products.map((item, i) => (
          <div
            key={i}
            className="featured__product__card col-lg-3 col-md-6 mt-3"
          >
            <div className="product__card__img">
              <img src={item.img} alt="" />
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
                    {item.name}
                  </Link>
                </h6>
                <h5>${item.price}.00</h5>
              </div>
            </div>
          </div>
        ))} */}
        {products.map((item, i) => (
          <div
            key={i}
            className="featured__product__card col-lg-3 col-md-6 mt-3"
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;