'use client';

import { Row, Col } from 'react-bootstrap';

const CenterText = () => (
  <Row id="centerText" className="align-items-center justify-content-center">
    <Col xs={4} className="text-center" id="centerTextBox">
      <h1>Brewery-to-Table Dining</h1>
      <h2>in the heart of Kailua</h2>
    </Col>
  </Row>
);

export default CenterText;