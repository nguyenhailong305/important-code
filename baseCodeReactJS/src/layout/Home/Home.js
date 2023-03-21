import React, { useEffect, useState } from "react";
import "./home.scss";
import banner from "../../components/images/banner.png";
import subBanner1 from "../../components/images/sub-banner-1.webp";
import subBanner2 from "../../components/images/sub-banner-2.webp";
import Subnav from "../../components/common/Subnav";
import { Col, Container, Row } from "reactstrap";
import ProductCommon from "../../components/common/ProductCommon";
import Product from "../../components/Product/Product";

const Home = () => {
  const [textList, setTextList] = useState([
    "Thêm vào giỏ  499.000 ₫ để  miễn phí vận chuyển",
    "ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày",
  ]);

  return (
    <section>
      <Subnav title="ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày" />
      <div className="banner">
        <img src={banner} alt="banner" className="banner__main" />
      </div>
      <div className="sub__banner">
        <Container fluid>
          <Row>
            <Col lg="6">
              <img src={subBanner1} alt="sub-banner-1" className="sub__banner__img"/>
            </Col>
            <Col lg="6">
              <img src={subBanner2} alt="sub-banner-2" className="sub__banner__img"/>
            </Col>
          </Row>
        </Container>
      </div>
      <Product title="Sản phẩm mới" titleButton="Độc quyền Online"/>
      <Product title="Sản phẩm giá tốt" titleButton="Gía tốt"/>
      <Product title="Geneto Z"/>
        
    </section>
  );
};

export default Home;
