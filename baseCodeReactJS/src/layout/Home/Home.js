import React, { useEffect, useState } from "react";
import "./home.scss";
import banner from "../../components/images/banner.png";
import subBanner1 from "../../components/images/sub-banner-1.webp";
import subBanner2 from "../../components/images/sub-banner-2.webp";
import Subnav from "../../components/common/Subnav";
import {
  Col,
  Container,
  Row,
  Input,
  InputGroup,
  InputGroupText,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

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
              <img
                src={subBanner1}
                alt="sub-banner-1"
                className="sub__banner__img"
              />
            </Col>
            <Col lg="6">
              <img
                src={subBanner2}
                alt="sub-banner-2"
                className="sub__banner__img"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Product title="Sản phẩm mới" titleButton="Độc quyền Online" />
      <Product title="Sản phẩm giá tốt" titleButton="Gía tốt" />
      <Product title="Geneto Z" />

      <div className="subscribe__social">
        <Container fluid>
          <Row>
            <Col lg="6">
              <div className="block__subscribe">
                <div className="block__title">Đăng ký nhận bản tin</div>
                <div className="block__content">
                  <InputGroup className="block__content__input">
                    <Input
                      className="block__input"
                      placeholder="Nhập email của bạn..."
                    />
                    <InputGroupText className="block__input__group">
                      <a className="block__input__icon"></a>
                    </InputGroupText>
                  </InputGroup>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="block__social">
                <div className="block__title">Kết nối ngay</div>
                <div className="block__content">
                  <a
                    href="https://www.facebook.com/canifa.fanpage/"
                    className="social social-facebook"
                  ></a>
                  <a
                    href="https://www.instagram.com/canifa.fashion/"
                    className="social social-instagram"
                  ></a>
                  <a
                    href="https://www.youtube.com/CANIFAOfficial"
                    className="social social-youtube"
                  ></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="block__blog">
        <Container fluid>
          <div className="block__title">#genetolife</div>
          <Row>
            <Col lg="4">
              <Card>
                <img
                  src="https://media.canifa.com/mageplaza/blog/post//c/a/canh-bao-4_1.webp"
                  alt="anh-blog"
                />
                <CardBody>
                  <CardTitle tag="h5">Tất cả </CardTitle>
                  <CardSubtitle className="sub-title" tag="h6">
                    [CẢNH BÁO] Chiêu trò lừa đảo, mạo danh CANIFA tuyển mẫu nhí,
                    CTV và nhân sự
                  </CardSubtitle>

                  <CardSubtitle className="date" tag="h6">
                    18:52 29/1/2023
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <img
                  src="https://media.canifa.com/mageplaza/blog/post//c/a/canh-bao-4_1.webp"
                  alt="anh-blog"
                />
                <CardBody>
                  <CardTitle tag="h5">Tất cả </CardTitle>
                  <CardSubtitle className="sub-title" tag="h6">
                    [CẢNH BÁO] Chiêu trò lừa đảo, mạo danh CANIFA tuyển mẫu nhí,
                    CTV và nhân sự
                  </CardSubtitle>

                  <CardSubtitle className="date" tag="h6">
                    18:52 29/1/2023
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <img
                  src="https://media.canifa.com/mageplaza/blog/post//c/a/canh-bao-4_1.webp"
                  alt="anh-blog"
                />
                <CardBody>
                  <CardTitle tag="h5">Tất cả </CardTitle>
                  <CardSubtitle className="sub-title" tag="h6">
                    [CẢNH BÁO] Chiêu trò lừa đảo, mạo danh CANIFA tuyển mẫu nhí,
                    CTV và nhân sự
                  </CardSubtitle>

                  <CardSubtitle className="date" tag="h6">
                    18:52 29/1/2023
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="read__more">
        <a href="#" class="" aria-label="Xem thêm">
          Xem thêm
        </a>
      </div>
    </section>
  );
};

export default Home;
