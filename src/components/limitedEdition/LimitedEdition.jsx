import React from "react";

// Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//Images
import Product from "../../assets/product.png";

// Components
import Heading from "../heading/Heading";

// Scss
import "./LimitedEdition.scss";

const LimitedEdition = () => {


  return (
    <div className="fullCustomWidth">
      <Container>
        <Heading title="Limited Edition" />
        <Row xs={2} md={4} className="g-4 mb-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={Product} />
                <Card.Body>
                  <Card.Text>
                    <Row md={2}>
                      <Col className="text-start">Product</Col>
                      <Col className="text-end">20$</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LimitedEdition;
