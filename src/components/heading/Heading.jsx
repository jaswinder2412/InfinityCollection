import React from "react";

// Bootstrap

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


// Scss
import './Heading.scss';

export default function Heading({ title }) {
  return (
    <div className="fullCustomWidth heading">
      <Row xs={1} md={3}>
        <Col>
          <hr />
        </Col>
        <Col>
          <h3 className="text-center mb-2">{title}</h3>
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
    </div>
  );
}
