import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


import "./style.scss";

const productBanner = ({ linkImg}) => {
  return (
    <div className="product__banner__card">
        <div className="product__banner__img">
          <img src={linkImg} alt="product__banner__img" />
        </div>

    </div>
  );
};

export default productBanner;
