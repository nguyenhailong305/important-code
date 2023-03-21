import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import ProductCommon from "../common/ProductCommon";
import ProductBanner from "../common/productBanner";
import "./product.scss";

function SampleNextArrow(props) {
  const { style, onClick , className } = props;
  return (
    <div
    className={`${className} custom-next-arrow`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick ,className} = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
    />
  );
}

const Product = ({title , titleButton}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const bannerProduct = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product__wrapper">
      <Container fluid>
        <h2 className="title__wrapper">{title}</h2>
        <Row>
          <Col lg="3">
            <Slider {...bannerProduct}>
              <ProductBanner linkImg="https://media.canifa.com/Simiconnector/list_image_tablet1678355043.webp" />
              <ProductBanner linkImg="https://media.canifa.com/Simiconnector/list_image_tablet_third1678355043.webp" />
            </Slider>
          </Col>
          <Col lg="9">
            <Slider {...settings} className="product__card">
              <ProductCommon
                linkImg="https://canifa.com/img/486/733/resize/2/t/2tp23s002-sa742-120-1.webp"
                title="Áo phông unisex trẻ em in Chip & Dale"
                price="118.300 ₫"
                oldPrice="169.000 ₫"
                titleButton={titleButton}
              />
              <ProductCommon
                linkImg="https://canifa.com/img/486/733/resize/2/t/2tp23s002-sa742-120-1.webp"
                title="abc"
              />
              <ProductCommon
                linkImg="https://canifa.com/img/486/733/resize/2/t/2tp23s002-sa742-120-1.webp"
                title="abc"
              />
              <ProductCommon
                linkImg="https://canifa.com/img/486/733/resize/2/t/2tp23s002-sa742-120-1.webp"
                title="abc"
              />
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
