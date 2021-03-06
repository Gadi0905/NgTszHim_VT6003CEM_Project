// react
import React from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// image
import Paw from '../img/paw.png';
/**
 * Component for show dogImg, name, sex, age.
 *
 * @component
 * @example
 * 
 * const dogImg = ""
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * const sex = "M"
 * 
 * return (
 *   <CustomCard dogImg={dogImg} name={name} sex={sex} age={age} />
 * )
 * 
 */
export default function CustomCard({ dogImg, name, sex, age }) {
    return (
        <Col>
            <Card border="dark">
                <Card.Img variant="top" src={dogImg} width={480} height={270} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Row>
                        <Col md="auto"><img src={Paw} alt="paw" width={50} height={50} /></Col>
                        <Col>
                            <Card.Text>
                                SEX: {sex}<br />
                                AGE: {age}<br />
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}