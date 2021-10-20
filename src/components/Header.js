import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="Navbar fixed-top" light expand="md">
        <div className="container  p-2 ">
          <NavbarBrand className="brand-icon " href="/">
            webby <span className=" brand-color">Champ</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto  text-uppercase ms-2 " navbar>
              <NavItem>
                <NavLink className="nav-link" href="/home/">
                  home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/service/">
                  service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/price/">
                  price
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/about/">
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/contact/">
                  contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <section className="header-section">
        <div className="center-div">
          <h1 className="font-weight-bold">Welcome To Webby Champ .</h1>
          <p>
            We Design And Create World's Best Websites . Contact us to make your
            dream website
          </p>
          <div className="header-buttons">
            <a href="#"> Contact</a>
            <a href="#"> About Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
