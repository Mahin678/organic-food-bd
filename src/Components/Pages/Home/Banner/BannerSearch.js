import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const BannerSearch = () => {
  return (
    <div className="row">
      <div className="col-9">
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="What do you need?"
          />
          <button className=" btn-search btn-lg">Search</button>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex float-end">
          <div className="call-icon">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
          </div>
          <div className="ms-2">
            <span className="banner-number">+65 11.188.888</span> <br />
            <span>support 24/7 time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;
