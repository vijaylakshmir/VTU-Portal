import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUsScreen = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col style={{ marginTop: "8px" }}>
          <img src="images/abt1.jpg" className="about-img-style" height="300px" width="520px" alt="image"/>
        </Col>
        <Col className="my-5" style={{ textAlign: "justify" }}>
          <h4>
            <Link to="/about">Vision</Link>
          </h4>
          <p>
            To become an outstanding technological university at the cutting
            edge of science technology. To become an outstanding Technological University
            at the cutting edge of Science and Technology that produces world class
            Knowledge-delivery, Research,Extension and Leadership in Technology
            innovation for Industry and Society.
          </p>
        </Col> 
      </Row>

      <Row className="my-3">
      <Col className="my-5" style={{ textAlign: "justify" }}>
          <h4>
            <Link to="/about">Mission</Link>
          </h4>
          <p>
            To plan the devlopment of technical education ,to establish
            value-based and need-based education and training in engineering and
            technology with a view to generate qualified and competent manpower,
            responsive to technological and societal needs.To plan the development
            of technical education, to establish value-based and need-based education
            and training in engineering and technology, with a view to generate 
            qualified and competent manpower, responsive to technological and societal needs.
          </p>
        </Col>
        <Col style={{ marginTop: "8px" }}>
          <img src="images/abt2.jpg" className="about-img-style" height="290px" width="530px" alt="img1"/>
        </Col>
        
      </Row>

      <Row className="my-3">
        <Col style={{ marginTop: "8px" }}>
          <img src="images/abt3.jpg" className="about-img-style" height="300px" width="530px"/>
        </Col>
        <Col className="my-5" style={{ textAlign: "justify" }}>
          <h4>
            <Link to="/about">Mandate</Link>
          </h4>
          <p>
          The Visvesvaraya Technological University has been established by the Government
          of the Karnataka in order to Promote planned and sustainable development of 
          technical education consistent with state and national policies.
          Design need based programs that ensure adequate human resource of the right kind.
          Establish objective evaluation and certification systems for students,programs
          and institutions.Collaborate with national and international institutions
          R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and 
          user agencies.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsScreen;