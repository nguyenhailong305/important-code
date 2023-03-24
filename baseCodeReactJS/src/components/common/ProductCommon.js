import React from "react";
import { Card, CardBody } from "reactstrap";
import productImg1 from "../images/product-1.webp";
import { Link } from "react-router-dom";

import "./style.scss";

const ProductCommon = ({ linkImg, title, price, titleButton, oldPrice }) => {
  return (
    <div className="product__card">
      <Card>
        <div className="product__img">
          <img src={linkImg} alt="product__img" />
          <button type="button" class="product__btn">
            <Link to="/product">Thêm vào giỏ hàng</Link>
          </button>
          <span className="product__sale">-30%</span>
          <a href="#" className="product__wishlist"> 
            <span className="action__wishlist">Yêu thích</span>
            <div className="action__icon" ></div>
            
          </a>
          

        </div>
      </Card>
      <CardBody>
        <div className="card__top ">
          <button
            className="color-selector"
            style={{ backgroundColor: "#ff0000" }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: "#ff6000" }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: "#ff0060" }}
          ></button>
        </div>
        <div className="card__content">
          <h3 className="card__title ">
            <Link to={`/product`}>{title}</Link>
          </h3>
          <h3 className="card__price">{price}</h3>
          <h3 className="card__price__old">{oldPrice}</h3>
          <div className="card__bottom">
            <Link to={`/product`}>{titleButton}</Link>
          </div>
        </div>
      </CardBody>
    </div>
  );
};

export default ProductCommon;
