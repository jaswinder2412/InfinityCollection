import React from "react";

// Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

// Scss
import './Collection.scss'

const Collection = () => {
  return (
    <div className="collectionSection mb-5">
    <Container >        
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="https://z9n2r9j5.stackpathcdn.com/wp-content/uploads/2019/08/Screen-Shot-2022-05-06-at-9.29.22-AM.png?x49299" />
              <Card.Body>
                <Card.Title>Winter Collection</Card.Title>
                <Card.Text>
                  Shop Now
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

export default Collection;
