import React from 'react'
// bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// react router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// screens
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';

export default function Header() {
    return (
        <BrowserRouter>
            <div>
                <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">The Canine Shelter</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto"></Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/SignIn">SIGN IN</Nav.Link>
                                    <Nav.Link as={Link} to="/SignUp">SIGN UP</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/SignIn' element={<SignIn />}></Route>
                        <Route path='/SignUp' element={<SignUp />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
