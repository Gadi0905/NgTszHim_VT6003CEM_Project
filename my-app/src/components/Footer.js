// react
import React from 'react'
// bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// icon
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
/**
 * Component for show Footer.
 *
 * @component
 * @example
 * 
 * return (
 *     <Footer />
 * )
 */
export default function Footer() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            follow us:  <a href="https://www.facebook.com/"><AiFillFacebook size={30} /></a>
                            <a href="https://www.instagram.com/"><AiFillInstagram size={30} /></a>
                            <a href="https://twitter.com"><AiFillTwitterSquare size={30} /></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
