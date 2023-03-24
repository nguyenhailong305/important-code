import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
} from "reactstrap";
import "./footer.scss";

const nav__links = [
  {
    path: "/woman",
    display: "Nữ",
  },
  {
    path: "/men",
    display: "Nam",
  },
  {
    path: "/kid",
    display: "Trẻ em",
  },
  {
    path: "/info-z",
    display: "Gelato-z",
  },
];

const nav__icons = [
  {
    path: "/woman",
    icon: <i class="ri-store-2-line" style={{ fontSize: "24px" }}></i>,
  },
  {
    path: "/men",
    icon: <i class="ri-heart-line" style={{ fontSize: "24px" }}></i>,
  },
  {
    path: "/kid",
    icon: <i class="ri-map-pin-user-line" style={{ fontSize: "24px" }}></i>,
  },
  {
    path: "/info-z",
    icon: <i class="ri-shopping-bag-line" style={{ fontSize: "24px" }}></i>,
  },
];


export default function Footer() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer>
      <div className="site___footer">
        <div className="footer__content">
          <Row>
            <Col lg="4">
              <div className="width__col__1">
                <div className="footer__col__1">
                  <h3>CÔNG TY CỔ PHẦN CANIFA</h3>
                  <p>
                    Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, nơi cấp: Sở Kế
                    hoạch và đầu tư Hà Nội
                  </p>
                  <p>
                    Trụ sở chính: Số 688, Đường Quang Trung, Phường La Khê, Quận
                    Hà Đông, Hà Nội, Việt Nam
                  </p>
                  <p>
                    Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành,
                    P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội
                  </p>
                  <p>Số điện thoại: +8424 - 7303.0222</p>
                  <p>Fax: +8424 - 6277.6419</p>
                  <p>Địa chỉ email: hello@canifa.com</p>
                </div>
              </div>
            </Col>
            <Col lg="2">
              <div className="footer__col__2">
                <h3>Thương hiệu</h3>
                <ul>
                  <li title="Giới thiệu">
                    <span>Giới thiệu</span>
                  </li>
                  <li title="Tin tức">
                    <span>Tin tức</span>
                  </li>
                  <li title="Tuyển dụng">
                    <span>Tuyển dụng</span>
                  </li>
                  <li title="Với cộng đồng">
                    <span>Với cộng đồng</span>
                  </li>
                  <li title="Hệ thống cửa hàng">
                    <span>Hệ thống cửa hàng</span>
                  </li>
                  <li title="Liên hệ">
                    <span>Liên hệ</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer__col__3">
                <h3>Hỗ trợ</h3>
                <ul>
                  <li title="Hỏi đáp">
                    <span>Hỏi đáp</span>
                  </li>
                  <li title="Chính sách KHTT">
                    <span>Chính sách KHTT</span>
                  </li>
                  <li title="Điều kiện - Điều khoản Chính sách KHTT">
                    <span>Điều kiện - Điều khoản Chính sách KHTT</span>
                  </li>
                  <li title="Chương trình dành cho KH mới">
                    <span>Chương trình dành cho KH mới</span>
                  </li>
                  <li title="Chính sách vận chuyển">
                    <span>Chính sách vận chuyển</span>
                  </li>
                  <li title="Hướng dẫn chọn size">
                    <span>Hướng dẫn chọn size</span>
                  </li>
                  <li title="Kiểm tra đơn hàng">
                    <span>Kiểm tra đơn hàng</span>
                  </li>
                  <li title="Tra cứu điểm thẻ">
                    <span>Tra cứu điểm thẻ</span>
                  </li>
                  <li title="Chính sách bảo mật thông tin KH">
                    <span>Chính sách bảo mật thông tin KH</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer__col__4">
                <h3 data-v-cf810c5e="">Tải ứng dụng trên điện thoại</h3>
                <div class="bancode">
                  <img
                    src="/assets/images/bancode.png"
                    width="100"
                    height="100"
                    alt=""
                  />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.canifa&amp;hl=en"
                    target="_blank"
                    aria-label="Google Play"
                  >
                    <img
                      src="/assets/images/googleplay.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </a>{" "}
                  <a
                    href="https://itunes.apple.com/vn/app/canifa/id1175895653?mt=8"
                    target="_blank"
                    aria-label="Apple Store"
                  >
                    <img
                      src="/assets/images/appstore.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </a>
                </div>
                <br />
                <h3>Phương thức thanh toán</h3>
                <p>
                  <img
                    src="/assets/images/pay.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </p>
                <div>
                  <a
                    href="http://online.gov.vn/(X(1)S(edqk3incgl5uzlmn5mxjtu0b))/Home/WebDetails/36833?AspxAutoDetectCookieSupport=1"
                    target="_blank"
                    aria-label="Pay"
                  >
                    <img
                      src="/assets/images/bocongthuong.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </Col>
            <div class="line"></div>
          </Row>
        </div>
        <div className="footer__bottom">
          <div class="copyright">© 2023 CANIFA</div>
          <div class="footer-social">
            <span>Visit Us</span>
            <a
              href="https://www.facebook.com/canifa.fanpage/"
              alt="facebook"
              aria-label="facebook"
              target="_blank"
              class="social social-facebook"
            ></a>
            <a
              href="https://www.instagram.com/canifa.fashion/"
              alt="instagram"
              aria-label="instagram"
              target="_blank"
              class="social social-instagram"
            ></a>
            <a
              href="https://www.youtube.com/CANIFAOfficial"
              alt="youtube"
              aria-label="youtube"
              target="_blank"
              class="social social-youtube"
            ></a>
          </div>
        </div>
      </div>
      <div>
        {scrollPosition > 100 ? (
          <button onClick={() => window.scrollTo(0, 0)} className="back-to-top"><i className="fas fa-chevron-up"></i></button>
        ) : null}
      </div>
    </footer>
  );
}
