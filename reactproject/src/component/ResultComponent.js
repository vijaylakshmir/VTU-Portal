import React, { useState } from "react";
import { Button,Form,Row,Col,Container,Alert } 
from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const ResultComponent = () => {
const [registerId,setRegisterId] = useState("");
console.log("registerId",registerId);
const [errorMessage,setErrorMessage] = useState("");

const navigate = useNavigate()
console.log("navigate",navigate)

const submitHandler =(e,id) => {
    e.preventDefault();
    console.log("id",id);
    if (registerId == "") {
        setErrorMessage("Please Enter registerId");
    } else {
        axios.get('http://localhost:3002/studentData')
        .then((response) => {
            console.log("response",response.data)
            response.data.map((data)=>{
                if(data.registerId == id){
                    navigate(`/resultpage/${id}`)
                }else{
                    setErrorMessage("Invalid Register Id")
                }
            })

        })
        .catch((error)=>console.log("error",error))
    }
};
console.log("errorMessage",errorMessage);
    return (
        <Container>
            <Link to='/' className="btn btn-dark my-3">
            Go Back
            </Link>
            <Row className="justify-content-center">
                <Col md={6} sm={12}>
                    <h3>Check your Results...</h3>
                    <Form onSubmit={(e)=>submitHandler(e, registerId)}>
                        <Form.Group controlId="registerno" className="my-3">
                            <Form.Label>Enter your Register No</Form.Label>
                            <Form.Control 
                            type='text'
                            placeholder='enter registerno'
                            value={registerId}
                            onChange={(e) => setRegisterId(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                        {/*{errorMessage ? <div className="text-danger">{errorMessage</div>:null*/}
                    </Form>
                    {errorMessage ? <Alert variant="danger">{errorMessage}</Alert>:null}
                </Col>
            </Row>
        </Container>
    );
};

export default ResultComponent