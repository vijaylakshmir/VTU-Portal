import React from "react";
import { Row,Col,Container } from "react-bootstrap";
const Footer=()=>{
    const currentYear = new Date().getFullYear()
    return(
        <footer>
            <Row className='text-center'>
             <Col>
             <p>Vishveshwaraya Technological University &copy;
                {currentYear}</p>
                </Col>
            </Row>
        </footer>
    )
}
export default Footer