import React from "react";
const BannerContent = () => {
  return (
    <div className="banner-content d-flex align-items-center mt-3">
      <div className="banner-text ms-5">
        <h6>FRUIT FRESH</h6>
        <h1>
          Vegetable <br /> 100% Organic
        </h1>
        <p>Free Pickup and Delivery Available</p>
        <button className="btn-search btn-lg mt-3">SHOP NOW <i class="fa-solid fa-bucket"></i></button>
      </div>
    </div>
  );
};

export default BannerContent;
