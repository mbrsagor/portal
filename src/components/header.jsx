import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../scss/header.scss";

export default function Header() {
  return (
    <section className="header">
      <Container>
        <Row>
          <Col className={2}>
            <div className="logo">
                <a href="/">Covid19</a>
            </div>
          </Col>
          <Col className={10}>
            <h2>Nav...</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
