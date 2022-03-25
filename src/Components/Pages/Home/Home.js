import React from 'react';
import Layout from '../../Layout/Layout';
import Slider from "react-slick";
import ProductCarousel from "./ProductCarousel/ProductCarousel"
import './Home.css'
import FeaturedProduct from './FeatureProduct/FeatureProduct';
import BannerLayout from './Banner/BannerLayout';
const Home = () => {
     return (
            <Layout>
                <div>
                  <BannerLayout/>
                    <ProductCarousel />
                    <FeaturedProduct />
                </div>
            </Layout>
    );
};

export default Home;    