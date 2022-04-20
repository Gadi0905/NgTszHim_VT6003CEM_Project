// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// custom components
import Header from './components/header.js';
import CustomCard from './components/custom_card.js';
import Footer from './components/footer.js';
// bootstrap components
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
// image
import Dog01 from './img/dog01.jpg';
import Dog02 from './img/dog02.jpg';
import Dog03 from './img/dog03.jpg';
import Dog04 from './img/dog04.jpg';
import Dog05 from './img/dog05.jpg';
import Dog06 from './img/dog06.jpg';
import Dog07 from './img/dog07.jpg';
import Dog08 from './img/dog08.jpg';
import Dog09 from './img/dog09.jpg';

function App() {
  return (
    <div>
      <Header />
      <br />
      <CardGroup>
        <Container>
          <Row>
            <CustomCard dogImg={Dog01} name='Max' sex='M' age='1' />
            <CustomCard dogImg={Dog02} name='KOBE' sex='F' age='2' />
            <CustomCard dogImg={Dog03} name='OSCAR' sex='M' age='3' />
          </Row>
          <br />
          <Row>
            <CustomCard dogImg={Dog04} name='COOPER' sex='M' age='1' />
            <CustomCard dogImg={Dog05} name='OAKLEY' sex='F' age='2' />
            <CustomCard dogImg={Dog06} name='MAC' sex='M' age='3' />
          </Row>
          <br />
          <Row>
            <CustomCard dogImg={Dog07} name='CHARLIE' sex='M' age='1' />
            <CustomCard dogImg={Dog08} name='REX' sex='F' age='2' />
            <CustomCard dogImg={Dog09} name='RUDY' sex='M' age='3' />
          </Row>
        </Container>
      </CardGroup>
      <br />
      <Footer />
    </div>
  );
}

export default App;
