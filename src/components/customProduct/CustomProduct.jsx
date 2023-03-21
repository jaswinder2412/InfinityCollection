import React from "react";

// Bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// import image

import ImageCrousal from '../../assets/image9.png'

//Owl Crousal
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; 

// SCSS
import "./CustomProduct.scss";

window.fn = OwlCarousel;


const CustomProduct = () => {
  return (
    <div className="fullCustomWidth bg-advertise mb-5">
        <div className="bg-coverBlack fullCustomWidth"></div>
      <div className="fullCustomWidth customContent ">
        <Row className="marginZero" xs={2} md={2}>
          <Col>
            <h2>
              Start Creating <br /> Your Own Product
            </h2>
            <p>
              Design your own T-Shirts, Sweat Shirts, hoodies, Shirts <br /> and
              many more product with us.
            </p>
            <Button variant="primary">Start Design</Button>
          </Col>
          <Col>
            <div className="fullCustomWidth">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div class="item">
                
              <img src={ImageCrousal} alt="" className="img-fluid" />
              </div>
              <div class="item">
                <img src={ImageCrousal} alt="" className="img-fluid" />
              </div>
              <div class="item">
                <img src={ImageCrousal} alt="" className="img-fluid" />
              </div>
              <div class="item">
                <img src={ImageCrousal} alt="" className="img-fluid" />
              </div>
              <div class="item">
                <img src={ImageCrousal} alt="" className="img-fluid" />
              </div>
              <div class="item">
                <img src={ImageCrousal} alt="" className="img-fluid" />
              </div>
            </OwlCarousel>
            </div>
          
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CustomProduct;
