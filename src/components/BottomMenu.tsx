'use client';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-bootstrap-icons';
const BottomMenu = () => (
  <footer id="bottomMenu" className="footer mt-auto py-3 bg-dark">
    <Container>
      <Row>
        <Col>
          <Image src="/maui-cropped-Logo-1.png" alt="Maui Brewing Co. Logo"  width={175} />
        </Col>
        <Col>
          <h3>MAUI</h3>
          <br/>
          KIHEI<br/>
          KA&apos;ANAPALI
        </Col>
        <Col>
          <h3>OAHU</h3>
          <br/>
          KILUA<br/>
          WAIKIKI
        </Col>
        <Col>
          BREWERY
          <br/>
          CONTACT US<br/>
          GIFT CARDS
        </Col>
        <Col>
          NEWSLETTER
          <br/>
          <input type="text" placeholder="Enter Email"/>
          <Button>SUBMIT</Button> <br/>
          <Facebook size={35} className="mx-2 my-2"/>
          <Twitter size={35} className="mx-2 my-2"/>
          <Instagram size={35} className="mx-2 my-2"/>
          <Linkedin size={35} className="mx-2 my-2"/>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default BottomMenu;