import React from 'react'

//Bootstrap Componenets 
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// image imports
 import Logo from '../../assets/Logo.png'

// Fa Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 

import "./NavbarCustom.scss";

const NavigationBar = () => {
  return (
    <div className="NavigationCustom">
      <Navbar   expand="lg"> 
        <Container fluid>
          <Navbar.Brand href="#" className='halfWidth text-center'>
            <img src={Logo} alt="Infinity Collections" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className='me-3' href="#action1">Home</Nav.Link>
              <Nav.Link className='me-3' href="#action2">Shop</Nav.Link>
              <NavDropdown className='me-3' title="Collections" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Men
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Women
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='me-3' href="#">
                Blog
              </Nav.Link>
              <Nav.Link href="#">
                Contact Us
              </Nav.Link>
            </Nav>
            <div className="d-flex iconwidth">
            <FontAwesomeIcon icon={faSearch} className="text-dark me-3" />
            <FontAwesomeIcon icon={faCartPlus} className="text-dark" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> 
  );
};

export default NavigationBar;
