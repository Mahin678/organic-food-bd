import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> 
      </Route>
    </Routes>
  </BrowserRouter>
        
  );
}
