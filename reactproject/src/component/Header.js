import React from "react";
import { Navbar, Image, Container, Nav, NavDropdown}from 
"react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header=()=>{
    return(
        <><b>
        <Navbar className="navbar-style" expand="lg">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand href="/">
                        <Image
                        src="images/logo.jpg"
                        className="img-style"
                        roundedCircle
                        />

         <h6 className="logo-name-style">
         Vishveshwaraya Technological University,Belagaum
         </h6>
                    </Navbar.Brand>
                </LinkContainer>

       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
                <Nav.Link href="/">About VTU</Nav.Link>
            </LinkContainer>

           <NavDropdown title="Admission_Details" id="basic-nav-dropdown">
            <LinkContainer to="/admin/login">
                <NavDropdown.Item href="/login/admin">
                    Login as Admin
                </NavDropdown.Item>
            </LinkContainer>
           </NavDropdown>

           <NavDropdown title="Academic" id="basic-nav-dropdown">
            <LinkContainer to='/admission'>
                <NavDropdown.Item href="/admission">Admission</NavDropdown.Item>
            </LinkContainer>

             <LinkContainer to='/Circular'>
            <NavDropdown.Item href="/Circular">
               Exam Circular & Notification
            </NavDropdown.Item>
            </LinkContainer>

            {/* <LinkContainer to='/Certificate'>
            <NavDropdown.Item href="Certificate">Certificate Issued</NavDropdown.Item>
            </LinkContainer> */}
            </NavDropdown> 
            
            
            <NavDropdown title="Examination" id="basic-nav-dropdown">
                {/* <LinkContainer to='/Guidelines'>
                <NavDropdown.Item href="Guidelines">
                    Examination Guidelines </NavDropdown.Item>
                    </LinkContainer> */}
               
            <LinkContainer to='/ExamApplication'>
           <NavDropdown.Item href="Application">
            Examination Application
            </NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/result'>
                <NavDropdown.Item href='/result'>Results</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>

            <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Departments">Civil Engg</NavDropdown.Item>
            <NavDropdown.Item href="/Departments">
             Computer Science & Engg
            </NavDropdown.Item> 
            <NavDropdown.Item href="/Departments">Mechanical Engg</NavDropdown.Item>
            </NavDropdown>
        </Nav>
       </Navbar.Collapse>
            </Container>
        </Navbar>
        </b>
        </>
    );
};

export default Header;