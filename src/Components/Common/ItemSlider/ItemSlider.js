import React from 'react';
import Slider from "react-slick";

const ItemSlider = ({settings, children}) => {


    
     return (
        <Slider onSwipe={(l)=>console.log(l)} {...settings}>
            {children}
        </Slider>
    );
};



export default ItemSlider;    
