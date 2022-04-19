import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, CardGroup, Card, Row, Col } from 'react-bootstrap';
import dog01 from './img/dog01.jpg';
import dog02 from './img/dog02.jpg';
import dog03 from './img/dog03.jpg';
import dog04 from './img/dog04.jpg';
import dog05 from './img/dog05.jpg';
import dog06 from './img/dog06.jpg';
import dog07 from './img/dog07.jpg';
import dog08 from './img/dog08.jpg';
import dog09 from './img/dog09.jpg';
import paw from './img/paw.png';

function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Canine Shelter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#signIn">SIGN IN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* body */}
      <br />
      <CardGroup>
        <Container>
          <Row>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog01} width={480} height={270} />
                <Card.Body>
                  <Card.Title>MAX</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog02} width={480} height={270} />
                <Card.Body>
                  <Card.Title>KOBE</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog03} width={480} height={270} />
                <Card.Body>
                  <Card.Title>OSCAR</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog04} width={480} height={270} />
                <Card.Body>
                  <Card.Title>COOPER</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog05} width={480} height={270} />
                <Card.Body>
                  <Card.Title>OAKLEY</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog06} width={480} height={270} />
                <Card.Body>
                  <Card.Title>MAC</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog07} width={480} height={270} />
                <Card.Body>
                  <Card.Title>CHARLIE</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog08} width={480} height={270} />
                <Card.Body>
                  <Card.Title>REX</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src={dog09} width={480} height={270} />
                <Card.Body>
                  <Card.Title>RUDY</Card.Title>
                  <Row>
                    <Col md="auto"><img src={paw} alt="paw" width={50} height={50} /></Col>
                    <Col>
                      <Card.Text>
                        SEX: <br />
                        AGE: <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </CardGroup>
      <br />
    </div>
  );
}

export default App;
