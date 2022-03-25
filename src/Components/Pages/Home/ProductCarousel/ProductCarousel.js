import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import banana from "../../../../Asset/banana.png"
import ItemSlider from '../../../Common/ItemSlider/ItemSlider';

const ProductCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

    
  const products = [
    {
       id:1,
      names: "drink fruits",
      img: banana,
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      price: 30,
    },
    {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
     {
        id:1,
       names: "drink fruits",
       img: banana,
       description:
         "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
       price: 30,
     },
  ];
     return (
                <div>
                        <ItemSlider settings={settings} > 
                            {products.map(dt=> <ProductSlideView key={dt.id} data={dt} /> ) }
                        </ItemSlider>
      </div>
    );
};



export default ProductCarousel;    

const ProductSlideView = ({data}) => {
    console.log(data.names)
    const { names } = data;
    return (
        <>
            <div className="product-slide-view">
                <img src={banana} alt="" />
                <Link to="/"> { names } </Link>
            </div>
        </>
    )
}