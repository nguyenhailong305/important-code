import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import logo from "../images/logo.png";
import "./header.scss";

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

export default function Header() {
  return (
    <header>
      <Navbar className="navbar__header" light expand={true}>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" width={60} height={60} />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className=" me-auto " navbar>
            {nav__links.map((item, index) => (
              <NavItem className="nav__links__items" key={index}>
                <NavLink href={item.path}>{item.display}</NavLink>
              </NavItem>
            ))}
          </Nav>
          <NavbarText>
            <InputGroup className="nav__input">
              <InputGroupText className="input__group">
                  <i className="ri-search-line"></i>
              </InputGroupText>
              <Input className="input" placeholder="Bạn tìm gì..." />
            </InputGroup>
          </NavbarText>
          <Nav navbar>
            
            {nav__icons.map((item, index) => (
              <NavItem className="nav__links__icons" key={index}>
                <NavLink href={item.path}>{item.icon}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
