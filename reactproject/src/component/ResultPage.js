import React, {useEffect,useState}from "react";
import { Form,Container,Row,Col } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import TableData from "./TableData";
import axios from "axios";

const ResultPage = () => {
    const [studentDetails,setStudentDetails]=useState([])

    const value=useParams()
    console.log("value",value)

    useEffect(()=>{
        axios.get('http://localhost:3002/studentData')
        .then((response)=>{
            console.log("res",response.data)
            response.data.map((item)=>{
                if(item.registerId===value.id)
                setStudentDetails(item)
            })
        })
        .catch((err)=>console.log("err",err))
    },[])
    console.log("data",studentDetails)

    return(
        <Container>
            <Row className="justify-content-center my-3">
                <Col md={6}>
                    <h4>Vishveshwaraya Technological University,Belagaum</h4>
                    <h6 style={{marginLeft:"5rem"}}>VII-Semester, B.E Examination Result,
                    Nov/Dec.2023</h6>
                </Col>
            </Row>

         <Row>
            <Col md={6} sm={12}>
                {
                    studentDetails !== undefined &&
                <Form>
                <Form.Group controlId="studentName">
                        <Form.Label>Student Name :</Form.Label>
                    <Form.Label style={{marginLeft:"5.2rem"}}>
                        {studentDetails.studentName}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="fatherName">
                        <Form.Label>Father's / Mother's Name :</Form.Label>
                    <Form.Label style={{marginLeft:"1rem"}}>
                    {studentDetails.fatherName}
                    </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="collegeName">
                        <Form.Label>College Name :</Form.Label>
                    <Form.Label style={{marginLeft:"5rem"}}>
                    {studentDetails.collegeName}
                    </Form.Label>
                    </Form.Group>
                </Form>

}
            </Col>

            <Col md={6} sm={12}>
                {
                    studentDetails !== undefined &&
                <Form style={{marginLeft:"20rem"}}>
                <Form.Group controlId="registerId">
                        <Form.Label>Register No :</Form.Label>
                        <Form.Label>{studentDetails.registerId}</Form.Label>
                        </Form.Group>
                </Form>
}
            </Col>           
         </Row>
         <TableData studentId={studentDetails.registerId}/>
        </Container>
    )
}

export default ResultPage