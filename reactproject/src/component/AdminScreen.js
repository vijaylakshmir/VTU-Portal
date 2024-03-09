import React,{useState} from 'react';
import { Form, Container, Button, Row, Col,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FaEyeSlash} from 'react-icons/fa'

const AdminScreen =()=>{

    const navigate=useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(email === '' || password === ''){
            setError("Please enter all fields")
        }else {
            axios.get('http://localhost:3001/loginAdmin')
            .then((res)=>{
                console.log("res",res.data)
                res.data.map((data)=>{
                    if(data.email=== email && data.password=== password){
                        navigate('/admin/admissiondetails')
                    }else{
                        setError("Invalid credentials")
                    }
                })
            })
        }
    }
    return(
        <Container>
            <Row className='justify-content-center my-3'>
                <Col md={6} sm={12}>
                    <h4>Sign In</h4>

                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='email' className='my-3'>
                        <Form.Label>Email</Form.Label>
                         <Form.Control type='email' placeholder='enter email'
                         value={email} onChange={(e) => setEmail(e.target.value)}
                         style={{ borderColor: email ? '' : 'red' }}
                         />
                        </Form.Group>

                      <Form.Group  controlId='password' className='my-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='enter 
                        password' value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        style={{ borderColor: email ? '' : 'red' }}
                        />
                        {/* <FaEyeSlash/> */}
                      </Form.Group>

                      <Button type='submit'>Submit</Button>

                      {
                        error ? <Alert variant='danger'>{error}</Alert>:''
                      }
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminScreen
