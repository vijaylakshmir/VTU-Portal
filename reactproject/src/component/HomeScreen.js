import React from "react";
import { Container, Col,Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return(
        <Container>
            <marquee className="my-3">
                <h5>
                    VTU Results 2023 out - Check Exam Results here!!!
                    <Link to="/result">Click here...</Link>Best of Luck!!!
                </h5>
            </marquee>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image-style"
                    src="images/img1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image-style"
                    src="images/img2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item> 

                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image-style"
                    src="images/img3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image-style"
                    src="images/img4.jpg"
                    alt="Fourth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image-style"
                    src="images/img5.jpg"
                    alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>

           <Row className="my-5" >
            <Col md={4} sm={12} className="p-style">
                <h4><Link to="/about">Vision</Link></h4>
                <p>
                    To become an outstanding Technological University at the 
                    cutting edge of science Technology
                    To plan the development of Technical education,
                    to establish value-based and need-based education and 
                    training in engineering and Technology, with a view to 
                    generate qualified and competent manpower, responsive to 
                    Technological and societal needs.
                    To become an outstanding Technological University at the 
                    cutting edge of Science and Technology that produces world
                     class Knowledge-delivery, Research, Extension and 
                    Leadership in Technology innovation for Industry and Society
                </p>
                <Link to='/about' className="btn btn-danger">Read More</Link>
            </Col>

            <Col md={4} sm={12} className="p-style">
                <h4><Link to="/about">Mission</Link></h4>
                <p>
                To become an outstanding Technological University at the 
                cutting edge of science Technology To plan the devlopment 
                of technical education ,to establish value-based and need-based education and training in engineering and
            technology with a view to generate qualified and competent manpower,
            responsive to technological and societal needs.To plan the development
            of technical education, to establish value-based and need-based education
            and training in engineering and technology, with a view to generate 
            qualified and competent manpower, responsive to technological and societal needs.
                </p>
                <Link to='/about' className="btn btn-danger">Read More</Link>
            </Col>

            <Col md={4} sm={12} className="p-style">
                <h4><Link to="/about">Mandate</Link></h4>

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
                <Link to='/about' className="btn btn-danger">Read More</Link>
            </Col>
           </Row>
        </Container>
    );
};

export default HomeScreen;

