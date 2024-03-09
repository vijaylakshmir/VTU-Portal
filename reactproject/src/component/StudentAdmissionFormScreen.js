import React,{useState} from "react";
import { Container,Col,Row,Button,Form,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentAdmissionFormScreen = () => {

    const[firstName,setFirstName] = useState('')
    const[middleName,setMiddleName] = useState('')
    const[lastName,setLastName] = useState('')
    const[collegeName,setCollegeName] = useState('')
    const[passOutYear,setPassOutYear] = useState('')
    const[error,setError] = useState('')
    const[success,setSuccess] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        if( firstName == '' || middleName == '' || lastName == ''
        || collegeName == '' || passOutYear ==''){
            setError('Please Fill all details')
        } else {
            const admissionDetails = {
                firstName : firstName,
                middleName:middleName,
                lastName:lastName,
                collegeName:collegeName,
                passOutYear:passOutYear
            }
            axios.post('http://localhost:3003/admission',admissionDetails)
            .then((response) => console.log("res", response.data))
            .catch((err) => console.log("err",err))
            setSuccess("Data Submitted Successfully!!!")
        }
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setCollegeName('')
        setPassOutYear('')
    }

    return(
        <Container>
            <Link to="/" className="btn btn-dark my-3">
                Go Back
            </Link>
            <Row className="justify-content-center">
                <Col md={6} sm={12}>
                    <h3>Fill the below Form Details</h3>
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} controlId="firstName" className="my-3">
                            <Form.Label column sm={4}>
                                FirstName:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text"
                                 placeholder="Enter firstName"
                                 value = {firstName}
                                 onChange={(e)=>setFirstName(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="middleName" className="my-3">
                            <Form.Label column sm={4}>
                                MiddleName:
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text"
                                 placeholder="Enter middlename"
                                 value={middleName}
                                 onChange={(e)=>setMiddleName(e.target.value)}/>
                                </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="lastName" className="my-3">
                                    <Form.Label column sm={4}>
                                        LastName:
                                    </Form.Label>
                                    <Col sm={6}>
                                        <Form.Control type="text"
                                         placeholder="Enter lastName"
                                         value={lastName}
                                 onChange={(e)=>setLastName(e.target.value)}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="collegeName"  className="my-3">
                                    <Form.Label column sm={4}>
                                        CollegeName:
                                    </Form.Label>
                                    <Col sm={6}>
                                        <Form.Control type="text" 
                                        placeholder="Enter collegeName"
                                        value={collegeName}
                                 onChange={(e)=>setCollegeName(e.target.value)}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="date" className="my-3">
                                    <Form.Label column sm={4}>
                                        Pass Out Year:
                                    </Form.Label>
                                    <Col sm={6}>
                                        <Form.Control type="date" placeholder=""
                                        value={passOutYear}
                                        onChange={(e)=>setPassOutYear(e.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Button type='submit'>Submit</Button>
                                {
                                  error ?
                                  <Alert variant="danger">{error}</Alert>
                                  : ''
                                }
                                {  
                                    success ?
                                    <Alert variant="success">{success}</Alert>
                                    : null
                                }
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}

export default StudentAdmissionFormScreen;